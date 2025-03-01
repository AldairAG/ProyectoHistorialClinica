import axiosInstance from './axiosInstance';
import { handlePromiseWithToast } from '../utils/toastUtils'

export const crearPacienteService = async (newPaciente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.post('/doctor/registrarPaciente', newPaciente),
            '¡Paciente registrado exitosamente!',
            'Error al registrar el paciente'
        );
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

export const fetchAllPacientesByDoctor = async (email) => {
    try {
        const response = await axiosInstance.get(`/doctor/all/${email}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}