import { useState } from "react";
import InputWhite from "../ui/InputWhite";
import BotonAzul from "../ui/BotonAzul";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useUser } from "../../hooks/useUser";

const RegistrarUser = () => {
    const [step, setStep] = useState(1);
    const [registroCompleto, setRegistroCompleto] = useState(false);
    const { registro } = useUser();

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
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("El correo electrónico no es válido")
                .required("El correo electrónico es obligatorio"),

        }),
        onSubmit: async (values) => {
            const request = {
                email: values.email,
                password: values.password,
                nombre: values.nombre,
                apellidoPaterno: values.apellidoPaterno,
                apellidoMaterno: values.apellidoMaterno,
                universidad: values.universidad,
                cedula: values.cedula,
            };
            console.log(request);

            handleRegister(request);
            setRegistroCompleto(true);
        },
    });

    const handleRegister = async (request) => {
        await registro(request); // ya guarda token y user
    }

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const totalSteps = 2;

    // Componente para el indicador de pasos estético
    const StepIndicator = () => (
        <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
                {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex items-center">
                        {/* Círculo del paso */}
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center 
                                      ${index + 1 === step
                                    ? "bg-[#004581] text-white"
                                    : index + 1 < step
                                        ? "bg-[#1e88e5] text-white"
                                        : "bg-gray-200 text-gray-600"}`}
                        >
                            {index + 1}
                        </div>

                        {/* Línea conectora entre círculos */}
                        {index < totalSteps - 1 && (
                            <div
                                className={`w-10 h-1 ${index + 1 < step ? "bg-[#1e88e5]" : "bg-gray-200"}`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
            {!registroCompleto && (
                <div className="min-h-[420px]"> {/* Contenedor con altura mínima fija */}
                    <StepIndicator />

                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <InputWhite
                                label="Correo electrónico"
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && formik.errors.email}
                            />
                            <InputWhite
                                label="Contraseña"
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                error={formik.touched.password && formik.errors.password}
                            />
                            <InputWhite
                                label="Confirmar contraseña"
                                id="passwordConf"
                                type="password"
                                name="passwordConf"
                                placeholder="Confirmar contraseña"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordConf}
                                error={formik.touched.passwordConf && formik.errors.passwordConf}
                            />
                            <div className="mt-7 flex justify-end">
                                <BotonAzul
                                    type="button"
                                    label="Siguiente"
                                    onClick={nextStep}
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <InputWhite
                                label="Nombre"
                                id="nombre"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nombre}
                                error={formik.touched.nombre && formik.errors.nombre}
                            />
                            <InputWhite
                                label="Apellido paterno"
                                id="apellidoPaterno"
                                type="text"
                                name="apellidoPaterno"
                                placeholder="Apellido paterno"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.apellidoPaterno}
                                error={formik.touched.apellidoPaterno && formik.errors.apellidoPaterno}
                            />
                            <InputWhite
                                label="Apellido materno"
                                id="apellidoMaterno"
                                type="text"
                                name="apellidoMaterno"
                                placeholder="Apellido materno"
                                required={true}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.apellidoMaterno}
                                error={formik.touched.apellidoMaterno && formik.errors.apellidoMaterno}
                            />
                            <InputWhite
                                label="Universidad"
                                id="universidad"
                                type="text"
                                name="universidad"
                                placeholder="Universidad"
                                onChange={formik.handleChange}
                                required={true}
                                onBlur={formik.handleBlur}
                                value={formik.values.universidad}
                                error={formik.touched.universidad && formik.errors.universidad}
                            />
                            <InputWhite
                                label="Cédula"
                                id="cedula"
                                type="text"
                                name="cedula"
                                placeholder="Cédula"
                                onChange={formik.handleChange}
                                required={true}
                                onBlur={formik.handleBlur}
                                value={formik.values.cedula}
                                error={formik.touched.cedula && formik.errors.cedula}
                            />
                            <div className="mt-7 flex justify-end gap-5">
                                <BotonAzul
                                    type="button"
                                    label="Atrás"
                                    onClick={prevStep}
                                />
                                <BotonAzul
                                    type="submit"
                                    label="Registrar"
                                />
                            </div>
                        </motion.div>
                    )}
                </div>
            )}

            {registroCompleto && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="text-center py-10"
                >
                    <motion.h2
                        className="text-3xl font-extrabold text-[#004581]"
                        initial={{ scale: 0.7, rotate: -5 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.7, ease: "backOut" }}
                    >
                        ¡Registro completado con éxito! 🎉
                    </motion.h2>
                    <motion.p
                        className="text-[#1565a0] mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Gracias por registrarte. Ahora puedes iniciar sesión.
                    </motion.p>
                </motion.div>
            )}
        </form>
    );
};

export default RegistrarUser;