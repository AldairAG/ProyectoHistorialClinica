import Accordion from "../../components/ui/Acordion";
import BotonAzul from "../../components/ui/BotonAzul";
import InputWhite from "../../components/ui/InputWhite";
import Select from "../../components/ui/Select";
import TextArea from "../../components/ui/TextArea";
import { KEYS_DB, SINTOMAS } from "../../constants/keys";
import { LABELS_NOTA_MEDICA } from "../../constants/labels";
import { useFormik } from "formik";
import { usePaciente } from '../../hooks/usePaciente'
import { useUser } from '../../hooks/useUser'
import { useState } from "react";

const signos = [
    {
        key: KEYS_DB.TENSION_ARTERIAL,
        label: LABELS_NOTA_MEDICA.TENSION_ARTERIAL,
        pl: "120/80 mmHg",
        tipo: 'number'
    },
    {
        key: KEYS_DB.FRECEUCNIA_CARDIACA,
        label: LABELS_NOTA_MEDICA.FRECUENCIA_CARDIACA,
        pl: "lpm",
        tipo: 'number'
    },
    {
        key: KEYS_DB.FRECEUCNIA_RESPIRATORIA,
        label: LABELS_NOTA_MEDICA.FRECUENCIA_RESPIRATORIA,
        pl: "rpm",
        tipo: 'number'
    },
    {
        key: KEYS_DB.TEMPERATURA,
        label: LABELS_NOTA_MEDICA.TEMPERATURA,
        pl: "°C",
        tipo: 'number'
    },
    {
        key: KEYS_DB.SATURACION_O,
        label: LABELS_NOTA_MEDICA.SATURACION_O,
        pl: "%",
        tipo: 'number'
    },
    {
        key: KEYS_DB.PESO,
        label: LABELS_NOTA_MEDICA.PESO,
        pl: "Kg",
        tipo: 'number'
    },
    {
        key: KEYS_DB.ALTURA,
        label: LABELS_NOTA_MEDICA.ALTURA,
        pl: "cm",
        tipo: 'number'
    },
]

const fisica = [
    {
        key: KEYS_DB.ESTADO_NEUROLOGICO,
        label: LABELS_NOTA_MEDICA.ESTADO_NEUROLOGICO,
        pl: "Descripcion del estado neurologico",
        tipo: 'text'
    },
    {
        key: KEYS_DB.PIEL,
        label: LABELS_NOTA_MEDICA.PIEL,
        pl: "Descripcion de piel y tegumento",
        tipo: 'text'
    },
    {
        key: KEYS_DB.EXPLORACION_SUPERIOR,
        label: LABELS_NOTA_MEDICA.EXPLORACION_SUPERIOR,
        pl: "Descripcion de cabeza y cuello",
        tipo: 'text'
    },
    {
        key: KEYS_DB.TORAX,
        label: LABELS_NOTA_MEDICA.TORAX,
        pl: "Descripcion del torax",
        tipo: 'text'
    },
    {
        key: KEYS_DB.ABDOMEN,
        label: LABELS_NOTA_MEDICA.ABDOMEN,
        pl: "Descripcion del abdomen",
        tipo: 'text'
    },
    {
        key: KEYS_DB.GENITALES,
        label: LABELS_NOTA_MEDICA.GENITALES,
        pl: "Descripcion de genitales externos",
        tipo: 'text'
    },
    {
        key: KEYS_DB.EXTREMIDADES,
        label: LABELS_NOTA_MEDICA.TENSION_ARTERIAL,
        pl: "Descripcion de extremidades",
        tipo: 'text'
    },
]

const diagnostico = [
    {
        key: KEYS_DB.IMPRESION_DIAGNOSTICA,
        label: LABELS_NOTA_MEDICA.IMPRESION_DIAGNOSTICA,
        pl: "Describa la impresion diagnostica",
        tipo: 'text'
    },
    {
        key: KEYS_DB.ANALISIS_PLAN,
        label: LABELS_NOTA_MEDICA.ANALISIS_PLAN,
        pl: "Describa el analisis y plan de tratamiento",
        tipo: 'text'
    },
]

const initialValuesDef = { tratamientos: [], };
[...signos, ...fisica, ...diagnostico].forEach((item) => {
    initialValuesDef[item.key] = '';
});

[...SINTOMAS.GENERALES, ...SINTOMAS.DIGESTIVO, ...SINTOMAS.RESPIRATORIO,
...SINTOMAS.CARDIOVASCULAR, ...SINTOMAS.URINARIO, ...SINTOMAS.NERVIOSO,
...SINTOMAS.ENDOCRINO, ...SINTOMAS.MUSCULOESQUELETICO, ...SINTOMAS.HEMATOFAGICO,
...SINTOMAS.PSIQUIATRICO,].forEach((item) => {
    initialValuesDef[item] = ''
})

