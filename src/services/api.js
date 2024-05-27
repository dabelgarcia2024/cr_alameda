import React from 'react';
import axios from '../services/axiosConfig'; // Ruta al archivo axiosConfig.js

const MyComponent = () => {
  const handleEmailSend = async () => {
    try {
      const response = await axios.post('send_email.php', {
        to: 'correo@example.com',
        subject: 'Asunto del correo',
        message: 'Mensaje del correo',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWhatsAppSend = async () => {
    try {
      const response = await axios.post('send_whatsapp.php', {
        to: 'número_de_teléfono',
        message: 'Mensaje de WhatsApp',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleEmailSend}>Enviar Email</button>
      <button onClick={handleWhatsAppSend}>Enviar WhatsApp</button>
    </div>
  );
};

export default MyComponent;
