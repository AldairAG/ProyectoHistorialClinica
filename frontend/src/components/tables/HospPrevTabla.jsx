import { useFormik } from "formik"
import { usePaciente } from "../../hooks/usePaciente"
import Accordion from "../ui/Acordion"
import BotonAzul from "../ui/BotonAzul"
import InputWhite from "../ui/InputWhite"
import LabelLg from "../ui/LabelLg"
import HosPrevItem from "../items/HosPrevItem"

const formulario = [
    { label: "Motivo de hospitalizacion", key: 'motivo' },
    { label: "Fecha de ingreso", key: 'fechaIngreso' },
    { label: "Institucion", key: 'institucion' },
    { label: "Duracion", key: 'duracion' },
    { label: "Diagnostico", key: 'diagnostico' },
    { label: "Tratamiento", key: 'tratamiento' },
]

const HospPrevTabla = () => {
    const { pacienteSelect, addHospitalizacion } = usePaciente()

    const formik = useFormik({
        initialValues: {
            motivo: '',
            fechaIngreso: '',
            institucion: '',
            duracion: '',
            diagnostico: '',
            tratamiento: '',
        },
        onSubmit: (values) => {
            addHospitalizacion(values)
        }
    })

    return (
        <Accordion title={"Hospitalizaciones previas"}>
            <form className="mb-5 flex flex-col gap-4" onSubmit={formik.handleSubmit}>
                <LabelLg >Agregar Nuevo registro</LabelLg>
                <div className="flex justify-between gap-3 flex-wrap">
                    {formulario.map((item, index) => (
                        <div key={index} className="grow basis-1/3">
                            <InputWhite
                                label={item.label}
                                id={item.key}
                                name={item.key}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values[item.key]}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <BotonAzul label={'Guardar'} type={'submit'} />
                </div>
            </form>

            <table className=" w-full">
                <tbody className="border border-gray-300 px-2 rounded-xl">
                    {pacienteSelect?.hospitalizacionesPrevias?.length > 0 ? (
                        pacienteSelect.hospitalizacionesPrevias.map((item, index) => (
                            <tr key={index}>
                                <HosPrevItem ant={item.antecedente} fam={item.familiar} />
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center text-gray-500 py-4">
                                No hay registros de hospitalizaciones previas
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Accordion>
    )
}
export default HospPrevTabla