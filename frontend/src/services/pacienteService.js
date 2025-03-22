import axiosInstance from './axiosInstance';
import { handlePromiseWithToast } from '../utils/toastUtils'

const crearPacienteService = async (newPaciente) => {
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

const fetchAllPacientesByDoctor = async (email) => {
    try {
        const response = await axiosInstance.get(`/doctor/all/${email}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const fetchPacienteById = async (id) => {
    try {
        const response = await axiosInstance.get(`/doctor/getPacienteById/${id}`)
        return response
    } catch (error) {
        console.error('Error capturado:', error);
        throw error;
    }
}

const updatePacienteById = async (id, paciente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.patch(`/doctor/actualizarPaciente/${id}`, paciente),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}

//METODOS API DE ANTECEDENTES
const updatePacientAPNP = async (id, antecedentes) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.patch(`/doctor/actualizarANP/${id}`, antecedentes),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}
const updatePacientAPP = async (id, antecedentes) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.patch(`/doctor/actualizarAP/${id}`, antecedentes),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}

const addAntecedenteHeredadoService = async (id, antecedente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.post(`/doctor/addAH/${id}`, antecedente),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}
const addHospitalizacionService = async (id, antecedente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.post(`/doctor/addHP/${id}`, antecedente),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}
const addEnfermedadCronicaService = async (id, antecedente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.post(`/doctor/addEC/${id}`, antecedente),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}

const deleteAntecedenteHeredadoService = async (id, idAntecedente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.delete(`/doctor/deleteAH/${id}/${idAntecedente}`),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}
const deleteHospitalizacionService = async (id, idAntecedente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.delete(`/doctor/deleteHP/${id}/${idAntecedente}`),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}
const deleteEnfermedadCronicaService = async (id, idAntecedente) => {
    try {
        const response = await handlePromiseWithToast(
            axiosInstance.delete(`/doctor/deleteEC/${id}/${idAntecedente}`),
            '¡Paciente actualizado exitosamente!',
            'Error al actualizar el paciente'
        )
        return response
    } catch (error) {
        console.log();
        throw error;
    }
}

///////////////////////////////

export const pacienteService = {
    crearPacienteService,
    fetchAllPacientesByDoctor,
    fetchPacienteById,
    updatePacienteById,
}

export const antecedenteService = {
    updatePacientAPNP,
    updatePacientAPP,
    addAntecedenteHeredadoService,
    addHospitalizacionService,
    addEnfermedadCronicaService,
    deleteAntecedenteHeredadoService,
    deleteHospitalizacionService,
    deleteEnfermedadCronicaService,

}