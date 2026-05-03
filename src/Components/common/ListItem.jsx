import React from 'react'

const ListItem = ({ className, onClick, children }) => {
    return (
        <div>
            <li onClick={onClick} className={`${className} cursor-pointer after:bg-primary-black relative  leading-6  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-[50%]`}>
                {children}
            </li>
        </div>
    )
}

export default ListItem
