import React, { useRef, useState } from 'react';
import { marqueeData } from '../../Api/marquee'
import Image from '../common/Image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Marquee = () => {
    return (
        <section className='my-25.75'>
            <h2 className='text-center text-primary-black font-jost text-[35px] mb-8.25'>@UOMO</h2>


            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={3000}
                modules={[Autoplay]}

            >
                {marqueeData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            className="h-30! w-auto object-contain mx-auto"
                            src={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default Marquee
