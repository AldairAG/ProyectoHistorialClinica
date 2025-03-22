import axiosInstance from './axiosInstance';
import { handlePromiseWithToast } from '../utils/toastUtils'

const fetchReceta = async (id) => {
    try {
        const response = await axiosInstance.get(`/receta/${id}`)

        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const fetchRecetasByDoctor = async (id) => {
    try {
        const response = await axiosInstance.get(`/receta/doctor/${id}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const fetchRecetasByPaciente = async (id) => {
    try {
        const response = await axiosInstance.get(`/receta/paciente/${id}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}
const fetchNotaMedica = async (id) => {
    try {
        const response = await axiosInstance.get(`/notaMedica/${id}`)

        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const fetchNotaMedicasByDoctor = async (id) => {
    try {
        const response = await axiosInstance.get(`/notaMedica/doctor/${id}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const fetchNotaMedicasByPaciente = async (id) => {
    try {
        const response = await axiosInstance.get(`/notaMedica/paciente/${id}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const saveNotaMedica = async (body) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.post(`/notaMedica/save`, body),
            '¡Nota medica guardada exitosamente!',
            'Error al guardar'
        )
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}


export const NotaMedicaService = {
    fetchNotaMedica,
    fetchNotaMedicasByDoctor,
    fetchNotaMedicasByPaciente,
    saveNotaMedica,
}

export const RecetaService={
    fetchReceta,
    fetchRecetasByDoctor,
    fetchRecetasByPaciente,
}