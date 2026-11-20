<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://mellamowalter.cl');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);

$nombre  = isset($body['nombre'])  ? trim(strip_tags($body['nombre']))  : '';
$email   = isset($body['email'])   ? trim(strip_tags($body['email']))   : '';
$mensaje = isset($body['mensaje']) ? trim(strip_tags($body['mensaje'])) : '';

if (!$nombre || !$email || !$mensaje) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Faltan campos requeridos']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Correo inválido']);
    exit;
}

$to      = 'hola@wnoack.cl';
$subject = 'Nuevo mensaje de contacto - mellamowalter.cl';
$headers = implode("\r\n", [
    'From: no-reply@mellamowalter.cl',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
]);

$body_text = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje\n\n---\nEnviado desde mellamowalter.cl";

$sent = mail($to, $subject, $body_text, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Error al enviar']);
}
