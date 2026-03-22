<?php
require_once __DIR__ . "/../includes/db.php";
require_once __DIR__ . "/../includes/functions.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $payload = json_decode(file_get_contents("php://input") ?: "", true) ?: $_POST;
    
    if (!is_array($payload)) {
        if (!empty($_SERVER['HTTP_X_REQUESTED_WITH'])) {
            json_response(["ok" => false, "error" => "Invalid JSON payload."], 400);
        } else {
            die("Invalid request");
        }
    }

    $identifier = trim((string)($payload["identifier"] ?? $payload["email"] ?? ""));
    $password = (string)($payload["password"] ?? "");

    if ($identifier === "" || $password === "") {
        if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strpos($_SERVER["CONTENT_TYPE"] ?? "", "json") !== false) {
            json_response(["ok" => false, "error" => "Username/email and password are required."], 422);
        } else {
            die("Username/email and password are required.");
        }
    }

    $stmt = $db->prepare("SELECT id, username, email, password, address, bio, avatar FROM users WHERE email = ? OR username = ? LIMIT 1");
    $stmt->bind_param("ss", $identifier, $identifier);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc() ?: null;
    $stmt->close();

    if (!$user || !password_verify($password, (string)$user["password"])) {
        if (strpos($_SERVER["CONTENT_TYPE"] ?? "", "json") !== false) {
            json_response(["ok" => false, "error" => "Invalid credentials."], 401);
        } else {
            die("Invalid credentials.");
        }
    }

    session_regenerate_id(true);
    $_SESSION["user"] = [
        "id" => (int)$user["id"],
        "username" => (string)$user["username"],
        "email" => (string)$user["email"],
        "address" => $user["address"] ?? null,
        "bio" => $user["bio"] ?? null,
        "avatar" => $user["avatar"] ?? null,
    ];

    if (strpos($_SERVER["CONTENT_TYPE"] ?? "", "application/json") !== false) {
        json_response([
            "ok" => true,
            "user" => $_SESSION["user"],
        ]);
    } else {
        // Fallback for traditional form submission
        header("Location: ../dashboard.php");
        exit;
    }
}
