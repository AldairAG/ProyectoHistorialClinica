import logo from '../../assets/examen.png'
import BotonMenu from './BotonMenu'
const HeaderNav = () => {
    return (
        <header className='bg-blue-900 h-16 flex px-6 items-center print:hidden' >
            <BotonMenu/>
            <div className='flex items-center gap-1.5'>
                <h1 className='text-3xl font-extrabold text-blue-50'>MediNote</h1>
                <img src={logo} alt="logo" className='h-10 bg'/>
            </div>
        </header>
    )
}

export default HeaderNav