import BotonAzul from "../../components/ui/BotonAzul";
import BotonBlanco from "../../components/ui/BotonBlanco";
import InputWhite from "../../components/ui/InputWhite";
import Select from "../../components/ui/Select";
import * as Yup from "yup";
import { useFormik } from "formik";
import { usePaciente } from "../../hooks/usePaciente";
import { useUser } from "../../hooks/useUser";
import Swal from "sweetalert2";
import { USER_ROUTES } from "../../constants/routes";

const campos = [
    { key: "nombre", label: "Nombre", placeholder: "Ej: Juan", obligatorio: true, tipo: "text" },
    { key: "apellidoPaterno", label: "Apellido paterno", placeholder: "Ej: Aguilar", obligatorio: true, tipo: "text" },
    { key: "apellidoMaterno", label: "Apellido materno", placeholder: "Ej: Rojas", obligatorio: true, tipo: "text" },
    { key: "edad", label: "Edad", placeholder: "Ej: 18", obligatorio: true, tipo: "number" },
    { key: "lugarNacimiento", label: "Lugar de nacimiento", placeholder: "Ej: Córdoba, Ver", obligatorio: false, tipo: "text" },
    { key: "domicilio", label: "Domicilio", placeholder: "Municipio, Colonia, Calle, No. casa", obligatorio: false, tipo: "text" },
    { key: "telefono", label: "Teléfono", placeholder: "Ej: 2224859118", obligatorio: false, tipo: "number" },
    { key: "ocupacion", label: "Ocupación", placeholder: "Ej: Obrero", obligatorio: false, tipo: "text" },
];

const religionOptions = [
    "Católico",
    "Cristiano",
    "Musulmán",
    "Judío",
    "Budista",
    "Ateo",
    "Otra"
];

const escolaridadOptions = [
    "Primaria",
    "Secundaria",
    "Preparatoria",
    "Universidad",
    "Posgrado",
    "Ninguna"
];

const CreatePaciente = () => {
    const { savePaciente } = usePaciente();
    const { user, navigateTo } = useUser();

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            edad: null,
            lugarNacimiento: "",
            domicilio: "",
            telefono: "",
            ocupacion: "",
            religion: "",
            escolaridad: "",
            grupoSanguineo: "A+",
            estadoCivil: "",
            sexo: "Femenino",
            fechaNacimiento: "",
            emailDoctor: user.email,
        },

        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre del paciente es obligatorio"),
            apellidoPaterno: Yup.string().required("El apellido paterno es obligatorio"),
            apellidoMaterno: Yup.string().required("El apellido materno es obligatorio"),
            edad: Yup.number()
                .min(0, "La edad no puede ser negativa")
                .max(150, "La edad no debe ser mayor a 150 años")
                .required("La edad del paciente es obligatoria"),
            telefono: Yup.number()
                .typeError("El teléfono debe ser un número")
                .integer("El teléfono debe ser un número entero")
                .max(9999999999, "Máximo 10 dígitos"),
        }),

        onSubmit: (values) => {
            handleSavePaciente(values);
        },
    });

    const handleSavePaciente = async (values) => {
        try {
            await savePaciente(values);
            Swal.fire({
                title: "¿Deseas construir su historia clínica?",
                icon: "question",
                showDenyButton: true,
                confirmButtonText: "Sí",
                denyButtonText: "No",
                customClass: {
                    confirmButton: "!bg-blue-600 !px-5 !py-2 !text-sm",
                    denyButton: "!bg-gray-200 !text-gray-800 !px-5 !py-2 !text-sm"
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    navigateTo(USER_ROUTES.EDIT_PACIENTE);
                } else {
                    navigateTo(USER_ROUTES.PACIENTES_LIST);
                }
            });
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Ocurrió un error al guardar el paciente",
                icon: "error"
            });
        }
    };

    return (
        <section className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                Datos generales del paciente
            </h2>

            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {campos.map((item, index) => (
                    <div key={index} className="space-y-1">
                        <InputWhite
                            type={item.tipo}
                            label={item.label}
                            id={item.key}
                            name={item.key}
                            obligatorio={item.obligatorio}
                            placeholder={item.placeholder}
                            required={item.obligatorio}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values[item.key]}
                        />
                        {formik.touched[item.key] && formik.errors[item.key] && (
                            <div className="text-red-500 text-sm ml-2">
                                {formik.errors[item.key]}
                            </div>
                        )}
                    </div>
                ))}

                {/* Campo Religión */}
                <div className="space-y-1">
                    <Select
                        label="Religión"
                        name="religion"
                        obligatorio={false}
                        onChange={formik.handleChange}
                        value={formik.values.religion}
                    >
                        <option value="">Seleccione una opción</option>
                        {religionOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Select>
                </div>

                {/* Campo Escolaridad */}
                <div className="space-y-1">
                    <Select
                        label="Escolaridad"
                        name="escolaridad"
                        obligatorio={false}
                        onChange={formik.handleChange}
                        value={formik.values.escolaridad}
                    >
                        <option value="">Seleccione una opción</option>
                        {escolaridadOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </Select>
                </div>

                {/* Resto de selects */}
                <div className="space-y-1">
                    <Select
                        label="Grupo sanguíneo"
                        name="grupoSanguineo"
                        obligatorio={true}
                        required
                        onChange={formik.handleChange}
                        value={formik.values.grupoSanguineo}
                    >
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((tipo, index) => (
                            <option key={index} value={tipo}>{tipo}</option>
                        ))}
                    </Select>
                </div>

                <div className="space-y-1">
                    <Select
                        label="Género"
                        name="sexo"
                        obligatorio={true}
                        required
                        onChange={formik.handleChange}
                        value={formik.values.sexo}
                    >
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                    </Select>
                </div>

                <div className="space-y-1">
                    <Select
                        label="Estado civil"
                        name="estadoCivil"
                        obligatorio={true}
                        required
                        onChange={formik.handleChange}
                        value={formik.values.estadoCivil}
                    >
                        <option value="">Seleccione...</option>
                        {["Soltero", "Casado", "Divorciado", "Viudo", "Separado"].map((estado, index) => (
                            <option key={index} value={estado.toLowerCase()}>{estado}</option>
                        ))}
                    </Select>
                </div>

                <div className="col-span-full flex justify-end gap-3 mt-6 border-t pt-6">
                    <BotonBlanco
                        label="Cancelar"
                        type="button"
                        onClick={() => navigateTo(USER_ROUTES.PACIENTES_LIST)}
                    />
                    <BotonAzul
                        label="Guardar paciente"
                        type="submit"
                    />
                </div>
            </form>
        </section>
    );
};

export default CreatePaciente;