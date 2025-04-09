import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge"

// eslint-disable-next-line react/prop-types
const TextArea = ({ label, className, ...props }) => {

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const el = textareaRef.current;
        if (el) {
            el.style.height = "auto"; // reset height
            el.style.height = el.scrollHeight + "px"; // set to scroll height
        }
    };

    useEffect(() => {
        adjustHeight(); // ajustar en carga inicial
    }, []);

    const handleInput = () => {
        adjustHeight();
        // eslint-disable-next-line react/prop-types
        if (props.onInput) props.onInput(); // si hay un handler externo
    };

    return (
        <div>
            <label
                className="block mb-2 text-sm font-sans font-semibold text-gray-500">
                {label}
            </label>
            <textarea {...props}  ref={textareaRef}
                onInput={handleInput}
                className={twMerge("block resize-none overflow-hidden p-2.5 w-full min-h-30 text-sm text-gray-900 bg-gray-50 rounded-lg border " +
                    "border-gray-300 focus:ring-blue-500 focus:border-blue-500 ", className)}></textarea>
        </div>
    )
}

export default TextArea