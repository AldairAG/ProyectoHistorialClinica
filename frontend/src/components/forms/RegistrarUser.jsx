/* eslint-disable react/prop-types */
import { useState } from "react";
import { BotonAzulDegradado } from "../ui/BotonAzul";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../hooks/useUser";
import logo from "../../assets/Logo.png";
import { InputBlue } from "../ui/Input";
import { SelectBox } from "../ui/Select";
import { UserIcon, LockClosedIcon, EnvelopeIcon, ChevronRightIcon, 
    ArrowUpOnSquareIcon,BuildingOffice2Icon,HomeIcon ,PhoneIcon,MapPinIcon } from "@heroicons/react/24/outline";

const totalSteps = 4;
const steps = [
    "Datos Personales", "Informacion de identidad", "Informacion de contacto y direccion",

]
const generosOpciones = [
    "Masculino",
    "Femenino",
];

const RegistrarUser = () => {
    const [step, setStep] = useState(3);
    const { registro } = useUser();

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };




    return (
        <section className="space-y-4">
            <Steper step={step} />

            <LabelTitle title={steps[step - 1]} />

            {/*            <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputBlue
                        label="Nombre"
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        required
                        icon={UserIcon}
                    />
                    <InputBlue
                        label="Apellidos"
                        id="apellidos"
                        type="text"
                        placeholder="Tus apellidos"
                        required
                        icon={UserIcon}
                    />
                </div>
                <InputBlue
                    label="email"
                    id="email"
                    type="email"
                    placeholder="tu@gmail.com"
                    required
                    icon={EnvelopeIcon}
                />
                <InputBlue
                    label="Contraseña"
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                    icon={LockClosedIcon}
                />
                <InputBlue
                    label="confirma contraseña"
                    id="passwordConf"
                    type="password"
                    placeholder="********"
                    required
                    icon={LockClosedIcon}
                />

                <BotonAzulDegradado onclick={nextStep}>
                    <span>Siguiente</span>
                    <ChevronRightIcon className="h-5 w-5 text-white" />
                </BotonAzulDegradado > 

            </form>  */}

            {/*             <form className="space-y-4">
                <InputBlue
                    label={"Fecha de Nacimiento"}
                    id="fechaNacimiento"
                    type="date"
                    placeholder="Fecha de Nacimiento"
                    required
                />

                <SelectBox
                    options={generosOpciones}
                />

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none 
                        peer-disabled:cursor-not-allowed peer-disabled:opacity-70 
                        text-[#004581]">
                        Foto Personal (opcional)
                    </label>
                    <div className="border-2 border-dashed border-[#97cbdc] rounded-lg 
                        p-4 text-center bg-white">
                        <label className="cursor-pointer flex flex-col items-center 
                            space-y-2">
                            <ArrowUpOnSquareIcon className="w-8 h-8 text-blue-500 stroke-2" />

                            <span className="text-sm text-[#004581]">
                                Haz clic para subir o arrastra y suelta
                            </span>
                            <span className="text-xs text-[#004581]/70">
                                PDF, JPG o PNG (Max. 5MB)
                            </span>
                            <input
                                id="fotoPersonal"
                                accept="image/*"
                                className="hidden"
                                type="file" />
                        </label>
                    </div>
                </div>

            </form> */}

            {/* <form className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputBlue
                        className={"col-span-2"}
                        label="Nombre de Consultorio"
                        id="nombreConsultorio"
                        type="text"
                        placeholder="Nombre de Consultorio"
                        required
                        icon={BuildingOffice2Icon }
                    />

                    <InputBlue
                        label="Ciudad"
                        id="ciudad"
                        type="text"
                        placeholder="Ciudad"
                        required
                        icon={MapPinIcon}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputBlue
                            label="Número Exterior"
                            id="numeroExterior"
                            type="text"
                            placeholder="Número"
                            required
                            icon={BuildingOffice2Icon}
                        />
                        <InputBlue
                            label="Número Interior"
                            id="numeroInterior"
                            type="text"
                            placeholder="(opcional)"
                            icon={BuildingOffice2Icon}
                        />
                    </div>


                    <InputBlue
                        label="Calle"
                        id="calle"
                        type="text"
                        placeholder="Calle"
                        required
                        icon={MapPinIcon }
                    />

                    <InputBlue
                        label="Colonia"
                        id="colonia"
                        type="text"
                        placeholder="Colonia"
                        required
                        icon={MapPinIcon }
                    />

                    <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">

                        <InputBlue
                            label="Teléfono"
                            id="telefono"
                            type="text"
                            placeholder="Teléfono"
                            required
                            icon={PhoneIcon}
                        />

                        <InputBlue
                            label="Estado"
                            id="estado"
                            type="text"
                            placeholder="Estado"
                            required
                            icon={MapPinIcon }
                        />

                        <InputBlue
                            label="Código Postal"
                            id="codigoPostal"
                            type="text"
                            placeholder="Código Postal"
                            required
                            icon={EnvelopeIcon}
                        />

                    </div>



                </div>

                <BotonAzulDegradado onClick={nextStep}>
                    <span>Siguiente</span>
                    <ChevronRightIcon className="h-5 w-5 text-white" />
                </BotonAzulDegradado>
            </form> */}

            <form>
                
            </form>

            <div className="text-center text-sm text-[#004581]/70 pt-4">
                ¿Ya tienes una cuenta?
                <button type="button"
                    className="font-medium text-[#018abd] hover:text-[#004581] transition-colors">
                    Inicia sesión
                </button>
            </div>

        </section>
    );
};

const Steper = ({ step }) => {
    return (
        <div className="flex flex-col text-center sm:text-left space-y-3">
            <img
                src={logo}
                alt="logo"
                className="w-10 h-10 self-center"
            />
            <h2 id="radix-«ReifbH1»" className="tracking-tight text-center text-xl font-bold text-[#001b48]">Crear Cuenta</h2>
            <p id="radix-«ReifbH2»" className="text-sm text-center text-[#004581]/80">Regístrate para comenzar a utilizar MediNote</p>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2 w-full">

                        {[...Array(totalSteps)].map((_, index) => (
                            <div key={index} className="flex-1 flex items-center">
                                {/* Círculo del paso */}
                                <div
                                    className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium 
                                        text-white 
                                      ${index + 1 == step
                                            ? "bg-gradient-to-r from-[#004581] to-[#018abd] text-white"
                                            : index + 1 < step
                                                ? "bg-[#1e88e5] text-white"
                                                : "bg-gray-200 text-gray-600"}`}
                                >
                                    {index + 1}
                                </div>

                                {/* Línea conectora entre círculos */}
                                {index < totalSteps - 1 && (
                                    <div className={`h-1 flex-1 mx-1 ${index + 1 < step ? "bg-[#1e88e5]" : "bg-gray-200"}`}>
                                        <div className="h-full bg-[#dde8f0]" />
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>

                <div className="text-xs text-[#004581]/80 flex justify-between mb-1">
                    <span>Paso {step} de 4</span>
                    <span>{25 * step}% completado</span>
                </div>


                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                        className="bg-blue-900 h-full transition-all duration-300 ease-in-out"
                        style={{ width: `${25 * step}%` }}
                    ></div>
                </div>
            </div>

        </div>
    )
}

const LabelTitle = ({ title }) => {
    return <h3 className="font-medium text-[#001b48] border-l-4 border-[#018abd] pl-2">{title}</h3>
}

export default RegistrarUser;