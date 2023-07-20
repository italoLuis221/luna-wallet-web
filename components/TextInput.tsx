'use client';

import { ChangeEventHandler, forwardRef, useId } from "react";
import { FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps {
    name: string;         
    placeholder?: string;
    label?: string;
    col?: string;
    value?: string;
    type?: 'text' | "email" |  'password';
    disabled?: boolean;
    onChange?: ChangeEventHandler;
};


const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, TextInputProps>= ({
    name,
    placeholder = '',
    label,
    col,
    value,
    type = 'text',
    disabled = false,
    onChange
}, ref) =>{
    
    const inputId = useId();

    return (
        <div className={col}>
            {label && 
                <label htmlFor={inputId} className="block text-base">
                    {label}
                </label>
            }
            <input 
                name={name}
                type={type}
                value={value}
                id={inputId} 
                className="bg-gray-50 border border-gray-300 text-black text-base w-full rounded-md p-1.5"  
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                ref={ref}
            >
            </input>
        </div>
    )
}

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);