import React, { useState } from 'react'
import Container from '../Ui/Container'
import { Link } from 'react-router'
import Countdown from 'react-countdown';
import Image from '../common/Image'
import fragrance from '../../assests/images/StartingImage.png'
const SpringCollection = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {

        return (

            < div className="grid grid-flow-col gap-5 text-center text-primary-black auto-cols-max font-jost count " >
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        {days}
                    </span>
                    DAYS
                </div>
                <div className="flex flex-col ">
                    <span className="countdown font-mono text-5xl">
                        {hours}
                    </span>
                    HOURS
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        {minutes}
                    </span>
                    MIN
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        {seconds}
                    </span>
                    SEC
                </div>
            </div >
        )

    };

    return (

        <section className='bg-[#EBEBEB] mb-25'>
            <Container>
                <main className=' flex justify-between items-center'>
                    <div className='pt-52.25 pb-9'>
                        <div className='flex gap-5 items-center'>
                            <div className='w-10 h-0.5 bg-secondary-red' />
                            <p className='text-secondary-red font-jost font-medium text-sm'>DEAL OF THE WEEK</p>
                        </div>
                        <div>
                            <h1 className='font-jost text-[70px] text-primary-black uppercase mt-2.25 mb-2.75'><span className='font-bold'>Spring</span> Collection</h1>
                        </div>
                        <div className="font-jost text-sm font-medium mb-30.25 "  >
                            <Link className='hoverItems '>SHOP NOW</Link>
                        </div>
                        <Countdown
                            date={Date.now() + (3600000 * 24 * 16)}
                            renderer={renderer}
                        />
                    </div>
                    <Image src={fragrance} alt="frarance" className="w-106.5 h-135.75   " />
                </main>
            </Container>
        </section>

    )
}

export default SpringCollection
