/* eslint-disable react/prop-types */
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

export const Input = ({ label, id, ...inputProps }) => {
    return (
        <div>
            <label htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 ">
                {label}
            </label>
            <input
                id={id}
                {...inputProps}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
        </div>
    )

}


export const InputBlue = ({ label,className, id, icon: Icon, required, type = "text", variant = "default", ...inputProps }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const isPasswordField = type === "password";
    const showIcon = variant !== "no-icon";

    return (
        <div className={twMerge("space-y-2",className)}>
            <label htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                    peer-disabled:opacity-70 text-[#004581]">
                {label} {required &&
                    <span className="text-red-500">*</span>
                }
            </label>
            <div className="relative">
                {showIcon && Icon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Icon className="w-5 h-5 text-blue-500" />
                    </div>
                )}
                <input
                    id={id}
                    {...inputProps}
                    required={required}
                    type={isPasswordField && showPassword ? "text" : type}
                    className={`flex h-10 w-full rounded-md border px-3 py-2  ring-offset-background 
                        file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground 
                        placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
                        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                        disabled:opacity-50 text-sm ${showIcon && Icon ? 'pl-10' : ''} border-[#97cbdc]/50 
                        focus:border-[#018abd] focus:ring-[#018abd]/30 bg-white`}
                />
                {isPasswordField && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500"
                    >
                        {showPassword ? 
                            <EyeIcon className="h-5 w-5 text-blue-500" />
                            : <EyeSlashIcon className="h-5 w-5 text-blue-500" />
                        }
                    </button>
                )}
            </div>
        </div>
    );
};

