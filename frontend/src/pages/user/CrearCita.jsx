import { Card, CardContent, CardDescription, CardHead, CardHeader } from '../../components/ui/Card';
import InputWhite from '../../components/ui/InputWhite';
import MainDiv from '../../components/ui/MainDiv';
import Select from '../../components/ui/Select';
import TextArea from '../../components/ui/TextArea';
import { usePaciente } from '../../hooks/usePaciente';
import { useFormik } from 'formik';
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const CrearCita = () => {
    const { pacienteSelect } = usePaciente();

    const formik = useFormik({
        initialValues: {
            nombre: pacienteSelect.nombre || '',
            fecha: '',
            hora: '',
            consultorio: '',
            telefono: '',
            motivoConsulta: '',
            notasAdicionales: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <MainDiv>
            <Card className={'space-y-4 w-full'} onSubmit={formik.handleSubmit}>
                <CardHead className={'space-y-2'}>
                    <CardHeader>Agendar nueva cita</CardHeader>
                    <CardDescription>Complete el formulario para agendar una cita médica</CardDescription>
                </CardHead>

                <CardContent className={'space-y-4 md:grid md:grid-cols-3 gap-4'}>
                    <InputWhite
                        classNameDiv={'cols-span-1'}
                        label={'Nombre del Paciente'}
                        placeholder={'Juan Pérez'}
                        type={'text'}
                        required={true}
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                    />

                    <InputWhite
                        classNameDiv={''}
                        label={'Fecha'}
                        placeholder={'Seleccionar fecha'}
                        type={'date'}
                        required={true}
                        value={formik.values.fecha}
                        onChange={formik.handleChange}
                    />

                    <Select
                        classNameDiv={''}
                        label={'Hora'}
                        placeholder={'Seleccionar hora'}
                        type={'time'}
                        required={true}
                        value={formik.values.hora}
                        onChange={formik.handleChange}
                    >
                        <option value="">08:00 AM</option>
                        <option value="">09:00 AM</option>
                        <option value="">10:00 AM</option>
                        <option value="">11:00 AM</option>
                        <option value="">12:00 PM</option>
                        <option value="">01:00 PM</option>
                        <option value="">02:00 PM</option>
                        <option value="">03:00 PM</option>
                        <option value="">04:00 PM</option>
                        <option value="">05:00 PM</option>
                        <option value="">06:00 PM</option>
                        <option value="">07:00 PM</option>
                        <option value="">08:00 PM</option>
                        <option value="">09:00 PM</option>
                        <option value="">10:00 PM</option>

                    </Select>

                    <Select
                        label={'Consultorio'}
                        placeholder={'Seleccionar consultorio'}
                        required={true}
                        value={formik.values.consultorio}
                        onChange={formik.handleChange}
                    >
                        <option value="">Consultorio 1</option>
                        <option value="">Consultorio 2</option>
                        <option value="">Consultorio 3</option>
                    </Select>

                    <InputWhite
                        classNameDiv={''}
                        label={'Teléfono de Contacto'}
                        placeholder={'Ej: 123-456-7890'}
                        type={'text'}
                        required={false}
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                    />

                    <div className='col-span-3 grid grid-cols-1 gap-4'>
                        <TextArea
                            label={'Motivo de la Consulta'}
                            placeholder={'Describa brevemente el motivo de su consulta'}
                            value={formik.values.motivoConsulta}
                        />

                        <TextArea
                            className={'h-auto'}
                            label={'Notas Adicionales'}
                            placeholder={'Notas adicionales sobre la cita'}
                            value={formik.values.notasAdicionales}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className='col-span-3 flex justify-center items-center'>
                        <button type='submit' className='gap-4 bg-blue-500 text-white px-4 py-2 rounded-md w-4xl items-center flex justify-center'>
                            <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
                            Agendar Cita
                        </button>
                    </div>
                </CardContent>
            </Card>
        </MainDiv>
    );
}

/* Nombre del Paciente
Juan Pérez
Campo auto-rellenado

Título de la Cita *
Ej: Consulta General
Fecha *
Seleccionar fecha
Hora *
Seleccionar hora

Doctor *
Dr. García - Medicina General

Teléfono de Contacto
Ej: 123-456-7890
Correo Electrónico
ejemplo@correo.com
Seguro Médico
Nombre del seguro médico
Motivo de la Consulta
Describa brevemente el motivo de su consulta
Notas Adicionales
 */
export default CrearCita;