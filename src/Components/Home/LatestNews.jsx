import React, { useRef, useState } from 'react';
import Container from '../Ui/Container'
import CoolCard from './category/NewsCard'

const LatestNews = () => {
    return (
        <section className='mt-14 mb-24'>
            <Container>
                <h2 className='text-center font-jost text-[35px] text-primary-black mb-8.25'>LATEST <span className='font-bold'>NEWS</span></h2>
                <div className='flex justify-between'>

                    <CoolCard
                        price='8'
                        time='month'
                        quality='basic'
                    />
                    <CoolCard
                        price='40'
                        time='half yearly'
                        quality='mid'
                    />
                    <CoolCard
                        price='80'
                        time='yearly'
                        quality='premium'
                    />
                </div>
            </Container>
        </section>
    )
}

export default LatestNews
