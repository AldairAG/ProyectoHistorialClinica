import AntecedentesFamCard from '../cards/AntecedentesFamCard'
import AntecedentesPatCard from '../cards/AntecedentesPatCard'
import HospitalizacionesPrevCard from '../cards/HospitalizacionesPrevCard'
import EnfermedadesCronCard from '../cards/EnfermedadesCronCard'

const HistoriaClinicaCard = () => {
    return (
        <div className="flex flex-col gap-4">
            <AntecedentesFamCard/>
            
            <AntecedentesPatCard/>
            <HospitalizacionesPrevCard/>
            <EnfermedadesCronCard/>
        </div>
    )
}

export default HistoriaClinicaCard;