import FormANP from "../../components/forms/FormANP"
import FormAP from "../../components/forms/FormAP"
import FormPaciente from "../../components/forms/FormPaciente"
import AntFamTabla from "../../components/tables/AntFamTabla"
import EnfCronTable from "../../components/tables/EnfCronTable"
import HospPrevTabla from "../../components/tables/HospPrevTabla"

const EditHistoriaClinica = () => {
    return (
        <section className="flex flex-col gap-6">
            <FormPaciente />
            <FormANP />
            <FormAP />
            <AntFamTabla/>
            <HospPrevTabla/>
            <EnfCronTable/>
        </section>
    )
}

export default EditHistoriaClinica