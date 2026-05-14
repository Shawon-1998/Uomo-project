import React from 'react'


const ShortAndView = ({ filteredProducts }) => {
    return (
        <section>

            <div className='flex justify-between lg:gap-15.5 lg:mb-10 gap-33.5 mb-5 items-center'>
                <div className='after:bg-primary-black relative leading-6 after:absolute after:bottom-0 after:left-0 after:h-0.5   after:content-[""] after:w-full'>
                    <select className='text-primary-black font-jost font-medium! text-sm border-none outline-none lg:pe-6 pe-2 uppercase' name="" id="">
                        <option className='text-primary-black!'
                            value="">DEFAULT SORT</option>
                        <option className='hover:text-primary-black!' value="">Price</option>
                        <option value="">Women</option>
                        <option value="">Children</option>
                    </select>
                </div>
                <div className='font-jost font-medium text-sm flex items-center gap-2.5  hover:text-red-500'>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.44444 9.33333H8.55556V7.77778H5.44444V9.33333ZM0 0V1.55556H14V0H0ZM2.33333 5.44444H11.6667V3.88889H2.33333V5.44444Z" fill="currentColor" />
                    </svg>
                    <h3 >FILTER</h3>
                </div>
            </div>

        </section>
    )
}

export default ShortAndView
