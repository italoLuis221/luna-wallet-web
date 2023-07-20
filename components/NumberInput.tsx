'use client';

import { ChangeEventHandler, forwardRef, useId} from "react";
import { UseFormRegister } from "react-hook-form";
import { NumericFormat } from 'react-number-format';
import { PatternFormat } from 'react-number-format';

interface NumberInputProps {
    name:string;
    placeholder?: string;
    label?: string;
    col?: string;
    isMoney?: boolean;
    value?: string;
    mask?: string;
    disabled?:boolean
    onChange?: ChangeEventHandler;
};

const NumberInput: React.ForwardRefRenderFunction<HTMLInputElement, NumberInputProps> = ({
    name,
    placeholder,
    label,
    col,
    isMoney,
    value,
    mask,
    disabled = false,
    onChange

}, ref) =>{

    const inputId = useId();

    const handleValueChange = (value: any) => {
        if(onChange) {
            onChange(value);
        }
    }


    return (
        <div className={col}>
            {label && 
                <label htmlFor={inputId} className="block text-base">
                    {label}
                </label>
            }
            
            {
                mask
                ?
                <PatternFormat 
                    id={inputId}
                    value={value} 
                    name={name}
                    placeholder={placeholder}
                    className="bg-gray-50 border border-gray-300 text-black text-base w-full rounded-md p-1.5"
                    onValueChange={(values, source)  => {handleValueChange(source.event)}}
                    format={mask}
                    disabled={disabled}
                    getInputRef={ref}
                    
                />
                : isMoney
                ?
                <NumericFormat 
                    id={inputId}
                    value={value} 
                    name={name}
                    placeholder={placeholder}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    decimalSeparator=","
                    thousandSeparator="."
                    prefix="R$ "
                    className="bg-gray-50 border border-gray-300 text-black text-base w-full rounded-md p-1.5"
                    onValueChange={(values, source)  => {handleValueChange(source.event)}}
                    disabled={disabled}
                    getInputRef={ref}
                />
                :
                <NumericFormat 
                    id={inputId}
                    value={value} 
                    name={name}                
                    placeholder={placeholder}
                    className="bg-gray-50 border border-gray-300 text-black text-base w-full rounded-md p-1.5"
                    onValueChange={(values, source)  => {handleValueChange(source.event)}}
                    disabled={disabled}
                    getInputRef={ref}
                    
                />
            }
            
        </div>
    )
}

export default forwardRef<HTMLInputElement, NumberInputProps>(NumberInput);;