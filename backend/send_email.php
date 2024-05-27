<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = $_POST['to'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $headers = "From: Tu Nombre <tu_correo@gmail.com>\r\n";
    $headers .= "Reply-To: tu_correo@gmail.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $result = mail($to, $subject, $message, $headers);

    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Correo enviado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?>
