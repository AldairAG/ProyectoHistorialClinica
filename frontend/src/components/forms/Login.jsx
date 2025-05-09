import { useFormik } from "formik";
import * as Yup from "yup";
import { InputBlue } from "../ui/Input";
import { useUser } from "../../hooks/useUser";
import { USER_ROUTES } from "../../constants/routes";
import { BotonAzulDegradado } from "../ui/BotonAzul";
import logo from "../../assets/logo.png";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

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

            <div className="flex flex-col text-center sm:text-left space-y-3">
                <div className="mx-auto h-13 w-13 rounded-full bg-gradient-to-br border border-gray-300 flex items-center justify-center shadow-md">
                    <img src={logo} alt="logo" className="w-8 h-8" />
                </div>
                <h2 id="radix-«RaifbH1»" className="tracking-tight text-center text-xl font-bold text-[#001b48]">Iniciar Sesión</h2>
                <p id="radix-«RaifbH2»" className="text-sm text-center text-[#004581]/80">Accede a tu cuenta para gestionar historias clínicas</p>
            </div>

            <InputBlue
                label="Correo Electrónico"
                id="email"
                type="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                icon={EnvelopeIcon}
            />

            <InputBlue
                label="Contraseña"
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                icon={LockClosedIcon}
            />

            <div className="flex items-start">
                <a href="#" className="ms-auto text-sm text-blue-700 hover:underline
                        dark:text-blue-500">¿Olvidaste tu contraseña?</a>
            </div>

            <BotonAzulDegradado type="submit" className="w-full" variant="large">
                Iniciar sesion
            </BotonAzulDegradado>

            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#97cbdc]/30">
                    </div>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-[#f0f5f9] px-2 text-[#004581]/70">o</span>
                </div>
            </div>

            <div className="text-sm font-medium text-gray-500 flex items-center justify-center gap-2">
                    ¿Aun no estas registrado? <a onClick={() => navigateTo(USER_ROUTES.REGISTER)}
                    className="text-blue-700 hover:underline dark:text-blue-500">Crea una cuenta aqui</a>
            </div>
        </form >
    )
}

export default Login;