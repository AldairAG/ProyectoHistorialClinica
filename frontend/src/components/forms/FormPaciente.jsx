import { usePaciente } from "../../hooks/usePaciente"
import BotonAzul from "../ui/BotonAzul"
import InputWhite from "../ui/InputWhite"
import Select from "../ui/Select"
import { useFormik } from "formik"

const campos = [
    { key: "nombre", label: "Nombre completo", placeholder: "Ej: Juan", obligatorio: true, tipo: "text" },
    { key: "apellidoPaterno", label: "Apellido paterno", placeholder: "Ej: Aguilar", obligatorio: true, tipo: "text" },
    { key: "apellidoMaterno", label: "Apellido materno", placeholder: "Ej: Rojas", obligatorio: true, tipo: "text" },
    { key: "edad", label: "Edad", placeholder: "Ej: 18", obligatorio: true, tipo: "number" },
    { key: "lugarNacimiento", label: "Lugar de nacimiento", placeholder: "Ej:Cordova,Ver", obligatorio: false, tipo: "text" },
    { key: "domicilio", label: "Domicilio", placeholder: "Municipio,Colonia,calle,No. casa", obligatorio: false, tipo: "text" },
    { key: "telefono", label: "Telefono", placeholder: "Ej: 222 485 9118", obligatorio: false, tipo: "number" },
    { key: "ocupacion", label: "Ocupacion", placeholder: "Ej: Obrero", obligatorio: false, tipo: "text" },
    { key: "religion", label: "Religion", placeholder: "Ej: Catolico", obligatorio: false, tipo: "text" },
    { key: "escolaridad", label: "Escolaridad", placeholder: "Ej: Secundaria", obligatorio: false, tipo: "text" },
]

const FormPaciente = () => {

    const { pacienteSelect,updatePaciente } = usePaciente()

    const formik = useFormik({
        initialValues: {
            nombre: pacienteSelect?.nombre || '',
            sexo: pacienteSelect?.sexo || '',
            edad: pacienteSelect?.edad || '',
            apellidoMaterno: pacienteSelect?.apellidoMaterno || '',
            apellidoPaterno: pacienteSelect?.apellidoPaterno || '',
            fechaNacimiento: pacienteSelect?.fechaNacimiento || '',
            lugarNacimiento: pacienteSelect?.lugarNacimiento || '',
            estadoCivil: pacienteSelect?.estadoCivil || '',
            domicilio: pacienteSelect?.domicilio || '',
            telefono: pacienteSelect?.telefono || '',
            ocupacion: pacienteSelect?.ocupacion || '',
            religion: pacienteSelect?.religion || '',
            escolaridad: pacienteSelect?.escolaridad || '',
            grupoSanguineo: pacienteSelect?.grupoSanguineo || ''
        },
        onSubmit: (values) => {
            // Aquí puedes manejar el envío del formulario (por ejemplo, enviar a una API)
            updatePaciente(values)
            console.log("Valores:", values);
        },
    })

    return (
        <section className="border border-gray-300 rounded-lg bg-gray-50 px-3 py-4 flex flex-col">
            <label className="text-gray-600 text-lg font-bold mb-8">Agregar Datos generales del paciente</label>

            <form className="flex gap-4 flex-wrap mb-4" onSubmit={formik.handleSubmit}>
                {campos.map((item, index) => (
                    <div key={index} className="sm:basis-1/3 lg:basis-1/5 md:basis-1/4 grow">
                        <InputWhite
                            type={item.tipo}
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
                <div className="sm:basis-1/3 lg:basis-1/5 md:basis-1/4 grow">
                    <Select
                        label={"Grupo sanguineo"}
                        name="grupoSanguineo" // Coincide con initialValues
                        obligatorio={true}
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.grupoSanguineo}
                    >
                        <option value={"A+"}>A+</option>
                        <option value={"A-"}>A-</option>
                        <option value={"B+"}>B+</option>
                        <option value={"B-"}>B-</option>
                        <option value={"AB+"}>AB+</option>
                        <option value={"AB-"}>AB-</option>
                        <option value={"O+"}>O+</option>
                        <option value={"O-"}>O-</option>
                    </Select>
                </div>
                <div className="sm:basis-1/3 lg:basis-1/5 md:basis-1/4 grow">
                    <Select
                        label={"Genero"}
                        name="sexo" // Coincide con initialValues
                        obligatorio={true}
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sexo}
                    >
                        <option value={"Femenino"}>Femenino</option>
                        <option value={"Masculino"}>Masculino</option>
                    </Select>
                </div>
                <div className="sm:basis-1/3 lg:basis-1/5 md:basis-1/4 grow">
                    <Select
                        label={"Estado civil"}
                        name="estadoCivil" // Coincide con initialValues
                        obligatorio={true}
                        required
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.estadoCivil}
                    >

                        <option value={'soltero'}>soltero</option>
                        <option value={'casado'}>casado</option>
                        <option value={'divorciado'}>divorciado</option>
                        <option value={'viudo'}>viudo</option>
                        <option value={'separado'}>separado</option>
                    </Select>
                </div>
{/*                 <div className="sm:basis-1/3 lg:basis-1/5 md:basis-1/4 grow">
                    <DateInput
                        label={'Fecha de nacimiento'}
                    />
                </div > */}
                <div className="h-10 w-full flex justify-end gap-2 ">
                    <BotonAzul
                        label={"Guardar paciente"}
                        type={"submit"} />
                </div>
            </form>
        </section>
    )
}

export default FormPaciente