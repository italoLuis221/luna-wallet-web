'use client'

import { MouseEventHandler, ReactNode } from 'react';

interface buttonProps {
    type: 'button' | 'submit';
    children: ReactNode;
    onClick?: MouseEventHandler
}

const Button: React.FC<buttonProps>= ({type = 'button', children, onClick}) =>{

    return (
        <button 
            type={type} 
            onClick={onClick} 
            className='bg-luna text-white text-base px-5 py-2 w-full font-medium rounded-md cursor-pointer hover:bg-black focus:border-2 focus:border-luna'
        >
            {children}
        </button>
    )
}

export default Button;