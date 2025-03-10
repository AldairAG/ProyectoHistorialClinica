import { useDispatch, useSelector } from 'react-redux';
import { selectPacienteList, selectPacienteSelect, setPaciente, setPacientesList } from '../store/sliders/pacienteSlice';
import { setLoading } from '../store/sliders/authSlice';
import {
    crearPacienteService, fetchAllPacientesByDoctor, fetchPacienteById, updatePacienteById, updatePacientAPNP,
    updatePacientAPP, addAntecedenteHeredadoService, addEnfermedadCronicaService, addHospitalizacionService,
    deleteAntecedenteHeredadoService, deleteEnfermedadCronicaService, deleteHospitalizacionService
} from '../services/pacienteService';

export const usePaciente = () => {
    const dispatch = useDispatch();
    const pacientesList = useSelector(selectPacienteList);
    const pacienteSelect = useSelector(selectPacienteSelect);

    const editPaciente = (paciente) => {
        console.log(paciente);

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

    const getPacienteById = async (id) => {
        changeLoading()
        const result = await fetchPacienteById(id)
        editPaciente(result?.data || null)
        changeLoading()
    }

    const changeLoading = () => {
        dispatch(setLoading())
    }

    const updatePaciente = async (paciente) => {
        const diferencias = getDiferencias(pacienteSelect, paciente);

        if (Object.keys(diferencias).length === 0) {
            console.log("No hay cambios en los datos.");
            return;
        }

        try {
            const result = await updatePacienteById(pacienteSelect.idPaciente, diferencias);

            if (result && result.status === 200) {
                editPaciente({ ...pacienteSelect, ...diferencias })
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const getDiferencias = (original, actualizado) => {
        const diferencias = {};
        Object.keys(actualizado).forEach((key) => {
            if (!original[key]) {
                diferencias[key] = actualizado[key];
            }
            if (original[key] !== actualizado[key]) {
                diferencias[key] = actualizado[key];
            }
        });
        return diferencias;
    };

    //MANEJO DE ANTECEDENTES

    const updateAntecedentesNP = async (paciente) => {
        const antecedentesActuales = pacienteSelect.antecedentesNoPatologicos || {};
        const diferencias = getDiferencias(antecedentesActuales, paciente);

        if (Object.keys(diferencias).length === 0) {
            console.log("No hay cambios en los datos.");
            return;
        }

        try {
            const result = await updatePacientAPNP(pacienteSelect.antecedentesNoPatologicos.idAntecedenteNoPatologico,
                { ...antecedentesActuales, ...diferencias }
            );

            if (result?.status === 200) {

                editPaciente(((prev) => ({
                    ...prev,
                    antecedentesNoPatologicos: { ...antecedentesActuales, ...diferencias }
                }))(pacienteSelect.antecedentesNoPatologicos));
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const updateAntecedentesP = async (paciente) => {
        const antecedentesActuales = pacienteSelect.antecedentesPatologicos || {};
        const diferencias = getDiferencias(antecedentesActuales, paciente);

        if (Object.keys(diferencias).length === 0) {
            console.log("No hay cambios en los datos.");
            return;
        }

        try {
            const result = await updatePacientAPP(pacienteSelect.antecedentesPatologicos.idAntecedentePatologico,
                { ...antecedentesActuales, ...diferencias }
            );

            if (result?.status === 200) {

                editPaciente(((prev) => ({
                    ...prev,
                    antecedentesPatologicos: { ...antecedentesActuales, ...diferencias }
                }))(pacienteSelect.antecedentesPatologicos));
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const addAntecedenteFamiliar= async (antecedente) => {
        try {
            const result = await addAntecedenteHeredadoService(pacienteSelect.idPaciente, antecedente)
            
            if (result && result.status === 200) {
                editPaciente((prev) => ({
                    ...prev,
                    antecedentesFamiliares: [...(prev.antecedentesFamiliares || []), antecedente]
                }));
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const deleteAntecedenteFamiliar = async (antecedenteId) => {
        try {
            const result = await deleteAntecedenteHeredadoService(pacienteSelect.idPaciente, antecedenteId);
    
            if (result && result.status === 200) {
                editPaciente((prev) => ({
                    ...prev,
                    antecedentesFamiliares: prev.antecedentesFamiliares?.filter(ant => ant.id !== antecedenteId) || []
                }));
            }
        } catch (error) {
            console.error("Error al eliminar el antecedente familiar:", error);
        }
    };

    const addHospitalizacion= async (antecedente) => {
        try {
            const result = await addHospitalizacionService(pacienteSelect.idPaciente, antecedente)
            
            if (result && result.status === 200) {

                editPaciente({
                    ...pacienteSelect,
                    hospitalizacionesPrevias: [...(pacienteSelect.hospitalizacionesPrevias || []), result?.data]
                });
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const deleteHospitalizacion = async (antecedenteId) => {
        try {
            const result = await deleteHospitalizacionService(pacienteSelect.idPaciente, antecedenteId);
    
            if (result && result.status === 200) {
                editPaciente((prev) => ({
                    ...prev,
                    antecedentesFamiliares: prev.antecedentesFamiliares?.filter(ant => ant.id !== antecedenteId) || []
                }));
            }
        } catch (error) {
            console.error("Error al eliminar el antecedente familiar:", error);
        }
    };

    const addEnfermdadCroncia= async (antecedente) => {
        try {
            const result = await addEnfermedadCronicaService(pacienteSelect.idPaciente, antecedente)
            
            if (result && result.status === 200) {
                editPaciente({
                    ...pacienteSelect,
                    enfermedadesCronicas: [...(pacienteSelect.enfermedadesCronicas || []), antecedente]
                });
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const deleteEnfermdadCroncia = async (antecedenteId) => {
        try {
            const result = await deleteEnfermedadCronicaService(pacienteSelect.idPaciente, antecedenteId);
    
            if (result && result.status === 200) {
                editPaciente((prev) => ({
                    ...prev,
                    antecedentesFamiliares: prev.antecedentesFamiliares?.filter(ant => ant.id !== antecedenteId) || []
                }));
            }
        } catch (error) {
            console.error("Error al eliminar el antecedente familiar:", error);
        }
    };


    





    return {
        pacienteSelect,
        pacientesList,
        editPaciente,
        editPacientesList,
        savePaciente,
        getPacientesByEmailDoctor,
        getPacienteById,
        changeLoading,
        updatePaciente,
        updateAntecedentesNP,
        updateAntecedentesP,
        addAntecedenteFamiliar,
        addEnfermdadCroncia,
        addHospitalizacion,
    };
}

