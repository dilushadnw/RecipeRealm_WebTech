<?php
require_once __DIR__ . "/../includes/db.php";
require_once __DIR__ . "/../includes/functions.php";

session_unset();
session_destroy();
json_response(["ok" => true, "message" => "Logged out successfully"]);
