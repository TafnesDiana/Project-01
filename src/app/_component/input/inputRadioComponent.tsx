import React, { ChangeEvent } from 'react';

// Interface para as props do componente
interface InputComponentProps {
    type: string; 
    value: string; 
    placeholder?: string; 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked:boolean;
    label?: string; 
    name?: string; 
    id?: string;
    className?: string; 
}



// Componente funcional `InputComponent`
const InputComponent: React.FC<InputComponentProps> = ({type, value, placeholder, onChange, label, checked, name, id, className,}) => {
    return (
        <div className={`text-[27px] ${className || ''}`}>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                checked={checked}
                name={name}
                id={id}
            />
            {label && <label htmlFor={id || name}>{label}</label>}
        </div>
    );
};

export default InputComponent;