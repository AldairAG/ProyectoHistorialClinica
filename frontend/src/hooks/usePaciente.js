import { useDispatch, useSelector } from 'react-redux';
import { pacienteActions, pacienteSelectors } from '../store/sliders/pacienteSlice';
import { setLoading } from '../store/sliders/authSlice';
import { antecedenteService, pacienteService } from '../services/pacienteService';
import { NotaMedicaService, RecetaService } from '../services/notaMedicaService';

export const usePaciente = () => {
    const dispatch = useDispatch();
    const pacientesList = useSelector(pacienteSelectors.pacienteList);
    const pacienteSelect = useSelector(pacienteSelectors.pacienteSelect);
    const recetasList = useSelector(pacienteSelectors.recetaList);
    const recetaSelect = useSelector(pacienteSelectors.recetaSelect);
    const notaMedicaList = useSelector(pacienteSelectors.notaMedicaList);
    const notaMedicaSelect = useSelector(pacienteSelectors.notaMedicaSelect);

    /////SLICE//////////
    const editPacientesList = (pacientesList) => {
        dispatch(pacienteActions.setPacientesList(pacientesList));
    }
    const editPaciente = (paciente) => {
        console.log(paciente);
        
        dispatch(pacienteActions.setPaciente(paciente));
    }

    const editNotaMedicaList = (list) => {
        dispatch(pacienteActions.setNotaMedicaList(list));
    }
    const editNotaMedica = (notaMedica) => {
        dispatch(pacienteActions.setNotaMedica(notaMedica));
    }

    const editRecetaList = (list) => {
        dispatch(pacienteActions.setRecetaList(list));
    }
    const editReceta = (receta) => {
        dispatch(pacienteActions.setReceta(receta));
    }
    //////////////////

    const savePaciente = async (paciente) => {
        const result = await pacienteService.crearPacienteService(paciente)
        editPaciente(result?.data)
        return result?.data || null
    }

    const getPacientesByEmailDoctor = async (email) => {
        const result = await pacienteService.fetchAllPacientesByDoctor(email)
        editPacientesList(result?.data || null)
    }

    const getPacienteById = async (id) => {
        changeLoading()
        const result = await pacienteService.fetchPacienteById(id)
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
            const result = await pacienteService.updatePacienteById(pacienteSelect.idPaciente, diferencias);

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

    /////////////////RECETA//////////////////
    const getRecetaById = async (id) => {
        const result = await RecetaService.fetchReceta(id)
        editReceta(result?.data || null)
    }
    const getRecetaByDoctor = async (id) => {
        const result = await RecetaService.fetchRecetasByDoctor(id)
        editRecetaList(result?.data || [])
    }
    const getRecetaByPaciente = async () => {
        const result = await RecetaService.fetchRecetasByPaciente(pacienteSelect.idPaciente)
        console.log(result?.data);
        editRecetaList(result?.data || [])
    }

    /////////////////NOTAS MEDICAS//////////////////
    const getNotaMedicaById = async () => {
        const result = await NotaMedicaService.fetchNotaMedica(id)
        editNotaMedica(result?.data || null)
    }
    const getNotaMedicaByDoctor = async () => {
        const result = await NotaMedicaService.fetchNotaMedicasByDoctor(id)
        editNotaMedicaList(result?.data || [])
    }
    const getNotaMedicaByPaciente = async () => {
        const result = await NotaMedicaService.fetchNotaMedicasByPaciente(pacienteSelect.idPaciente);
        console.log(result?.data);
        
        editNotaMedicaList(result?.data || [])
    }
    const saveNotaMedica = async (request) => {
        const result = await NotaMedicaService.saveNotaMedica(request)
        editNotaMedica(result?.data || null)
    }

    //MANEJO DE ANTECEDENTES

    const updateAntecedentesNP = async (paciente) => {
        const antecedentesActuales = pacienteSelect.antecedentesNoPatologicos || {};
        const diferencias = getDiferencias(antecedentesActuales, paciente);

        if (Object.keys(diferencias).length === 0) {
            console.log("No hay cambios en los datos.");
            return;
        }

        try {
            const result = await antecedenteService.updatePacientAPNP(pacienteSelect.antecedentesNoPatologicos.idAntecedenteNoPatologico,
                { ...antecedentesActuales, ...diferencias }
            );

            if (result?.status === 200) {

                editPaciente({
                    ...pacienteSelect,
                    antecedentesNoPatologicos: { ...antecedentesActuales, ...diferencias }
                });
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
            const result = await antecedenteService.updatePacientAPP(pacienteSelect.antecedentesPatologicos.idAntecedentePatologico,
                { ...antecedentesActuales, ...diferencias }
            );

            if (result?.status === 200) {

                editPaciente({
                    ...pacienteSelect,
                    antecedentesPatologicos: { ...antecedentesActuales, ...diferencias }
                });
            }
        } catch (error) {
            console.error("Error al actualizar el paciente:", error);
        }
    };

    const addAntecedenteFamiliar = async (antecedente) => {
        try {
            const result = await antecedenteService.addAntecedenteHeredadoService(pacienteSelect.idPaciente, antecedente)

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
            const result = await antecedenteService.deleteAntecedenteHeredadoService(pacienteSelect.idPaciente, antecedenteId);

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

    const addHospitalizacion = async (antecedente) => {
        try {
            const result = await antecedenteService.addHospitalizacionService(pacienteSelect.idPaciente, antecedente)

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
            const result = await antecedenteService.deleteHospitalizacionService(pacienteSelect.idPaciente, antecedenteId);

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

    const addEnfermdadCroncia = async (antecedente) => {
        try {
            const result = await antecedenteService.addEnfermedadCronicaService(pacienteSelect.idPaciente, antecedente)

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
            const result = await antecedenteService.deleteEnfermedadCronicaService(pacienteSelect.idPaciente, antecedenteId);

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
        recetasList,
        recetaSelect,
        notaMedicaList,
        notaMedicaSelect,
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
        getNotaMedicaById,
        getNotaMedicaByDoctor,
        getNotaMedicaByPaciente,
        saveNotaMedica,
        getRecetaById,
        getRecetaByDoctor,
        getRecetaByPaciente,
    };
}

