import { twMerge } from 'tailwind-merge';
import logo from '../../assets/logo.png';

const Logo = (className,classNameImg) => {
    return (
        <div className={twMerge("flex items-center",className)}>
            <img
                src={logo}	
                alt="Logo"
                className={twMerge("h-10 w-30 mr-2",classNameImg)}
            />
        </div>
    );
}

export default Logo;