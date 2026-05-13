import React from 'react'
import { useLocation } from 'react-router'
import Container from '../Ui/Container'

const BreadCrumbs = ({ className }) => {
    let location = useLocation()
    let pathName = location.pathname.split('/')[1]
    //  console.log(pathName)
    return (
        <>
            <div className={`font-jost font-medium ${className} text-sm  flex gap-2 capitalize`}>
                <span className='hover:text-primary-red '>Home</span>
                <span>/</span>
                <span >{pathName}</span>
            </div>
        </>
    )
}

export default BreadCrumbs