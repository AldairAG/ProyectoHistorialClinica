import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/Input";
import { useUser } from "../../hooks/useUser";
import { USER_ROUTES } from "../../constants/routes";

const Login = () => {
    const { login, navigateTo } = useUser()

    const handleLogin = async (values) => {
        await login(values)
    }

    // Configuración de Formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("El correo electrónico no es válido")
                .required("El correo electrónico es obligatorio"),
            password: Yup.string()
                .min(6, "La contraseña debe tener al menos 6 caracteres")
                .required("La contraseña es obligatoria"),
        }),
        onSubmit: (values) => {
            // Aquí puedes manejar el envío del formulario (por ejemplo, enviar a una API)
            handleLogin(values)
            //alert(`Inicio de sesión exitoso:\nEmail: ${values.email}\nContraseña: ${values.password}`);
        },
    });

    return (
        <form className="space-y-6" onSubmit={formik.handleSubmit}>

            <h5 className="text-xl font-medium text-gray-900">Inicia sesion</h5>

            <Input
                label="Correo Electrónico"
                id="email"
                type="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />

            <Input
                label="Contraseña"
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />

            <div className="flex items-start">
                <a href="#" className="ms-auto text-sm text-blue-700 hover:underline
                        dark:text-blue-500">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                    py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800">Iniciar sesion</button>

            <div className="text-sm font-medium text-gray-500">
                ¿Aun no estas registrado? <a onClick={() => navigateTo(USER_ROUTES.REGISTER)}
                    className="text-blue-700 hover:underline dark:text-blue-500">Crea una cuenta aqui</a>
            </div>
        </form >
    )
}

export default Login;