/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/outline";



const Select = ({ obligatorio, label, id, children, classNameDiv, classNameSelect, ...props }) => {
    return (
        <div className={classNameDiv}>
            <label htmlFor={id} className="block mb-2 text-sm font-sans font-semibold text-gray-500">
                {label}
                {obligatorio &&
                    <span className=" text-red-400"> *</span>}
            </label>
            <select id={id}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 ${classNameSelect}`}
                {...props}
            >
                {children}
            </select>
        </div>
    )
}

export const SelectBox = ({ options, ...props }) => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div className="w-full rounded-md border-0">
            <Listbox
                value={selected} onChange={setSelected}
                {...props}
            >
                <div className="relative">
                    <ListboxButton className="w-full flex bg-white border rounded-md 
                        py-2 px-4 text-left items-center justify-between border-[#97cbdc]/50 
                        focus:border-[#018abd] focus:ring-[#018abd]/30 
                        ring-offset-background file:border-0 file:bg-transparent 
                        file:text-sm file:font-medium file:text-foreground 
                        placeholder:text-muted-foreground focus-visible:outline-none 
                        focus-visible:ring-2 focus-visible:ring-ring 
                        focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                        disabled:opacity-50 text-sm">
                        {selected}
                        <ChevronDownIcon className="h-4 w-4 text-gray-500 stroke-3" />
                    </ListboxButton>
                    <ListboxOptions className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10 p-1">
                        {options.map((option, index) => (
                            <ListboxOption
                                key={index}
                                value={option}
                                className="cursor-pointer hover:bg-blue-100 px-4 py-2
                                    rounded-md text-sm"
                            >
                                {option}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    )
}

export default Select