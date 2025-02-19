import DoctorCardHome from "../../components/cards/DoctorCardHome"

const Home = () => {

    return (
        <div className="flex flex-col gap-4">
            <DoctorCardHome />

            <div className="border rounded-md h-15 flex justify-around items-center">
                <button className="bg-blue-200 h-10 rounded-md px-4">agregar nuevo paciente</button>
                <button className="bg-blue-200 h-10 rounded-md px-4">agregar nueva consulta</button>
            </div>

            <div className="border rounded-md h-36">
                <label>En este espacio pueden ir distintas cards de informacion relavante
                    algunas pueden ser nuevos pacientes, una grafica de las consultas por genero u hombres,mujeres y ni;os
                    grafica de tipos de enfermedad que se han presentado este mes,etc
                </label>
            </div>
        </div>
    )
}

export default Home