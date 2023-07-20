'use client'

import { ChangeEventHandler, ReactEventHandler, forwardRef, useId } from "react";



interface DateInputProps {
    name: string;
    label?: string;
    value?: any;
    placeholder?:string;
    col?:string;
    disabled?:boolean
    onChange?: ChangeEventHandler;
}

const DateInput: React.ForwardRefRenderFunction<HTMLInputElement, DateInputProps>= ({
    name,
    label,
    value,
    placeholder,
    col,
    disabled = false,
    onChange
},ref) => {
    const inputId = useId();

    return (
        <div className={col}>
            {label && 
                <label htmlFor="inputId" className="block text-base">{label}</label>
            }

            <input 
                name={name}
                type="date"
                value={value}
                id={inputId} 
                disabled={disabled}
                className="bg-gray-50 border border-gray-300 text-black text-base w-full rounded-md p-1.5"  
                onChange={onChange} 
                placeholder={placeholder}
                ref={ref}
            >
            </input>
        </div>
    )
}

export default forwardRef<HTMLInputElement, DateInputProps>(DateInput);