const CrearNotaMedica = () => {

    const [visible, setVisible] = useState(false)
    const { pacienteSelect,saveNotaMedica } = usePaciente()
    const { user } = useUser()

    const formik = useFormik({
        initialValues: initialValuesDef,
        onSubmit: (values) => {
            save(values)
        }
    })
    const formikReceta = useFormik({
        initialValues: {
            medicamento: '',
            duracion: '',
            frecuencia: 'cada 12 horas',
            dosis: '',
            viaDeAdministracion: 'Via oral',
            indicaciones: '',
        },
        onSubmit: (values) => {
            formik.setValues({
                ...formik.values,
                tratamientos: [...formik.values.tratamientos, values] // ✅ Usar `setValues` para actualizar el array
            });
            formikReceta.handleReset()

        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        formik.handleSubmit()
    };

    const handleSubmitRceta = (event) => {
        event.preventDefault();
        formikReceta.handleSubmit()

    };

    const openClose = () => { setVisible(!visible) }

    const handlePrint = () => { window.print(); };

    const save=(values)=>{
        const result = [];

        Object.keys(values).forEach(key => {
            if (key !== 'tratamientos' && values[key] !== null && values[key] !== '') {
                result.push({
                    nombre: key,
                    descripcion: values[key] === true ? null : values[key], // Si es true, se asigna null
                    presencia: true
                });
            }
        });

        const request={
            idDoctor:user.id,
            idPaciente:pacienteSelect.idPaciente,
            registros:result,
            tratamientos:values.tratamientos,
        }

        console.log(user);
        console.log(pacienteSelect);
        console.log(request);
        saveNotaMedica(request)
    }

    return (
        <main>
            {visible && (

                <div className="flex flex-col fixed top-0 left-0 bg-white h-screen w-screen  z-50 print:block">

                    <div className="bg-white p-6 mb-5">
                        <div className="mb-8">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold">RECETA MÉDICA</h2>
                                <p className="text-muted-foreground">Dr. {user.nombre} {user.apellidoPaterno} {user.apellidoMaterno}</p>
                                <p className="text-muted-foreground">Cédula Profesional: {user.cedula}</p>
                                <p className="text-muted-foreground">Especialidad: {user.cedulaEspecialidad}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p>
                                        <strong>Paciente:</strong> {pacienteSelect.nombre}
                                    </p>
                                    <p>
                                        <strong>Edad:</strong> {pacienteSelect.edad}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p>
                                        <strong>Fecha:</strong> {new Date().toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Tratamientos Prescritos</h3>

                        <div className="space-y-2">
                            {formik.values.tratamientos.map((item, index) => (
                                <div className="w-full border border-gray-300 rounded-lg p-3 space-y-1" key={index}>
                                    <h3 className="font-semibold text-gray-900">{item.medicamento} <span className="text-sm text-gray-500">{item.dosis}</span></h3>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex text-center space-x-1 items-center">
                                            <i className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-medical" viewBox="0 0 16 16">
                                                    <path d="M8.5 4.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L7 6l-.549.317a.5.5 0 1 0 .5.866l.549-.317V7.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L9 6l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zM5.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                                </svg>
                                            </i>
                                            <span className=" text-gray-500">{item.viaDeAdministracion}</span>
                                        </div>
                                        <div className="flex text-center space-x-1 items-center">
                                            <i className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                                </svg>
                                            </i>
                                            <span className=" text-gray-500">{item.frecuencia}</span>
                                        </div>
                                        <div className="flex text-center space-x-1 items-center">
                                            <i className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                </svg>
                                            </i>
                                            <span className=" text-gray-500">{item.duracion} Dias</span>
                                        </div>
                                    </div>
                                    {item.indicaciones && (
                                        <div className="pt-1 border-t border-gray-300 flex text-center space-x-1 items-center">
                                            <i className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                                </svg>
                                            </i>
                                            <span className="text-sm">{item.indicaciones}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-around print:hidden">
                        <button className="bg-blue-600 px-3 py-1 text-sky-100 rounded-md border-1 w-45 justify-center
                    hover:bg-blue-700 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
                            </svg>
                            <span className="font-semibold" onClick={handlePrint}>Imprimir receta</span>
                        </button>

                        <button className="bg-blue-600 px-3 py-1 text-sky-100 rounded-md border-1 w-45 justify-center
                    hover:bg-blue-700 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                            <span className="font-semibold" onClick={openClose}>Regresar</span>
                        </button>
                    </div>

                </div>
            )}

            <form className="space-y-5 mb-5 print:hidden" onSubmit={formik.handleSubmit}>
                <Accordion title={'Signos vitales'}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {signos.map((item, index) => (
                            <div key={index} className="">
                                <InputWhite
                                    label={item.label}
                                    placeholder={item.pl}
                                    name={item.key}
                                    onChange={formik.handleChange}
                                    value={formik.values[item.key]}
                                />
                            </div>
                        ))}
                    </div>
                </Accordion>

                <Accordion title={"Descripcion del padecimiento actual"}>
                    <div className="">
                        <label htmlFor="" className="block mb-2 text-sm font-sans font-semibold text-gray-500">
                            Describa cómo empezó, si se exacerba o remite con alguna actividad, si se asocia con
                            otra sintomatología, si es la primera vez que se experimenta. etc.
                        </label>
                        <textarea name={KEYS_DB.PADECIMIENTO_ACTUAL}
                            onChange={formik.handleChange}
                            value={formik.values.PADECIMIENTO_ACTUAL}
                            placeholder="Describa el padecimiento actual del paciente"
                            id={KEYS_DB.PADECIMIENTO_ACTUAL}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                            border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-50"/>
                    </div>
                </Accordion>

                <Accordion title={"Interrogatorio por aparatos y sistemas"}>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sintomas generales</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.GENERALES.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black"
                                        type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema digestivo</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.DIGESTIVO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black" type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema respiratorio</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.RESPIRATORIO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black" type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema cardiovascular</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.CARDIOVASCULAR.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black" type="checkbox" />
                                    <label

                                        className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">sistema urinario</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.URINARIO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black" type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema nervioso</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.NERVIOSO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black"
                                        type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema endocrino</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.ENDOCRINO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black"
                                        type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema musculoesqueletico</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.MUSCULOESQUELETICO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black"
                                        type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Sistema hematofagico</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4 ">
                            {SINTOMAS.HEMATOFAGICO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black"
                                        type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2 relative border rounded-md border-gray-300 shadow-sm p-2 pt-3 mb-5">
                        <h3 className="text-gray-500 -top-3 bg-white absolute font-bold">Evaluacion psquiatrica</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-4">
                            {SINTOMAS.PSIQUIATRICO.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        name={item}
                                        onChange={formik.handleChange}
                                        value={formik.values[item]}
                                        className="rounded-sm border-black"
                                        type="checkbox" />
                                    <label className="text-sm font-sans font-semibold text-gray-500">{item}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Accordion>

                <Accordion title={"Exploracion fisica"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fisica.map((item, index) => (
                            <div key={index} className="">
                                <TextArea
                                    name={item.key}
                                    onChange={formik.handleChange}
                                    value={formik.values[item.key]}
                                    label={item.label}
                                    placeholder={item.pl}
                                />
                            </div>
                        ))}
                    </div>
                </Accordion>

                <Accordion title={"Impresion diagnostica"}>
                    <div className="grid grid-cols-1 gap-4">
                        {diagnostico.map((item, index) => (
                            <div key={index} className="">
                                <TextArea
                                    name={item.key}
                                    onChange={formik.handleChange}
                                    value={formik.values[item.key]}
                                    label={item.label}
                                    className={'h-35'}
                                    placeholder={item.pl}
                                />
                            </div>
                        ))}
                    </div>
                </Accordion>
            </form>

            <div className="space-y-5 print:hidden">
                <Accordion title={"Crear receta"}>
                    <div className="space-y-2 print:hidden">
                        <div className="flex justify-between">
                            <h1 className="text-xl text-gray-500">Agregar tratamiento</h1>
                            <BotonAzul
                                label={'Imprimir receta'}
                                onClick={openClose}
                            />
                        </div>

                        <form onSubmit={formikReceta.handleSubmit} className="space-y-4 mb-12">
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <InputWhite
                                        label={'Medicamento'}
                                        placeholder={'Ej: Nombre del  medicamento'}
                                        name={'medicamento'}
                                        onChange={formikReceta.handleChange}
                                        value={formikReceta.values.medicamento}
                                    />
                                    <InputWhite
                                        label={'Dosis'}
                                        placeholder={'Ej: 500mg, 5ml, etc.'}
                                        name={'dosis'}
                                        onChange={formikReceta.handleChange}
                                        value={formikReceta.values['dosis']}
                                    />

                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <InputWhite
                                        label={'Duracion de tratamiento (dias)'}
                                        type={'number'}
                                        placeholder={'0'}
                                        name={'duracion'}
                                        onChange={formikReceta.handleChange}
                                        value={formikReceta.values['duracion']}
                                    />

                                    <Select
                                        label={'Frecuencia de consumo'}
                                        name={'frecuencia'}
                                        onChange={formikReceta.handleChange}
                                        value={formikReceta.values['frecuencia']}
                                    >
                                        <option value="cada 12 horas">cada 12 horas</option>
                                        <option value="cada 8 horas">cada 8 horas</option>
                                        <option value="cada 6 horas">cada 6 horas</option>
                                        <option value="cada 4 horas">cada 4 horas</option>
                                        <option value="cada 2 horas">cada 2 horas</option>
                                        <option value="cada 1 hora">cada 1 hora</option>
                                        <option value="Toma unica">Toma unica</option>
                                        <option value="Una diaria">Una diaria</option>
                                        <option value="Con las comidas">Con las comidas</option>
                                        <option value="Al desayunar">Al desayunar</option>
                                        <option value="Antes de dormir">Antes de dormir</option>
                                        <option value="Antes de dormir">Antes de dormir</option>
                                    </Select>
                                    <Select
                                        label={'Via de administracion'}
                                        name={'viaDeAdministracion'}
                                        onChange={formikReceta.handleChange}
                                        value={formikReceta.values['viaDeAdministracion']}
                                    >
                                        <option value="Vía oral">Vía oral</option>
                                        <option value="Vía sublingual">Vía sublingual</option>
                                        <option value="Vía tópica">Vía tópica</option>
                                        <option value="Vía intravenosa">Vía intravenosa</option>
                                        <option value="Vía intramuscular">Vía intramuscular</option>
                                        <option value="Vía subcutánea">Vía subcutánea</option>
                                        <option value="Vía rectal">Vía rectal</option>
                                        <option value="Vía inhalatoria">Vía inhalatoria</option>
                                    </Select>
                                </div>
                            </div>
                            <TextArea
                                label={'Indicaciones de tratamiento'}
                                placeholder={'Ej: Tomar una pastilla via oral'}
                                name={'indicaciones'}
                                onChange={formikReceta.handleChange}
                                value={formikReceta.values['indicaciones']}
                            />

                            <BotonAzul
                                label={'+ Agregar a la receta'}
                                onClick={(e) => handleSubmitRceta(e)}
                            />

                        </form>

                        {/*VENTANA DE RECETA A IMPRIMIR */}
                        <div className="bg-white p-6 rounded-lg border print:block">
                            <div className="mb-8">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold">RECETA MÉDICA</h2>
                                    <p className="text-muted-foreground">Dr. {user.nombre} {user.apellidoPaterno} {user.apellidoMaterno}</p>
                                    <p className="text-muted-foreground">Cédula Profesional: {user.cedula}</p>
                                    <p className="text-muted-foreground">Especialidad: {user.cedulaEspecialidad}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p>
                                            <strong>Paciente:</strong> {pacienteSelect.nombre}
                                        </p>
                                        <p>
                                            <strong>Edad:</strong> {pacienteSelect.edad}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p>
                                            <strong>Fecha:</strong> {new Date().toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-4">Tratamientos Prescritos</h3>

                            <div className="space-y-2">
                                {formik.values.tratamientos.map((item, index) => (
                                    <div className="w-full border border-gray-300 rounded-lg p-3 space-y-1" key={index}>
                                        <h3 className="font-semibold text-gray-900">{item.medicamento} <span className="text-sm text-gray-500">{item.dosis}</span></h3>
                                        <div className="flex justify-between mb-2">
                                            <div className="flex text-center space-x-1 items-center">
                                                <i className="text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-medical" viewBox="0 0 16 16">
                                                        <path d="M8.5 4.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L7 6l-.549.317a.5.5 0 1 0 .5.866l.549-.317V7.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L9 6l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zM5.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
                                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                                    </svg>
                                                </i>
                                                <span className=" text-gray-500">{item.viaDeAdministracion}</span>
                                            </div>
                                            <div className="flex text-center space-x-1 items-center">
                                                <i className="text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                                    </svg>
                                                </i>
                                                <span className=" text-gray-500">{item.frecuencia}</span>
                                            </div>
                                            <div className="flex text-center space-x-1 items-center">
                                                <i className="text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                    </svg>
                                                </i>
                                                <span className=" text-gray-500">{item.duracion} Dias</span>
                                            </div>
                                        </div>
                                        <div className="pt-1 border-t border-gray-300 flex text-center space-x-1 items-center">
                                            <i className="text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                                </svg>
                                            </i>
                                            <span className="text-sm">{item.indicaciones}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>
                </Accordion>

                <div className="w-full border h-14 border-gray-300 bg-gray-100 rounded-lg flex items-center justify-end pe-4">
                    <BotonAzul
                        label={'Guardar'}
                        type={'submit'}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </main>
    )
}

export default CrearNotaMedica;