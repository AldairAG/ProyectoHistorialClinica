import axios from 'axios';
import {store} from '../store/Store'; // Importa tu store de Redux

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/mdn', // URL de tu backend
  //baseURL: 'http://vps-4709113-x.dattaweb.com:8080/mdn', // URL de tu backend
});

// Interceptor para agregar el token JWT
axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token; // Obtener el token del estado global
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;