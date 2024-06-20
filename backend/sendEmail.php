<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar si las variables POST están definidas y no están vacías
    if (isset($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        // Validar campos vacíos
        if (empty($name) || empty($email) || empty($phone) || empty($message)) {
            echo json_encode(['status' => 'error', 'message' => 'Todos los campos son obligatorios.']);
            exit();
        }

        $para = "celebremosmdz@gmail.com"; // Reemplaza con tu dirección de correo
        $asunto = "Nuevo mensaje del formulario de contacto";
        $cuerpo = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nMensaje: $message";
        $headers = "From: $email";

        // Enviar correo
        if (mail($para, $asunto, $cuerpo, $headers)) {
            // Enviar mensaje de WhatsApp
            $url_whatsapp = "https://api.whatsapp.com/send?phone=+542617457071&text=" . urlencode($cuerpo); // Reemplaza TU_NUMERO_WHATSAPP con el número real
            $whatsapp_response = file_get_contents($url_whatsapp);

            // Verificar si la respuesta de WhatsApp es válida
            if ($whatsapp_response !== false) {
                echo json_encode(['status' => 'success']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'No se pudo enviar el mensaje de WhatsApp.']);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => 'No se pudo enviar el correo electrónico.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Todos los campos son obligatorios.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método no permitido.']);
}
?>
