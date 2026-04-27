import React from 'react'

const ListItem = ({ className, onClick, children }) => {
    return (
        <div>
            <li onClick={onClick} className={className}>
                {children}
            </li>
        </div>
    )
}

export default ListItem
