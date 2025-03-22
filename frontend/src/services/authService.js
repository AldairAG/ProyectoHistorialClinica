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