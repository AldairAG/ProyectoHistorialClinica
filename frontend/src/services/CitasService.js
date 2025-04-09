import axiosInstance from './axiosInstance';
import { handlePromiseWithToast } from '../utils/toastUtils'

const crearCitaService = async (newCita, idConsultorio, idPaciente, idDoctor) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.post(`/citas/${idConsultorio}/${idPaciente}/${idDoctor}`, newCita),
            'Cita registrada exitosamente!',
            'Error al registrar el cita'
        );
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const fetchAllCitasByDoctor = async (medicoId) => {
    try {
        const response = await axiosInstance.get(`/citas//medico/${medicoId}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}
const fetchAllCitasByPaciente = async (pacienteId) => {
    try {
        const response = await axiosInstance.get(`/paciente/${pacienteId}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}
const fetchAllCitasByDate = async (fecha) => {
    try {
        const response = await axiosInstance.get(`/fecha/${fecha}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}
const fetchCitaById = async (id) => {
    try {
        const response = await axiosInstance.get(`/citas/${id}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}
const updateCitaEstadoById = async (id, estado) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.patch(`/citas/${id}`, estado),
            '¡Cita actualizada correctamente!',
            'Error al actualizar la cita'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}


export const citasService = {
    crearCitaService,
    fetchAllCitasByDoctor,
    fetchAllCitasByPaciente,
    fetchAllCitasByDate,
    fetchCitaById,
    updateCitaEstadoById,
}