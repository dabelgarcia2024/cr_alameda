import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/backend/', // URL base para tus solicitudes
  timeout: 5000, // Tiempo de espera en milisegundos
});

// Puedes agregar configuraciones adicionales aquí, como interceptores, headers, etc.

export default instance;
