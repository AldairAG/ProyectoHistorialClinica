/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const DateInput = ({ label, id, name, obligatorio, onChange, value }) => {
  // Extraer valores de la fecha si ya existe
  const [date, setDate] = useState({
    day: value ? value.split("-")[2] : "",
    month: value ? value.split("-")[1] : "",
    year: value ? value.split("-")[0] : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newDate = { ...date, [name]: value };

    setDate(newDate);

    // Formatear la fecha en "YYYY-MM-DD"
    const formattedDate = `${newDate.year || "0000"}-${newDate.month.padStart(2, "0") || "00"}-${newDate.day.padStart(2, "0") || "00"}`;

    // Enviar la fecha al formik.handleChange
    onChange({ target: { name, value: formattedDate } });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 font-medium text-gray-700">
        {label} {obligatorio && <span className="text-red-500">*</span>}
      </label>
      <div className="flex space-x-2">
        <input
          type="number"
          name="day"
          placeholder="Día"
          min="1"
          max="31"
          className="border rounded px-2 py-1 w-16 text-center"
          value={date.day}
          onChange={handleChange}
        />
        <input
          type="number"
          name="month"
          placeholder="Mes"
          min="1"
          max="12"
          className="border rounded px-2 py-1 w-16 text-center"
          value={date.month}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Año"
          min="1900"
          max="2100"
          className="border rounded px-2 py-1 w-24 text-center"
          value={date.year}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DateInput;
