import React from 'react'

const Button = ({ children, className, onClick }) => {
    return (

        <div>
            <button onClick={onClick} className={`${className} bg-primary-black text-primary-white  block w-full  px-23.75 cursor-pointer max-w-70 h-15 font-medium  linear text-sm duration-300`}>{children}</button>
        </div>

    )
}

export default Button
