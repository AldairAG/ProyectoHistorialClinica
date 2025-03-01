import InputWhite from "../../components/ui/InputWhite"
import Select from "../../components/ui/Select"
import LabelLg from "../ui/LabelLg"
import LabelXl from "../ui/LabelXl"
import BotonAzul from "../ui/BotonAzul"
//import Checkbox from "../../components/ui/Checkbox"

const inputs = [
    { label: 'Tipo de vivienda', pl: '', key: 'vivienda' },
    { label: 'Material de la pared', pl: '', key: 'materialPared' },
    { label: 'Material del piso', pl: '', key: 'materialPiso' },
    { label: 'Material del techo', pl: '', key: 'materialTecho' },
    { label: 'Numero de habitaciones', pl: '', key: 'habitaciones' },
    { label: 'Material de habitantes', pl: '', key: 'habitantes' },
]

const servicios = [
    { label: 'Agua potable', key: 'aguaPotable', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
    { label: 'electricidad', key: 'electricidad', opciones: [{ value: true, label: 'si tiene' }, { value: false, label: 'no tiene' }] },
    { label: 'Sistema de drenaje', key: 'drenaje', opciones: [{ value: true, label: 'si tiene' }, { value: true, label: 'no tiene' }] },
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
    return (
        <form action="" className="rounded-sm bg-gray-50 px-3 py-4"
            id="accordion-collapse" data-accordion="collapse">

            <div className=" w-full" id="accordion-collapse-heading-1">
                <button type="button"
                    className="flex items-center justify-between w-full font-medium rtl:text-right 
                        text-gray-500 focus:ring-4 focus:ring-gray-200"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1">

                    <LabelXl>Antecedentes personales no patologicos</LabelXl>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" d="M9 5 5 1 1 5" />
                    </svg>

                </button>
            </div>

            <div id="accordion-collapse-body-1" className="hidden pt-5" aria-labelledby="accordion-collapse-heading-1">

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
                                    placeholder={item.placeholder}
                                    required={item.obligatorio}
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
                                    label={item.label}
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
                        >
                            <option value={'SANA'}>{'SANA'}</option>
                            <option value={'REGULAR'}>{'REGULAR'}</option>
                            <option value={'MALA'}>{'MALA'}</option>
                        </Select>
                        <Select
                            label={'¿Como es la higiene bucal del paciente?'}
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
                                    placeholder={item.placeholder}
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

export default FormANP