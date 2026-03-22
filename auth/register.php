<?php
require_once __DIR__ . "/../includes/db.php";
require_once __DIR__ . "/../includes/functions.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $payload = json_decode(file_get_contents("php://input") ?: "", true);
    if (!is_array($payload)) {
        json_response(["ok" => false, "error" => "Invalid JSON payload."], 400);
    }

    $username = trim((string)($payload["username"] ?? ""));
    $email = strtolower(trim((string)($payload["email"] ?? "")));
    $password = (string)($payload["password"] ?? "");

    if ($username === "" || $email === "" || $password === "") {
        json_response(["ok" => false, "error" => "Username, email and password are required."], 422);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        json_response(["ok" => false, "error" => "Please enter a valid email."], 422);
    }

    if (strlen($password) < 6) {
        json_response(["ok" => false, "error" => "Password must be at least 6 characters."], 422);
    }

    $stmt = $db->prepare("SELECT id FROM users WHERE email = ? OR username = ? LIMIT 1");
    $stmt->bind_param("ss", $email, $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        json_response(["ok" => false, "error" => "Username or email already exists."], 409);
    }
    $stmt->close();

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    $insert = $db->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $insert->bind_param("sss", $username, $email, $passwordHash);
    $insert->execute();
    $newId = (int)$insert->insert_id;
    $insert->close();

    json_response([
        "ok" => true,
        "user" => [
            "id" => $newId,
            "username" => $username,
            "email" => $email,
        ],
    ], 201);
}
