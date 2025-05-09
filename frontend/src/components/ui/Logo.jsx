/* eslint-disable react/prop-types */
import { twMerge } from 'tailwind-merge';
import logo from '../../assets/logo.png';

const onlyLogoClass = 'hidden';
const logoClass = 'text-white font-semibold';

// Variant with spans on separate lines
const Logo = (className, classNameImg, variant = 'default') => {
    return (
        <div className={twMerge("grid grid-cols-2", className)}>
            <img
                src={logo}
                alt="Logo"
                className={twMerge("h-9 w-10 mr-2 row-span-2", classNameImg)}
            />
            <span className={variant === 'onlyLogo' ? onlyLogoClass : logoClass}>Medi</span>
            <span className={variant === 'onlyLogo' ? onlyLogoClass : logoClass}>Note</span>
        </div>
    );
};

// Variant with spans on the same line
export const LogoInline = ({ className, classNameImg, classNameText, navBar = false, isOpen = true }) => {
    return (
        <div className={twMerge("flex items-center", className)}>
            <img
                src={logo}
                alt="Logo"
                className={twMerge("h-9 w-10 mr-2", classNameImg)}
            />
            {(navBar && isOpen) || !navBar ? (
                <>
                    <span className={twMerge("text-white font-semibold", classNameText)}>Medi</span>
                    <span className={twMerge("text-white font-semibold ml-1", classNameText)}>Note</span>
                </>
            ) : null}
        </div>
    );
};

export default Logo;