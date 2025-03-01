import { toast } from 'react-toastify';

export const handlePromiseWithToast = async (
    promise,
    successMessage = '¡Operación exitosa!',
    errorMessage = 'Ocurrió un error. Inténtalo de nuevo.'
) => {
    // Mostrar un toast de carga
    const loadingToastId = toast.loading('Procesando...', {
        position: 'top-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
    });

    try {
        // Esperar a que la promesa se resuelva
        const result = await promise;

        // Actualizar el toast de carga a éxito
        toast.update(loadingToastId, {
            render: successMessage,
            type: toast.done,
            isLoading: false,
            autoClose: 3000,
        });

        return result; // Devolver el resultado de la promesa
    } catch (error) {
        // Extraer el mensaje de error del backend o usar uno predeterminado
        const finalErrorMessage = error.response?.data?.message || errorMessage;

        // Mostrar un toast de error
        toast.update(loadingToastId, {
            render: finalErrorMessage,
            type: toast.error,
            isLoading: false,
            autoClose: 5000,
        });

        throw error; // Relanzar el error para manejarlo fuera si es necesario
    }
};