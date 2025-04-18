import { useState } from "react";
import InputWhite from "../ui/InputWhite";
import BotonAzul from "../ui/BotonAzul";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const RegistrarUser = () => {
    const [step, setStep] = useState(1);
    const [registroCompleto, setRegistroCompleto] = useState(false);

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
            password: Yup.string()
                .min(6, "La contraseña debe tener al menos 6 caracteres")
                .required("La contraseña es obligatoria"),
            passwordConf: Yup.string()
                .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
                .required("La confirmación es obligatoria"),
            nombre: Yup.string()
                .min(2, "El nombre debe tener al menos 2 caracteres")
                .matches(/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/, "El nombre solo puede contener letras")
                .required("El nombre es obligatorio"),
            apellidoPaterno: Yup.string()
                .min(2, "Debe tener al menos 2 caracteres")
                .matches(/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/, "Solo se permiten letras")
                .required("El apellido paterno es obligatorio"),
            apellidoMaterno: Yup.string()
                .min(2, "Debe tener al menos 2 caracteres")
                .matches(/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/, "Solo se permiten letras")
                .required("El apellido materno es obligatorio"),
            universidad: Yup.string()
                .min(2, "Debe tener al menos 2 caracteres")
                .required("La universidad es obligatoria"),
            cedula: Yup.string()
                .matches(/^\d{7,10}$/, "La cédula debe contener entre 7 y 10 dígitos")
                .required("La cédula es obligatoria"),
        }),
        onSubmit: (values) => {
            console.log("Datos enviados:", values);
            setRegistroCompleto(true);
        },
    });

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <form onSubmit={formik.handleSubmit} className="space-y-4">
            {!registroCompleto && (
                <>
                    {step === 1 && (
                        <div>
                            <InputWhite
                                label="Correo electrónico"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                error={formik.touched.email && formik.errors.email}
                            />
                            <InputWhite
                                label="Contraseña"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Contraseña"
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
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <InputWhite
                                label="Nombre"
                                id="nombre"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
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
                        </div>
                    )}
                </>
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
