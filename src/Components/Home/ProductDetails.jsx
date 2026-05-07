import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Container from '../Ui/Container';
import Image from '../common/Image';
import { catergoryItem } from '../../Api/categoryData';

const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [value, setValue] = useState(0)
    const handleProductDecrement = () => {
        if (value > 0) {
            setValue(value - 1)
        }

    }
    const handleProductIncrement = () => {
        setValue(value + 1)
    }


    return (
        <>
            <section>
                <Container>
                    <div className='grid grid-cols-2'>
                        <div>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                                className="w-125! h-100!"
                            >
                                {catergoryItem?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item.image}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>


                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                                className="w-125! h-25!"
                            >
                                {catergoryItem?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item.image}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                        <div className='font-jost'>
                            <h2 className='max-w-104.5 text-[22px] text-primary-black'>
                                Lightweight Puffer Jacket With a Hood
                            </h2>
                            <h2 className='mt-1.75 mb-6.25 font-medium 
                            text-[22px] text-primary-black'>
                                $449
                            </h2 >
                            <p className='max-w-135 text-primary-black'>Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.</p>
                            <div className='flex items-center gap-28.75'>
                                <div className='flex pe-5.25 ps-4.25 items-center max-w-29 text-secondary-grey h-15 border border-[#E4E4E4] my-8.75 font-jost'>
                                    <button onClick={handleProductDecrement} className='cursor-pointer'>-</button>
                                    <span className='me-4.25 ms-6.5 w-2'>{value}</span>
                                    <button className='cursor-pointer' onClick={handleProductIncrement}>+</button>
                                </div>
                                <button className=' bg-primary-black text-primary-white  block w-full  px-23.75 cursor-pointer max-w-70 h-15 font-medium  linear text-sm duration-300'> ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ProductDetails;