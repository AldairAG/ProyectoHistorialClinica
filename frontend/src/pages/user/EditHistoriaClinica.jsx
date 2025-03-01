import FormANP from "../../components/forms/FormANP"
import FormAP from "../../components/forms/FormAP"
import FormPaciente from "../../components/forms/FormPaciente"
import InputWhite from "../../components/ui/InputWhite"
import Select from "../../components/ui/Select"
import LabelXl from "../../components/ui/LabelXl"
import BotonAzul from "../../components/ui/BotonAzul"
import LabelLg from "../../components/ui/LabelLg"

const EditHistoriaClinica = () => {
    return (
        <section className="flex flex-col gap-6">
            <FormPaciente />

            <div className="rounded-sm bg-gray-50 px-3 py-4 flex flex-col"
                id="accordion-collapse-3" data-accordion="collapse">

                <div className=" w-full" id="accordion-collapse-heading-3">
                    <button type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right 
                        text-gray-500 focus:ring-4 
                        focus:ring-gray-200 focus:text-gray-50"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-3">

                        <LabelXl>Antecedentes heredofamiliares</LabelXl>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </div>

                <div id="accordion-collapse-body-3" className="hidden pt-5"
                    aria-labelledby="accordion-collapse-heading-3">
                    <div className="mb-4">
                        <label
                            className="relative top-3 start-4 bg-gray-50 px-2
                            font-sans font-semibold text-gray-700">
                            Crea un nuevo antecedente
                        </label>
                        <div className="flex justify-around gap-4 border p-4 rounded-md border-gray-300">
                            <Select
                                label={'Familiar'}
                            >
                            </Select>
                            <div className="w-full">
                                <InputWhite
                                    label={'Antecedente'}
                                />
                            </div>
                            <div className="pt-5 flex items-center">
                                <BotonAzul
                                    label={"Guardar"}
                                    type={"submit"} />
                            </div>

                        </div>
                    </div>

                    <div>
                        <LabelLg>Antecedentes heredofamiliares registrados</LabelLg>

                        <div className="">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Num.</th>
                                        <th className="px-2">Familiar</th>
                                        <th>Antecedente</th>
                                        <th>Antecedente</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>#1</td>
                                        <td>Padre</td>
                                        <td className="px-4 text-left">Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientesss
                                        </td>
                                        <td>Eliminar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-sm bg-gray-50 px-3 py-4 flex flex-col"
                id="accordion-collapse-4" data-accordion="collapse">

                <div className=" w-full" id="accordion-collapse-heading-4">
                    <button type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right 
                        text-gray-500 focus:ring-4 
                        focus:ring-gray-200 focus:text-gray-50"
                        data-accordion-target="#accordion-collapse-body-4"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-4">

                        <LabelXl>Hospitalizaciones previas</LabelXl>

                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </div>

                <div id="accordion-collapse-body-4" className="hidden pt-5"
                    aria-labelledby="accordion-collapse-heading-4">

                    <div className="mb-4">
                        <label
                            className="relative top-3 start-4 bg-gray-50 px-2
                            font-sans font-semibold text-gray-700">
                            Crea un nuevo registro
                        </label>
                        <div className="flex justify-around gap-4 border p-4 rounded-md border-gray-300">
                            <Select
                                label={'Familiar'}
                            >
                            </Select>
                            <div className="w-full">
                                <InputWhite
                                    label={'Antecedente'}
                                />
                            </div>
                            <div className="pt-5 flex items-center">
                                <BotonAzul
                                    label={"Guardar"}
                                    type={"submit"} />
                            </div>

                        </div>
                    </div>

                    <div>
                        <LabelLg>Hospitalizaciones previas registradas</LabelLg>

                        <div className="">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Num.</th>
                                        <th className="px-2">Motivo</th>
                                        <th>Diagnostico</th>
                                        <th>Fecha de ingreso</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>#1</td>
                                        <td>Padre</td>
                                        <td className="px-4 text-left">Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientesss
                                        </td>
                                        <td>Eliminar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <div className="rounded-sm bg-gray-50 px-3 py-4 flex flex-col"
                id="accordion-collapse-4" data-accordion="collapse">

                <div className=" w-full" id="accordion-collapse-heading-3">
                    <button type="button"
                        className="flex items-center justify-between w-full font-medium rtl:text-right 
                        text-gray-500 focus:ring-4 
                        focus:ring-gray-200 focus:text-gray-50"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-3">

                        <LabelXl>Enfermedades cronico degenerativas</LabelXl>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </div>

                <div id="accordion-collapse-body-3" className="hidden pt-5"
                    aria-labelledby="accordion-collapse-heading-3">

                    <div className="mb-4">
                        <label
                            className="relative top-3 start-4 bg-gray-50 px-2
                            font-sans font-semibold text-gray-700">
                            Crea un nuevo antecedente
                        </label>
                        <div className="flex justify-around gap-4 border p-4 rounded-md border-gray-300">
                            <Select
                                label={'Familiar'}
                            >
                            </Select>
                            <div className="w-full">
                                <InputWhite
                                    label={'Antecedente'}
                                />
                            </div>
                            <div className="pt-5 flex items-center">
                                <BotonAzul
                                    label={"Guardar"}
                                    type={"submit"} />
                            </div>

                        </div>
                    </div>

                    <div>
                        <LabelLg>Antecedentes heredofamiliares registrados</LabelLg>

                        <div className="">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Num.</th>
                                        <th className="px-2">Familiar</th>
                                        <th>Antecedente</th>
                                        <th>Antecedente</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>#1</td>
                                        <td>Padre</td>
                                        <td className="px-4 text-left">Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientes
                                            Diabetes con indices de bulimia y alto consumo de estupefacientesss
                                        </td>
                                        <td>Eliminar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <FormANP />
            <FormAP />

        </section>
    )
}

export default EditHistoriaClinica