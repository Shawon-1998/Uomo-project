
import Image from "../common/Image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import { BannerData } from "../../Api/bannerData";

const Banner2 = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    BannerData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Image
                                src={item.banner}
                                alt={item.alt}
                                className="w-full"
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    );
}


export default Banner2;