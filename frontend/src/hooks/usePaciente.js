import { useDispatch, useSelector } from 'react-redux';
import { selectPacienteList, selectPacienteSelect, setPaciente, setPacientesList } from '../store/sliders/pacienteSlice';
import { crearPacienteService, fetchAllPacientesByDoctor } from '../services/pacienteService';

export const usePaciente = () => {
    const dispatch = useDispatch();
    const pacientesList = useSelector(selectPacienteList);
    const pacienteSelect = useSelector(selectPacienteSelect);

    const editPaciente = (paciente) => {
        dispatch(setPaciente(paciente));
    }

    const editPacientesList = (pacientesList) => {
        dispatch(setPacientesList(pacientesList));
    }

    const savePaciente = async (paciente) => {
        const result = await crearPacienteService(paciente)
        editPaciente(result?.data)
        return result?.data || null
    }

    const getPacientesByEmailDoctor = async (email) => {
        const result = await fetchAllPacientesByDoctor(email)
        editPacientesList(result?.data || null)
    }

    return {
        pacienteSelect,
        pacientesList,
        editPaciente,
        editPacientesList,
        savePaciente,
        getPacientesByEmailDoctor,
    };
}

