import axiosInstance from './axiosInstance';
import { toast,Bounce } from 'react-toastify';

export const loginService = async (email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password });

        const { usuario, token } = response.data;
        
        return { user: usuario, token };
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Error desconocido';
        console.log(error);

        toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        //throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
};

export const registerService = async (request) => {
    try {
        // Intenta enviar una solicitud POST al endpoint '/auth/registrar' con los datos proporcionados en "request".
        const response = await axiosInstance.post('/auth/registrar', request);

        // Si la solicitud es exitosa, devuelve los datos de la respuesta.
        return response
    } catch (error) {
        // Si ocurre un error, intenta obtener el mensaje de error desde la respuesta del servidor.
        // Si no hay un mensaje específico, usa un mensaje genérico "Error desconocido".
        const errorMessage = error.response?.data?.message || 'Error desconocido';

        // Imprime el error completo en la consola para depuración.
        //console.log(error);

        // Muestra una notificación de error al usuario utilizando la librería "toast".
        toast.error(errorMessage, {
            position: "top-right", // Posición de la notificación en la esquina superior derecha.
            autoClose: 5000, // La notificación se cierra automáticamente después de 5 segundos.
            hideProgressBar: true, // Oculta la barra de progreso de la notificación.
            closeOnClick: false, // No permite cerrar la notificación al hacer clic en ella.
            pauseOnHover: true, // Pausa el temporizador de cierre si el usuario pasa el mouse sobre la notificación.
            draggable: true, // Permite arrastrar la notificación.
            progress: undefined, // No se especifica un progreso personalizado.
            theme: "light", // Usa el tema claro para la notificación.
            transition: Bounce, // Aplica una animación de rebote al mostrar la notificación.
        });

        return errorMessage; // Devuelve el mensaje de error para su manejo posterior.
    }
};