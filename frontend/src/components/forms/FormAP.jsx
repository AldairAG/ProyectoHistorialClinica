import InputWhite from "../../components/ui/InputWhite"
import TextArea from "../../components/ui/TextArea"
import Select from "../../components/ui/Select"
import LabelLg from "../ui/LabelLg"
import BotonAzul from "../ui/BotonAzul"
import Accordion from "../ui/Acordion"
import { useFormik } from "formik"
import { usePaciente } from "../../hooks/usePaciente"
//import Checkbox from "../../components/ui/Checkbox"

const tabaquismo = [
    { label: 'Cigarrillos fumados al dia', pl: '0', key: 'cigarrillosDia' },
    { label: 'Tiempo fumando del paciente en años', pl: '0', key: 'tiempoFumando' },
    { label: 'Indice tabaquico', pl: '0', key: 'indiceTabaquico' },
]

const alcoholismo = [
    { label: 'Numero de copas semanales', pl: '0', key: 'copasSemanales' },
    { label: 'Tiempo tomando en años', pl: '0', key: 'tiempoTomando' },
]

const textAreas = [
    { label: 'Escribe otras adicciones del paciente aqui...', pl: '', key: 'otrasToxinas' },
    { label: 'Escribe las alergias que presenta el paciente...', pl: '', key: 'alergias' },
    { label: 'Escribe los traumaticos del paciente...', pl: '', key: 'traumaticos' },
    { label: 'Escribe las cirugias aqui...', pl: '', key: 'cirugias' },
    { label: 'Escribe las transfusiones...', pl: '', key: 'transfusiones' },
    { label: 'Escribe las exposiciones a biomasa...', pl: '', key: 'exposicionBiomasa' },
]

const FormAP = () => {
    const { pacienteSelect, updateAntecedentesP } = usePaciente()

    const formik = useFormik({
        initialValues: {
            enfermadesInfancia: pacienteSelect?.antecedentesPatologicos?.enfermadesInfancia || '',
            tabaquismo: pacienteSelect?.antecedentesPatologicos?.tabaquismo || 'NO',
            cigarrillosDia: pacienteSelect?.antecedentesPatologicos?.cigarrillosDia || '',
            tiempoFumando: pacienteSelect?.antecedentesPatologicos?.tiempoFumando || '',
            indiceTabaquico: pacienteSelect?.antecedentesPatologicos?.indiceTabaquico || '',
            alcoholismo: pacienteSelect?.antecedentesPatologicos?.alcoholismo || 'NO',
            copasSemanales: pacienteSelect?.antecedentesPatologicos?.copasSemanales || '',
            tiempoTomando: pacienteSelect?.antecedentesPatologicos?.tiempoTomando || '',
            otrasToxinas: pacienteSelect?.antecedentesPatologicos?.otrasToxinas || '',
            alergias: pacienteSelect?.antecedentesPatologicos?.alergias || '',
            traumaticos: pacienteSelect?.antecedentesPatologicos?.traumaticos || '',
            cirugias: pacienteSelect?.antecedentesPatologicos?.cirugias || '',
            transfusiones: pacienteSelect?.antecedentesPatologicos?.transfusiones || '',
            exposicionBiomasa: pacienteSelect?.antecedentesPatologicos?.exposicionBiomasa || '',
        },
        onSubmit: (values) => {
            console.log(values);
            updateAntecedentesP(values)
        }
    })

    return (
        <Accordion title="Antecedentes personales patologicos">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <TextArea
                        label={'Enfermedades en la infancia'}
                        placeHolder={'Escribe las enfermedades aqui...'}
                        id={'enfermadesInfancia'}
                        name={'enfermadesInfancia'}
                        onChange={formik.handleChange}
                        value={formik.values.enfermadesInfancia}
                    />
                </div>

                <div className="mb-5 border-b-1 border-b-gray-300
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20">
                    <LabelLg >Adiccioens</LabelLg>
                </div>

                <div className="flex flex-col gap-4 mb-4">
                    <Select
                        label={'Tabaquismo'}
                        id={'tabaquismo'}
                        name={'tabaquismo'}
                        onChange={formik.handleChange}
                        value={formik.values.tabaquismo}
                    >
                        <option value="SI">SI</option>
                        <option value="NO">NO</option>
                        <option value="OCACIONAL">OCACIONAL</option>
                    </Select>

                    {formik.values.tabaquismo != 'NO' && (
                        <div className="flex flex-wrap gap-4 mb-4">
                            {tabaquismo.map((item, index) => (
                                <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                    <InputWhite
                                        type={'number'}
                                        label={item.label}
                                        id={item.key}
                                        name={item.key}
                                        obligatorio={item.obligatorio}
                                        placeholder={item.placeholder}
                                        required={item.obligatorio}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values[item.key]}
                                    />

                                </div>
                            ))}
                        </div>
                    )}

                    <Select
                        label={'Alcoholismo'}
                        id={'alcoholismo'}
                        name={'alcoholismo'}
                        onChange={formik.handleChange}
                        value={formik.values.alcoholismo}
                    >
                        <option value="SI">SI</option>
                        <option value="NO">NO</option>
                        <option value="OCACIONAL">OCACIONAL</option>
                    </Select>

                    {formik.values.alcoholismo != 'NO' && (
                        <div className="flex flex-wrap gap-4 mb-4">
                            {alcoholismo.map((item, index) => (
                                <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                    <InputWhite
                                        type={'number'}
                                        label={item.label}
                                        id={item.key}
                                        name={item.key}
                                        obligatorio={item.obligatorio}
                                        placeholder={item.placeholder}
                                        required={item.obligatorio}
                                        onChange={formik.handleChange}
                                        value={formik.values[item.key]}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mb-5 border-b-1 border-b-gray-300
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20">
                    <LabelLg >Antecedentes</LabelLg>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                    {textAreas.map((item, index) => (
                        <div key={index} className="sm:basis-1/2 md:basis-1/3 grow">
                            <TextArea
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

                <div className="h-10 w-full flex justify-end">
                    <BotonAzul
                        label={"Guardar"}
                        type={"submit"} />
                </div>
            </form>
        </Accordion>

    )
}


export default FormAP