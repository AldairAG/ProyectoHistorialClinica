import InputWhite from "../../components/ui/InputWhite"
import LabelLg from "../../components/ui/LabelLg"
import LabelXl from "../../components/ui/LabelXl"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RegistrarUser = () => {
    const [step, setStep] = useState(1);

    const avanzarPaso = () => {
        if (step < 2) setStep(step + 1);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center gap-4">

            {/*             <div className="max-h-[660PX] h-full max-w-sm p-4 
            bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
                <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Informacion de acceso</h3>
                        <p className="text-sm">Introduce tu e-mail y contraseña</p>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight">Informacion personal</h3>
                        <p className="text-sm">Introduce tu informacion personal</p>
                    </li>
                </ol>
            </div> */}

            <div className="max-h-[660PX] h-full max-w-sm p-4 
            bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">

                <form className="flex flex-col gap-4 ">

                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <div>
                                <div>
                                    <LabelXl>Inicia tu registro</LabelXl>
                                    <LabelLg>Ingresa un correo electronico y una contraseña</LabelLg>
                                </div>

                                <InputWhite
                                    label={'Email'}
                                    placeholder={'ejemplo@gmail.com'}
                                />
                                <InputWhite
                                    label={'Contraseña'}
                                    placeholder={'*********'}
                                />

                                <div>
                                    <button
                                        type="button"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                                        onClick={avanzarPaso}
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <motion.form
                                key="step2"
                                className="flex flex-col gap-4"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div>
                                    <h2 className="text-xl font-bold">Información personal</h2>
                                    <p className="text-gray-500">Introduce tu información personal</p>
                                </div>

                                <InputWhite
                                    label={'Nombre'}
                                />
                                <InputWhite
                                    label={'Apellido paterno'}
                                />
                                <InputWhite
                                    label={'Apellido Materno'}
                                />
                                <InputWhite
                                    label={'Universidad'}
                                />
                                <InputWhite
                                    label={'cedula'}
                                />
                                <InputWhite
                                    label={'Cedula de especialidad'}
                                />


                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
                                >
                                    Finalizar
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>


                </form>
            </div>
        </div>
    )
}

export default RegistrarUser