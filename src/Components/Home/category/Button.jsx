import React from 'react'

const Button = ({ children, className, onClick }) => {
    return (

        <div>
            <button onClick={onClick} className={`${className} bg-primary-black text-primary-white  block  px-13.75 lg:px-23.75 cursor-pointer max-w-70 lg:h-15 h-12 font-medium  linear text-sm duration-300`}>{children}</button>
        </div>

    )
}

export default Button
