/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useUser } from "../../hooks/useUser"
import PacientesTable from "../../components/tables/PacientesTable"


// Asumiendo que ActionsDropdown está definido correctamente en otro archivo
// Si este componente da error, estaremos usando un componente simple en su lugar


const PacientesList = () => {


    const { navigateTo, user } = useUser();
    return (
        <PacientesTable className="flex flex-col md:flex-row" variant="default" />
    );


}

export default PacientesList