import InputWhite from "../../components/ui/InputWhite"
import TextArea from "../../components/ui/TextArea"
import Select from "../../components/ui/Select"
import LabelLg from "../ui/LabelLg"
import LabelXl from "../ui/LabelXl"
import BotonAzul from "../ui/BotonAzul"
//import Checkbox from "../../components/ui/Checkbox"

const tabaquismo = [
    { label: 'Cigarrillos fumados al dia', pl: '', key: 'cigarrillosDia' },
    { label: 'Tiempo fumando del paciente', pl: '', key: 'tiempoFumando' },
    { label: 'Indice tabaquico', pl: '', key: 'indiceTabaquico' },
]

const alcoholismo = [
    { label: 'Numero de copas semanales', pl: '', key: 'copasSemanales' },
    { label: 'Tiempo tomando', pl: '', key: 'tiempoTomando' },
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
    return (
        <form action="" className="rounded-sm bg-gray-50 px-3 py-4"
            id="accordion-collapse-2" data-accordion="collapse">

            <div className=" w-full" id="accordion-collapse-heading-2">
                <button type="button"
                    className="flex items-center justify-between w-full font-medium rtl:text-right 
                        text-gray-500 focus:ring-4 
                        focus:ring-gray-200 focus:text-gray-50"
                    data-accordion-target="#accordion-collapse-body-2"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-2">

                    <LabelXl>Antecedentes personales patologicos</LabelXl>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </div>

            <div id="accordion-collapse-body-2" className="hidden pt-5" aria-labelledby="accordion-collapse-heading-2">

                <div className="mb-4">
                    <TextArea
                        label={'Enfermedades en la infancia'}
                        placeHolder={'Escribe las enfermedades aqui...'}
                    />
                </div>

                <div className="mb-4">
                    <div className="mb-5 border-b-1 border-b-gray-300
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-50 after:opacity-20">
                        <LabelLg >Adiccioens</LabelLg>
                    </div>

                    <div className="flex flex-col gap-4 mb-4">
                        <Select
                            label={'Tabaquismo'}
                        >
                            <option value="SI">SI</option>
                            <option value="NO">NO</option>
                            <option value="OCACIONAL">OCACIONAL</option>
                        </Select>


                        <div className="flex flex-wrap gap-4 mb-4">
                            {tabaquismo.map((item, index) => (
                                <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                    <InputWhite
                                        type={item.tipo}
                                        label={item.label}
                                        id={item.key}
                                        name={item.key}
                                        obligatorio={item.obligatorio}
                                        placeholder={item.placeholder}
                                        required={item.obligatorio}
                                    />

                                </div>
                            ))}
                        </div>

                        <Select
                            label={'Alcoholismo'}
                        >
                            <option value="SI">SI</option>
                            <option value="NO">NO</option>
                            <option value="OCACIONAL">OCACIONAL</option>
                        </Select>


                        <div className="flex flex-wrap gap-4 mb-4">
                            {alcoholismo.map((item, index) => (
                                <div key={index} className="sm:basis-1/2 lg:basis-1/4 md:basis-1/3 grow">
                                    <InputWhite
                                        type={item.tipo}
                                        label={item.label}
                                        id={item.key}
                                        name={item.key}
                                        obligatorio={item.obligatorio}
                                        placeholder={item.placeholder}
                                        required={item.obligatorio}
                                    />
                                </div>
                            ))}
                        </div>

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
            </div>



        </form>
    )
}

export default FormAP