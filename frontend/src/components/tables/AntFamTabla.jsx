import Accordion from "../ui/Acordion"
import InputWhite from "../ui/InputWhite"
import BotonAzul from "../ui/BotonAzul"
import LabelLg from "../ui/LabelLg"
import AntFamItem from "../items/AntFamItem"
import { usePaciente } from "../../hooks/usePaciente"
import { useFormik } from "formik"
import * as Yup from "yup";


const AntFamTabla = () => {
    const { pacienteSelect, addAntecedenteFamiliar } = usePaciente()

    const formik = useFormik({
        initialValues: {
            familiar: '',
            antecedente: ''
        },
        validationSchema: Yup.object({
            familiar: Yup.string()
                .required("El familiar es requerido"),
            antecedente: Yup.string()
                .required("El antecedente es obligatorio")
        }),
        onSubmit: (values) => {
            addAntecedenteFamiliar(values)
            formik.resetForm()
        }


    })

    return (
        <Accordion title="Antecedentes heredofamiliares">
            <form className="flex flex-col gap-4 mb-5" onSubmit={formik.handleSubmit}>
                <LabelLg >Agregar Nuevo antecedente</LabelLg>
                <div className="flex justify-between gap-3">
                    <div className="grow basis-1/2">
                        <InputWhite label={'Familiar'}
                            placeholder={'Ej: Madre'}
                            id={'familiar'}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.familiar}
                            required
                        />
                    </div>
                    <div className="grow basis-1/2">
                        <InputWhite label={'Antecedente'}
                            placeholder={'Ej: Diabetes'}
                            id={'antecedente'}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.antecedente}
                            required
                        />
                    </div>
                    <div className="mt-auto">
                        <BotonAzul label={'Guardar'} type={"submit"} />
                    </div>
                </div>
            </form>

            <table className=" w-full">
                <tbody className="border border-gray-300 px-2 rounded-xl">
                    {pacienteSelect?.antecedentesFams?.length > 0 ? (
                        pacienteSelect.antecedentesFams.map((item, index) => (
                            <tr key={index}>
                                <AntFamItem ant={item.antecedente} fam={item.familiar} />
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center text-gray-500 py-4">
                                No hay registros de antecedentes familiares
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </Accordion >
    )


}

export default AntFamTabla