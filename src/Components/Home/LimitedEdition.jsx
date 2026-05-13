import React, { useRef, useState } from 'react';
import Container from '../Ui/Container'
import { useSelector } from 'react-redux'
import Products from '../common/Products'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const LimitedEdition = ({ name = "LIMITED", name2 = "EDITION", className }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const getProduct = useSelector((state) => state.getProduct.value)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <>
            <section className={`${className}`}>
                <Container>
                    <h2 className='text-center font-jost text-[35px] text-primary-black mb-8.25'>{name} <span className='font-bold'>{name2}</span></h2>
                    <Swiper
                        navigation={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1170: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {
                            getProduct.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Products item={item} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </Container>
            </section>
        </>
    )
}



export default LimitedEdition
