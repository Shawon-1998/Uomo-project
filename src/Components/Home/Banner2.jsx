import Image from "../common/Image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BannerData } from "../../Api/bannerData";

function Banner2() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper" >
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