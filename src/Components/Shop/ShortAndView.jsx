import React from 'react'
import SideBar from './SideBar'


const ShortAndView = ({ filteredProducts }) => {
    return (
        <section>

            <div className='flex justify-between lg:gap-15.5 lg:mb-10 gap-39.5 mb-5 items-center'>
                <div className='after:bg-primary-black relative leading-6 after:absolute after:bottom-0 after:left-0 after:h-0.5   after:content-[""] after:w-full'>
                    <select className='text-primary-black font-jost font-medium! text-sm border-none outline-none lg:pe-6 pe-2 uppercase' name="" id="">
                        <option className='text-primary-black!'
                            value="">DEFAULT SORT</option>
                        <option className='hover:text-primary-black!' value="">Price</option>
                        <option value="">Women</option>
                        <option value="">Children</option>
                    </select>
                </div>

                <SideBar />

            </div>

        </section>
    )
}

export default ShortAndView
