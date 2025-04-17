import InputWhite from "../ui/InputWhite"
import BotonAzul from "../ui/BotonAzul"
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrarUser = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConf: "",
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            universidad: "",
            cedula: "",
            cedulaEspecialidad: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("El correo electrónico no es válido")
                .required("El correo electrónico es obligatorio"),
            password: Yup.string()
                .min(6, "La contraseña debe tener al menos 6 caracteres")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputWhite
                label="Nombre"
                id="nombre"
                type="email"
                name="nombre"
                placeholder="Nombre"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
            />

            <BotonAzul
                type="submit"
            >Siguiente registrarme etc</BotonAzul>
        </form>
    )
}

export default RegistrarUser