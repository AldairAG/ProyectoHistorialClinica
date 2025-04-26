import { useEffect, useState } from 'react';
import logo from '../../assets/examen.png';
import BotonMenu from './BotonMenu';
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const HeaderNav = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <header className='bg-blue-900 h-16 flex justify-between items-center px-6 print:hidden'>
            <div className="flex items-center gap-3">
                <BotonMenu />
                <div className='flex items-center gap-1.5'>
                    <h1 className='text-3xl font-extrabold text-blue-50'>MediNote</h1>
                    <img src={logo} alt="logo" className='h-10' />
                </div>
            </div>

            <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-blue-800 transition-colors">
                {darkMode ? (
                    <SunIcon className="h-6 w-6 text-yellow-400" />
                ) : (
                    <MoonIcon className="h-6 w-6 text-gray-100" />
                )}
            </button>
        </header>
    )
}

export default HeaderNav;
