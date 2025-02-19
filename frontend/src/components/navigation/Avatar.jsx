import userProfile from '../../assets/usuario.png'
import { useUser } from '../../hooks/useUser'

const Avatar = () => {
     const {menuBar } = useUser();

    return (
        <div className='h-22 flex items-center py-1.5 pe-6 ps-3.5'>
            <img
                id="avatarButton"
                type="button"
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 cursor-pointer bg-gray-200
                            shadow-[0px_4px_6px_rgba(0,0,0,0.3)]"
                src={userProfile}/>

            <div className={('flex flex-col ms-4 ')
                + (!menuBar&& 'hidden ')
            }>
                <label className='text-lg font-bold'>Juan perez</label>
                <label className='text-xs'> Administrar perfil</label>
            </div>
                
        </div>

    )
}

export default Avatar