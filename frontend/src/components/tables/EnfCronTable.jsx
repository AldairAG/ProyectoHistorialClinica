import { useFormik } from "formik"
import { usePaciente } from "../../hooks/usePaciente"
import Accordion from "../ui/Acordion"
import BotonAzul from "../ui/BotonAzul"
import InputWhite from "../ui/InputWhite"
import LabelLg from "../ui/LabelLg"
import EnfCronItem from "../items/EnfCronItem"

const formulario = [
    { label: "Enfermedad", key: 'enfermedad' },
    { label: "Fecha de diagnostico", key: 'fechaDiagnostico' },
    { label: "Tratamiendo", key: 'tratamiendo' },
    { label: "Ultima revision", key: 'ultimaRevision' },
]

const EnfCronTable = () => {
    const { pacienteSelect,addEnfermdadCroncia } = usePaciente()


    const formik = useFormik({
        initialValues: {
            enfermedad:'',
            fechaDiagnostico:'',
            tratamiendo:'',
            ultimaRevision:'',
        },
        onSubmit:(values)=>{
            addEnfermdadCroncia(values)
        }
    })

    return (
        <Accordion title={"Enfermedades cronicas detectadas"}>
            <form className="mb-5 flex flex-col gap-4" onSubmit={formik.handleSubmit}>
                <LabelLg >Agregar nueva enfermedad detectada</LabelLg>
                <div className="flex justify-between gap-3 flex-wrap">
                    {formulario.map((item, index) => (
                        <div key={index} className="grow basis-1/3">
                            <InputWhite
                                label={item.label}
                                id={item.key}
                                name={item.key}
                                onChange={formik.handleChange}
                                value={formik.values[item.key]}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <BotonAzul label={'Guardar'} type={'submit'}/>
                </div>
            </form>

            <table className=" w-full">
                <tbody className="border border-gray-300 px-2 rounded-xl">
                    {pacienteSelect?.antecedentesFams?.length > 0 ? (
                        pacienteSelect.antecedentesFams.map((item, index) => (
                            <tr key={index}>
                               <EnfCronItem ant={item.antecedente} fam={item.familiar} />
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center text-gray-500 py-4">
                                No hay registros de enfermedades croncias
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Accordion>
    )
}
export default EnfCronTable