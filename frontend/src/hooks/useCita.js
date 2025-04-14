import { useDispatch, useSelector } from 'react-redux';
import { citaActions, citaSelectors } from '../store/sliders/citaSlice';
import { setLoading } from '../store/sliders/authSlice';
import { citasService } from '../services/CitasService';
import { usePaciente } from './usePaciente';
import {useUser } from './useUser';

export const useCita = () => {
    const dispatch = useDispatch();
    const citasList = useSelector(citaSelectors.citasList);
    const citaSelect = useSelector(citaSelectors.citaSelect);
    const {pacienteSelect}=usePaciente();
    const {user}=useUser();

    ///// SLICE ACTIONS ///////
    const editCitasList = (list) => {
        dispatch(citaActions.setCitasList(list));
    };

    const editCita = (cita) => {
        dispatch(citaActions.setCita(cita));
    };

    const clearCitasList = () => {
        dispatch(citaActions.clearCitasList());
    };

    const clearCita = () => {
        dispatch(citaActions.clearCita());
    };

    ///////////////////////////

    const saveCita = async (cita, idConsultorio) => {
        try {
            console.log(user);
            
            const result = await citasService.crearCitaService(cita, idConsultorio||1, pacienteSelect.idPaciente, user.id);
            editCita(result?.data || null);
            return result?.data || null;
        } catch (error) {
            console.error("Error al guardar la cita:", error);
        }
    };

    const getCitasByDoctor = async (medicoId) => {
        try {
            const result = await citasService.fetchAllCitasByDoctor(medicoId);
            editCitasList(result?.data || []);
        } catch (error) {
            console.error("Error al obtener citas por médico:", error);
        }
    };

    const getCitasByPaciente = async (pacienteId) => {
        try {
            const result = await citasService.fetchAllCitasByPaciente(pacienteId);
            editCitasList(result?.data || []);
        } catch (error) {
            console.error("Error al obtener citas por paciente:", error);
        }
    };

    const getCitasByDate = async (fecha) => {
        try {
            const result = await citasService.fetchAllCitasByDate(fecha);
            editCitasList(result?.data || []);
        } catch (error) {
            console.error("Error al obtener citas por fecha:", error);
        }
    };

    const getCitaById = async (id) => {
        try {
            const result = await citasService.fetchCitaById(id);
            editCita(result?.data || null);
        } catch (error) {
            console.error("Error al obtener cita por ID:", error);
        }
    };

    const updateCitaEstado = async (id, estado) => {
        try {
            const result = await citasService.updateCitaEstadoById(id, estado);
            if (result?.status === 200) {
                editCita({ ...citaSelect, estado });
            }
        } catch (error) {
            console.error("Error al actualizar el estado de la cita:", error);
        }
    };

    const changeLoading = () => {
        dispatch(setLoading());
    };

    return {
        citasList,
        citaSelect,
        editCitasList,
        editCita,
        clearCitasList,
        clearCita,
        saveCita,
        getCitasByDoctor,
        getCitasByPaciente,
        getCitasByDate,
        getCitaById,
        updateCitaEstado,
        changeLoading,
    };
};