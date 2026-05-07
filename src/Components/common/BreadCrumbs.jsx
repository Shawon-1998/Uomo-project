import React from 'react'
import { useLocation } from 'react-router'

const BreadCrumbs = ({ className }) => {
    let location = useLocation()
    let pathName = location.pathname.split('/')[1]
    //  console.log(pathName)
    return (
        <>
            <div className={`${className} my-20 text-sm font-pop flex gap-2`}>
                <span>Home</span>
                <span>/</span>
                <span>{pathName}</span>
            </div>
        </>
    )
}

export default BreadCrumbs