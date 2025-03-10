import InputWhite from "../../components/ui/InputWhite"
import Select from "../../components/ui/Select"
import LabelLg from "../ui/LabelLg"
import BotonAzul from "../ui/BotonAzul"
import Acordion from "../ui/Acordion"
import { useFormik } from "formik"
import { usePaciente } from "../../hooks/usePaciente"
//import Checkbox from "../../components/ui/Checkbox"

const inputs = [
    { label: 'Tipo de vivienda', pl: '', key: 'vivienda' },
    { label: 'Material de la pared', pl: '', key: 'materialPared' },
    { label: 'Material del piso', pl: '', key: 'materialPiso' },
    { label: 'Material del techo', pl: '', key: 'materialTecho' },
    { label: 'Numero de habitaciones', pl: '0', key: 'habitaciones' },
    { label: 'Material de habitantes', pl: '0', key: 'habitantes' },
]

const servicios = [
    { label: 'Agua potable', key: 'aguaPotable', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
    { label: 'electricidad', key: 'electricidad', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
    { label: 'Sistema de drenaje', key: 'drenaje', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
    { label: 'Gas', key: 'gas', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
    { label: 'Sanitario', key: 'sanitario', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
]

const dieta = [
    { label: 'Numero de comidas al dia', pl: 0, key: 'comidasDiarias' },
    { label: 'Numero de evacuaciones diarias', pl: 0, key: 'evacuacionesDiarias' },
    { label: 'Numero de ingesta por semana de carne blanca', pl: 0, key: 'ingestaCarneBlanca' },
    { label: 'Numero de ingesta por semana de carne roja', pl: 0, key: 'ingestaCarneRoja' },
    { label: 'Numero de ingesta por semana de carne de puerco', pl: 0, key: 'ingestaCarnePuerco' },
    { label: 'Numero de ingesta por semana de carne de pescado', pl: 0, key: 'ingestaPescado' },
    { label: 'Numero de ingesta por semana de mariscos', pl: 0, key: 'ingestaMariscos' },
    { label: 'Numero de ingesta por semana de dulces', pl: 0, key: 'ingestaDulces' },
    { label: 'Numero de ingesta por semana de cereales', pl: 0, key: 'ingestaCereales' },
    { label: 'Numero de ingesta por semana de verduras', pl: 0, key: 'ingestaVerduras' },
    { label: 'Numero de ingesta por semana de frutas', pl: 0, key: 'ingestaFrutas' },
    { label: 'Numero de ingesta por semana de leguminosas', pl: 0, key: 'ingestaLeguminosas' },
]

const FormANP = () => {
    const {updateAntecedentesNP,pacienteSelect}=usePaciente()

    const formik = useFormik({
        initialValues: {
            vivienda: pacienteSelect?.antecedentesNoPatologicos?.vivienda || "",
            materialPared: pacienteSelect?.antecedentesNoPatologicos?.materialPared || "",
            materialPiso: pacienteSelect?.antecedentesNoPatologicos?.materialPiso || "",
            materialTecho: pacienteSelect?.antecedentesNoPatologicos?.materialTecho || "",
            habitaciones: pacienteSelect?.antecedentesNoPatologicos?.habitaciones || "",
            habitantes: pacienteSelect?.antecedentesNoPatologicos?.habitantes || "",
            zoonosis: pacienteSelect?.antecedentesNoPatologicos?.zoonosis || true,
            aguaPotable: pacienteSelect?.antecedentesNoPatologicos?.aguaPotable || true,
            electricidad: pacienteSelect?.antecedentesNoPatologicos?.electricidad || true,
            drenaje: pacienteSelect?.antecedentesNoPatologicos?.drenaje || true,
            gas: pacienteSelect?.antecedentesNoPatologicos?.gas || true,
            sanitario: pacienteSelect?.antecedentesNoPatologicos?.sanitario || true,
            dieta: pacienteSelect?.antecedentesNoPatologicos?.dieta || "SANA",
            comidasDiarias: pacienteSelect?.antecedentesNoPatologicos?.comidasDiarias || "",
            higieneBucal: pacienteSelect?.antecedentesNoPatologicos?.higieneBucal || "SANA",
            evacuacionesDiarias: pacienteSelect?.antecedentesNoPatologicos?.evacuacionesDiarias || "",
            ingestaCarneBlanca: pacienteSelect?.antecedentesNoPatologicos?.ingestaCarneBlanca || "",
            ingestaCarneRoja: pacienteSelect?.antecedentesNoPatologicos?.ingestaCarneRoja || "",
            ingestaCarnePuerco: pacienteSelect?.antecedentesNoPatologicos?.ingestaCarnePuerco || "",
            ingestaPescado: pacienteSelect?.antecedentesNoPatologicos?.ingestaPescado || "",
            ingestaMariscos: pacienteSelect?.antecedentesNoPatologicos?.ingestaMariscos || "",
            ingestaDulces: pacienteSelect?.antecedentesNoPatologicos?.ingestaDulces || "",
            ingestaCereales: pacienteSelect?.antecedentesNoPatologicos?.ingestaCereales || "",
            ingestaVerduras: pacienteSelect?.antecedentesNoPatologicos?.ingestaVerduras || "",
            ingestaFrutas: pacienteSelect?.antecedentesNoPatologicos?.ingestaFrutas || "",
            ingestaLeguminosas: pacienteSelect?.antecedentesNoPatologicos?.ingestaLeguminosas || "",
        },
        onSubmit: (values) => {
            // Aquí puedes manejar el envío del formulario (por ejemplo, enviar a una API)
            updateAntecedentesNP(values)
            console.log("Valores:", values);
        },
    })


    return (
        <Acordion title="Antecedentes personales no patologicos">
            <form onSubmit={formik.handleSubmit}>

                <div className="mb-4">
                    <div className="mb-5 border-b-1 border-b-gray-300
                            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20">
                        <LabelLg >Vivienda</LabelLg>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {inputs.map((item, index) => (
                            <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                <InputWhite
                                    type={item.tipo}
                                    label={item.label}
                                    id={item.key}
                                    name={item.key}
                                    obligatorio={item.obligatorio}
                                    placeholder={item.pl}
                                    required={item.obligatorio}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values[item.key]}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="mb-5 border-b-1 border-b-gray-300
                            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20">
                        <LabelLg >Servicios</LabelLg>
                    </div>

                    <div className="flex flex-wrap gap-4">

                        {servicios.map((item, index) => (
                            <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                <Select
                                    id={item.key}
                                    label={item.label}
                                    onChange={formik.handleChange}
                                    value={formik.values[item.key]}
                                >
                                    {item.opciones.map((opcion, index) => (
                                        <option key={index} value={opcion.value}>{opcion.label}</option>
                                    ))}
                                </Select>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mb-4">
                    <div className="mb-5 border-b-1 border-b-gray-300
                            after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20">
                        <LabelLg >Dieta</LabelLg>
                    </div>

                    <div className="flex flex-wrap gap-4">

                        <Select
                            label={'¿Como es la dieta del paciente?'}
                            id={'dieta'}
                            onChange={formik.handleChange}
                            value={formik.values.dieta}
                        >
                            <option value={'SANA'}>{'SANA'}</option>
                            <option value={'REGULAR'}>{'REGULAR'}</option>
                            <option value={'MALA'}>{'MALA'}</option>
                        </Select>
                        <Select
                            label={'¿Como es la higiene bucal del paciente?'}
                            id={'higieneBucal'}
                            onChange={formik.handleChange}
                            value={formik.values.higieneBucal}
                        >
                            <option value={'SANA'}>{'SANA'}</option>
                            <option value={'REGULAR'}>{'REGULAR'}</option>
                            <option value={'MALA'}>{'MALA'}</option>
                        </Select>

                        {dieta.map((item, index) => (
                            <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                <InputWhite
                                    type={'number'}
                                    label={item.label}
                                    id={item.key}
                                    name={item.key}
                                    obligatorio={item.obligatorio}
                                    placeholder={item.pl}
                                    required={item.obligatorio}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values[item.key]}
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <div className="h-10 w-full flex justify-end">
                    <BotonAzul
                        label={"Guardar"}
                        type={"submit"} />
                </div>

            </form>
        </Acordion>
    )
}

export default FormANP