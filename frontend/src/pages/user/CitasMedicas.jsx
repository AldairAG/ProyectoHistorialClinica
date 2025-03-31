import CitaItem from "../../components/items/CitaItem";
import { Card, CardDescription, CardHeader } from "../../components/ui/Card";
import InputWhite from "../../components/ui/InputWhite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
import { es } from 'date-fns/locale'; // Importa el locale de español
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Importa el estilo del calendario
import { useState } from "react";
import { format } from 'date-fns'; // Importa la función format de date-fns

// Update the mock appointments to use consistent date format
const mockAppointments = [
    {
        id: 1,
        nombre: "Juan Pérez",
        telefono: "555-123-4567",
        motivo: "Consulta general",
        fecha: "2025-04-15",
        hora: "10:00",
        estado: 'Pendiente',
    },
    {
        id: 2,
        nombre: "María López",
        telefono: "555-987-6543",
        motivo: "Seguimiento",
        fecha: "2025-04-15",
        hora: "11:30",
        estado: 'Pendiente',
    },
    {
        id: 3,
        nombre: "Carlos Rodríguez",
        telefono: "555-456-7890",
        motivo: "Primera consulta",
        fecha: "2025-04-15",
        hora: "16:00",
        estado: 'Pendiente',
    },
    {
        id: 4,
        nombre: "Ana Martínez",
        telefono: "555-234-5678",
        motivo: "Revisión",
        fecha: "2025-04-16",
        hora: "09:30",
        estado: 'Pendiente',
    },
    {
        id: 5,
        nombre: "Roberto Gómez",
        telefono: "555-876-5432",
        motivo: "Dolor de espalda",
        fecha: "2025-04-16",
        hora: "12:00",
        estado: 'Pendiente',
    },
    {
        id: 6,
        nombre: "Laura Sánchez",
        telefono: "555-111-2222",
        motivo: "Dolor de cabeza",
        fecha: "2025-04-01",
        hora: "09:00",
        estado: 'Pendiente',
    },
    {
        id: 7,
        nombre: "Pedro Ramírez",
        telefono: "555-333-4444",
        motivo: "Consulta dermatológica",
        fecha: "2025-04-02",
        hora: "10:30",
        estado: 'Finalizada',
    },
    {
        id: 8,
        nombre: "Sofía Torres",
        telefono: "555-555-6666",
        motivo: "Control de presión",
        fecha: "2025-04-03",
        hora: "15:00",
        estado: 'Cancelada',
    },
]

const CitasMedicas = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <main>
            <Card>
                <CardHeader>Panel de citas medicas</CardHeader>
                <CardDescription>Las citas más cercanas en su agenda</CardDescription>
            </Card>

            <Card>
                <CardHeader>Citas Proximas</CardHeader>
                <CardDescription className={'mb-4'}>Las citas más cercanas en su agenda</CardDescription>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockAppointments.map((cita, index) => (
                        <div key={index}>
                            <CitaItem cita={cita} />
                        </div>
                    ))}
                </div>
            </Card>

            <div>
                <Tabs defaultValue={'citas'}>
                    <TabsList className="mb-4">
                        <TabsTrigger value="citas">Calendario</TabsTrigger>
                        <TabsTrigger value="busqueda">Buscar</TabsTrigger>
                    </TabsList>

                    <TabsContent value="citas">
                        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                            <Card className={'space-y-2'}>
                                <CardHeader>Calendario</CardHeader>
                                <div>
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        locale={es} />
                                </div>
                            </Card>

                            <Card>
                                <CardHeader>Citas para {format(selectedDate, "PPP", { locale: es })}</CardHeader>

                                <div>

                                    <p className="text-muted-foreground">No hay citas programadas para esta fecha.</p>

                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="busqueda">
                        <Card>
                            <CardHeader>
                                <CardHeader>Buscar Paciente</CardHeader>
                                <CardDescription>Busque por nombre o número telefónico</CardDescription>
                            </CardHeader>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="search">Buscar</label>
                                    <InputWhite
                                        id="search"
                                        placeholder="Nombre o teléfono"

                                    />
                                </div>


                                <p className="text-muted-foreground">No se encontraron resultados.</p>


                            </div>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )

}

export default CitasMedicas;