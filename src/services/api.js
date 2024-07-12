import React from 'react';
import axios from '../services/axiosConfig'; // Ruta al archivo axiosConfig.js

const MyComponent = () => {
  const handleEmailSend = async () => {
    try {
      const response = await axios.post('sendEmail.php', {
        to: 'fullstackmendoza@gmail.com',
        subject:'Bienvenido',
        message: 'Gracias por comunicarse con nosotros',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWhatsAppSend = async () => {
    try {
      const response = await axios.post('send_whatsapp.php', {
        to: '+5492617457570',
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
