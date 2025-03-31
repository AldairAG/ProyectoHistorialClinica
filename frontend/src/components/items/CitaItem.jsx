/* eslint-disable react/prop-types */
import { Card, Badge } from "../ui/Card";
import { CITA_ESTADOS } from "../../constants/citaEstados.js";

const CitaItem = ({ cita }) => {
    return (
        <Card className={'border-t-6 border-t-blue-500'}>
            <div className="flex items-center justify-between mb-2">
                <h5 className="text-base font-semibold text-gray-700">{cita.nombre}</h5>
                <Badge>
                    <span className={` ${cita.estado === CITA_ESTADOS.FINALIZADA ? 'text-green-500' :
                            cita.estado === CITA_ESTADOS.CANCELADA ? 'text-red-500' :
                                'text-yellow-500'
                        }`}>
                        {cita.estado === CITA_ESTADOS.FINALIZADA && 'Finalizada'}
                        {cita.estado === CITA_ESTADOS.CANCELADA && 'Cancelada'}
                        {cita.estado === CITA_ESTADOS.PENDIENTE && 'Pendiente'}
                    </span>
                </Badge>
            </div>
            <p className="text-sm text-gray-500">Teléfono: {cita.telefono}</p>
            <p className="text-sm text-gray-500">Motivo: {cita.motivo}</p>
            <p className="text-sm text-gray-500">Fecha: {cita.fecha}</p>
            <p className="text-sm text-gray-500">Hora: {cita.hora}</p>

        </Card>
    );
}

export default CitaItem;