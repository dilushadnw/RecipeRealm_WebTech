<?php
function json_response(array $payload, int $statusCode = 200): void {
    http_response_code($statusCode);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function redirect($url) {
    header("Location: $url");
    exit;
}

