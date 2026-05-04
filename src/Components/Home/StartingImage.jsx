import React from 'react'
import Container from '../Ui/Container'
import Image from '../common/Image'
import startingImage from '../../assests/images/StartingImage.png'
import { Link } from 'react-router'

const StartingImage = () => {
    return (
        <section>
            <Container>
                <div className='flex gap-7.5'>
                    <div className='w-2/4 relative font-jost font-medium  group'>
                        <Image src={startingImage} className='h-99.5 opacity-' />
                        <div className='absolute z-50 left-12.5 bottom-12.5 text-primary-black group-hover:text-primary-white'>
                            <h3 className='text-lg'>STARTING AT $19</h3>
                            <h2 className='mt-2 mb-3.75 text-[26px]'>Women’s T-Shirts</h2>
                            <Link className="font-jost text-sm font-medium  after:bg-primary-white relative leading-6 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-[50%] group-hover:text-primary-white" to='#' >SHOP NOW</Link>
                        </div>
                        <div className='absolute z-10 top-0 left-0 w-full h-full group-hover:bg-primary-red/85 transition-all duration-300 linear' />
                    </div>
                    <div className='w-2/4 relative font-jost font-medium  group'>
                        <Image src={startingImage} className='h-99.5 opacity-' />
                        <div className='absolute z-50 left-12.5 bottom-12.5 text-primary-black group-hover:text-primary-white'>
                            <h3 className='text-lg'>STARTING AT $19</h3>
                            <h2 className='mt-2 mb-3.75 text-[26px]'>Women’s T-Shirts</h2>
                            <Link className="font-jost text-sm font-medium  after:bg-primary-white relative leading-6 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-[50%] group-hover:text-primary-white" to='#' >SHOP NOW</Link>
                        </div>
                        <div className='absolute z-10 top-0 left-0 w-full h-full group-hover:bg-primary-red/85 transition-all duration-300 linear' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default StartingImage
