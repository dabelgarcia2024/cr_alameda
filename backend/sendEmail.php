<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    // Responder a las solicitudes OPTIONS
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'celebremosmdz@gmail.com';
    $subject = 'Nuevo mensaje de contacto';
    $body = "Nombre y Apellido: $name\nEmail: $email\nTeléfono: $phone\nMensaje:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email enviado exitosamente."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error al enviar el email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Solicitud no válida."]);
}
?>
