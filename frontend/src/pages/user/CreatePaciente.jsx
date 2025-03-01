import BotonAzul from "../../components/ui/BotonAzul"
import BotonBlanco from "../../components/ui/BotonBlanco"
import InputWhite from "../../components/ui/InputWhite"
import DateInput from "../../components/ui/DateInput"
import Select from "../../components/ui/Select"
import * as Yup from "yup";
import { useFormik } from "formik"
import { usePaciente } from "../../hooks/usePaciente"
import { useUser } from "../../hooks/useUser"
import Swal from 'sweetalert2';
import { USER_ROUTES } from "../../constants/ROUTES"

const campos = [
    { key: "nombre", label: "Nombre completo", placeholder: "Ej: Juan Aguilar Rojas", obligatorio: true, tipo: "text" },
    { key: "edad", label: "Edad", placeholder: "Ej: 18", obligatorio: true, tipo: "number" },
    { key: "lugarNacimiento", label: "Lugar de nacimiento", placeholder: "Ej:Cordova,Ver", obligatorio: false, tipo: "text" },
    { key: "domicilio", label: "Domicilio", placeholder: "Municipio,Colonia,calle,No. casa", obligatorio: false, tipo: "text" },
    { key: "telefono", label: "Telefono", placeholder: "Ej: 222 485 9118", obligatorio: false, tipo: "number" },
    { key: "ocupacion", label: "Ocupacion", placeholder: "Ej: Obrero", obligatorio: false, tipo: "text" },
    { key: "religion", label: "Religion", placeholder: "Ej: Catolico", obligatorio: false, tipo: "text" },
    { key: "escolaridad", label: "Escolaridad", placeholder: "Ej: Secundaria", obligatorio: false, tipo: "text" },
]

const CreatePaciente = () => {
    const { savePaciente } = usePaciente()
    const { user,navigateTo } = useUser()

    // Configuración de Formik
    const formik = useFormik({
        initialValues: {
            nombre: '',
            edad: null,
            lugarNacimiento: '',
            domicilio: '',
            telefono: '',
            ocupacion: '',
            religion: '',
            escolaridad: '',
            grupoSanguineo: '',
            estadoCivil: '',
            sexo: '',
            fechaNacimiento: '',
            emailDoctor: user.email,
        },

        validationSchema: Yup.object({
            nombre: Yup.string()
                .required("El nombre del paciente es obligatorio"),
            edad: Yup.string()
                .max(3, "La edad no debe tener mas de 3 digitos")
                .required("La eda del paciente es obligatoria")
                .max(150, "La edad no debe ser mayor a 150 años"),
            grupoSanguineo: Yup.string()
                .required('El grupo sanguineo y rh del paciente son requeridos'),
            sexo: Yup.string()
                .required('El genero del paciente es requerido'),
            fechaNacimiento: Yup.string()
                .matches(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato DD-MM-YYYY")
                .required("La fecha de nacimiento es obligatoria"),
            telefono: Yup.number()
                .typeError("El teléfono debe ser un número")
                .integer("El teléfono debe ser un número entero")
                .max(9999999999, "El número telefónico no puede tener más de 10 dígitos"),
        }),

        onSubmit: (values) => {
            // Aquí puedes manejar el envío del formulario (por ejemplo, enviar a una API)
            handleSavePaciente(values)
            //console.log("Valores:", values);
        },
    });

    const handleSavePaciente = async (values) => {
        try {
            await savePaciente(values)
            // Paso 2: Mostrar SweetAlert con dos botones
            Swal.fire({
                title: "¿Deseas construir su historia clinica?",
                showDenyButton: true,
                confirmButtonText: "SI",
                denyButtonText: "No",
            }).then((result) => {
                // Paso 3: Manejar la respuesta del usuario
                if (result.isConfirmed) {
                    navigateTo(USER_ROUTES.EDIT_PACIENTE)
                } else if (result.isDenied) {
                    console.log("El usuario eligió Seguir2");
                }
            });
        // eslint-disable-next-line no-unused-vars
        } catch (error) { /* empty */ }
    }

    return (
        <section className="rounded-sm bg-gray-50 px-3 py-4 flex flex-col">
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
                        onChange={formik.handleChange} // Actualiza el valor
                        value={formik.values.grupoSanguineo} // Vincula el valor actual
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
                        onChange={formik.handleChange} // Actualiza el valor
                        value={formik.values.sexo} // Vincula el valor actual
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
                        onChange={formik.handleChange} // Actualiza el valor
                        value={formik.values.estadoCivil} // Vincula el valor actual
                    >

                        <option value={'soltero'}>soltero</option>
                        <option value={'casado'}>casado</option>
                        <option value={'divorciado'}>divorciado</option>
                        <option value={'viudo'}>viudo</option>
                        <option value={'separado'}>separado</option>
                    </Select>
                </div>
                <div className="sm:basis-1/3 lg:basis-1/5 md:basis-1/4 grow">
                    <DateInput
                        label={'Fecha de nacimiento'}
                        field={formik.getFieldProps("fechaNacimiento")} // Proporciona las props del campo
                        form={formik} // Proporciona el objeto formik
                    />
                </div >
                <div className="h-10 w-full flex justify-end gap-2 ">
                    <BotonBlanco
                        label={"Cancelar"}
                        type={'button'}
                    />
                    <BotonAzul
                        label={"Guardar paciente"}
                        type={"submit"} />
                </div>
            </form>
        </section>
    )
}

export default CreatePaciente