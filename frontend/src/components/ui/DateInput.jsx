/* eslint-disable react/prop-types */
import { useState } from "react";

const DateInput = ({ label, field, form, placeholder }) => {
    const [value, setValue] = useState(field?.value || ""); // Inicializa con el valor de Formik

    const handleChange = (e) => {
        let input = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
        if (input.length > 8) input = input.slice(0, 8); // Máximo 8 dígitos

        let formatted = "";
        if (input.length > 0) formatted = input.slice(0, 2);
        if (input.length > 2) formatted += "-" + input.slice(2, 4);
        if (input.length > 4) formatted += "-" + input.slice(4, 8);

        setValue(formatted);
        form.setFieldValue(field.name, formatted); // Actualiza el valor en Formik
    };

    return (
        <div>
            <label className="block mb-2 text-sm font-sans font-semibold text-gray-500" htmlFor="dateInput">
                {label}
                <span className=" text-red-400"> *</span>
            </label>
            <input
                id="dateInput"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder || "DD-MM-YYYY"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm
                px-3 py-1.5 focus:ring-blue-500 focus:border-blue-500 outline-none
                focus:shadow-lg w-full"
            />
        </div>
    );
}

export default DateInput;
