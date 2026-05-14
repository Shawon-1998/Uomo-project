import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Container from '../Components/Ui/Container';
import Image from '../Components/common/Image';
import { catergoryItem } from '../Api/categoryData';
import BreadCrumbs from '../Components/common/BreadCrumbs';
import { useParams } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';
import reviewsImg from '../assests/images/reviews.png'
import { Rate } from 'antd';
import ProductDescription from '../Components/ProductDetails/ProductDescription';
import Button from '../Components/Home/category/Button';
import LimitedEdition from '../Components/Home/LimitedEdition';

const ProductDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [value, setValue] = useState(0)
    const [activeTab, setActiveTab] = useState("")
    // const [products, setProducts] = useState([])
    // const [productImage, setProductImg] = useState([])
    const { id } = useParams();
    const getProduct = useSelector((state) => state.getProduct.value)
    const singleProduct = getProduct?.find(
        (item) => item.id == id
    );
    // async function data() {
    //     await axios.get(`https://dummyjson.com/products/${id}`)
    //         .then((res) => {
    //             // setProducts(res.data)
    //             // setLoading(0)
    //             setProductImg(res.data.images)
    //         })
    // }
    // useEffect(() => {
    //     data()
    // }, [])

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
            <section className='mt-20'>
                <Container>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                        <div>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}

                                spaceBetween={10}
                                navigation={true}
                                loop={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                                className="lg:w-125! w-80! lg:h-130! h-85!"
                            >
                                {singleProduct?.images?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image className='cursor-pointer  border w-full border-primary-black/40 p-3 rounded-2xl' src={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                                className="lg:w-125! w-80! max-h-30! "
                            >
                                {singleProduct?.images?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image className='cursor-pointer border border-primary-black/40 p-3 rounded-2xl ' src={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                        <div className='font-jost'>
                            <BreadCrumbs className='mt-5 l' />
                            <h2 className='max-w-104.5 text-[22px] text-primary-black mt-10'>
                                {singleProduct.title}
                            </h2>
                            <h2 className='mt-1.75 mb-6.25 font-medium 
                    text-[22px] text-primary-black'>
                                ${singleProduct.price}
                            </h2 >
                            <p className='max-w-135 text-primary-black'>{singleProduct.description}</p>
                            <div className='flex items-center lg:gap-28.75 gap-10'>
                                <div className='flex pe-5.25 ps-4.25 items-center max-w-29 text-secondary-grey h-15 border border-[#E4E4E4] my-8.75 font-jost'>
                                    <button onClick={handleProductDecrement} className='cursor-pointer'>-</button>
                                    <span className='me-4.25 ms-6.5 w-2'>{value}</span>
                                    <button className='cursor-pointer' onClick={handleProductIncrement}>+</button>
                                </div>
                                <Button>ADD TO CART</Button>
                            </div>
                            <div className="flex gap-7.75 items-center">
                                <div className='font-jost text-[13px] font-medium flex items-center gap-2.5'>
                                    <button>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath={`url(#clip0_)`}>
                                                <path d="M14.7145 2.64647C12.9744 0.906815 10.1436 0.906815 8.40393 2.64647L7.99986 3.0503L7.59603 2.64647C5.85637 0.906579 3.02531 0.906579 1.28565 2.64647C-0.418689 4.35081 -0.429756 7.05236 1.25998 8.93071C2.80114 10.6433 7.34643 14.3432 7.53928 14.4998C7.6702 14.6063 7.82773 14.6581 7.98432 14.6581C7.9895 14.6581 7.99468 14.6581 7.99963 14.6578C8.16163 14.6654 8.32481 14.6098 8.45997 14.4998C8.65282 14.3432 13.1986 10.6433 14.7402 8.93048C16.4297 7.05236 16.4186 4.35081 14.7145 2.64647ZM13.69 7.98554C12.4884 9.32042 9.18546 12.0735 7.99963 13.0505C6.8138 12.0738 3.51155 9.32089 2.31018 7.98577C1.13142 6.67561 1.12035 4.80974 2.28452 3.64557C2.87908 3.05125 3.6599 2.75385 4.44072 2.75385C5.22154 2.75385 6.00236 3.05101 6.59693 3.64557L7.48512 4.53377C7.59085 4.6395 7.72412 4.7026 7.86399 4.72474C8.09099 4.77348 8.33729 4.71014 8.51389 4.53401L9.40256 3.64557C10.5919 2.45668 12.5266 2.45692 13.7152 3.64557C14.8794 4.80974 14.8683 6.67561 13.69 7.98554Z" fill="#222222" />
                                            </g>
                                            <defs>
                                                <clipPath id={`clip0_`}>
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <span className='inline-block leading-6 hoverItems'>ADD TO WISHLIST</span>
                                </div>
                                <div className='font-jost text-[13px] font-medium flex items-center gap-2.5'>
                                    <button>
                                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8 11.8044C11.9413 11.8044 11.1606 12.1445 10.5853 12.6969L7.16295 10.5766C7.35822 10.1241 7.46667 9.6256 7.46667 9.10222C7.46667 8.57884 7.35822 8.08039 7.16292 7.62788L10.5853 5.50759C11.1606 6.05995 11.9413 6.4 12.8 6.4C14.5645 6.4 16 4.96448 16 3.2C16 1.43552 14.5645 0 12.8 0C11.0355 0 9.6 1.43552 9.6 3.2C9.6 3.72092 9.72519 4.21316 9.94695 4.64825L6.60469 6.71893C5.91932 5.89461 4.88661 5.36889 3.73333 5.36889C1.67477 5.36889 0 7.04366 0 9.10222C0 11.1608 1.67477 12.8356 3.73333 12.8356C4.88661 12.8356 5.91932 12.3098 6.60469 11.4855L9.94695 13.5562C9.72519 13.9913 9.6 14.4835 9.6 15.0044C9.6 16.7689 11.0355 18.2044 12.8 18.2044C14.5645 18.2044 16 16.7689 16 15.0044C16 13.24 14.5645 11.8044 12.8 11.8044V11.8044ZM12.8 1.06667C13.9763 1.06667 14.9333 2.02368 14.9333 3.2C14.9333 4.37632 13.9763 5.33333 12.8 5.33333C11.6237 5.33333 10.6667 4.37632 10.6667 3.2C10.6667 2.02368 11.6237 1.06667 12.8 1.06667ZM3.73333 11.7689C2.26293 11.7689 1.06667 10.5726 1.06667 9.10222C1.06667 7.63182 2.26293 6.43556 3.73333 6.43556C5.20373 6.43556 6.4 7.63182 6.4 9.10222C6.4 10.5726 5.20373 11.7689 3.73333 11.7689ZM12.8 17.1378C11.6237 17.1378 10.6667 16.1808 10.6667 15.0044C10.6667 13.8281 11.6237 12.8711 12.8 12.8711C13.9763 12.8711 14.9333 13.8281 14.9333 15.0044C14.9333 16.1808 13.9763 17.1378 12.8 17.1378Z" fill="#222222" />
                                        </svg>
                                    </button>
                                    <span className='inline-block leading-6 hoverItems'>SHARE</span>
                                </div>
                            </div>
                            <div className='mt-8 lg:mb-49.75 leading-6'>
                                <h3 className='font-jost text-secondary-grey text-[13px]'>SKU:<span className='text-primary-black lowercase'>{singleProduct.sku} </span>
                                </h3>
                                <h3 className='uppercase font-jost text-secondary-grey text-[13px]'>Categories:<span className='text-primary-black lowercase'>{singleProduct.category}
                                </span>
                                </h3>
                                <h3 className='font-jost text-secondary-grey text-[13px] uppercase'>Tags:<span className='text-primary-black lowercase'>{singleProduct?.tags?.map((item) => item)} </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <div className='mt-10 flex flex-col items-center'>
                        <div className='flex gap-6  '>
                            <button
                                onClick={() => setActiveTab("description")}
                                className={`${activeTab === "description"
                                    ? "text-primary-black font-medium  border-black "
                                    : "text-gray-500"
                                    } pb-2 hoverItems `}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab("info")}
                                className={`${activeTab === "info"
                                    ? "text-primary-black font-medium border-black"
                                    : "text-gray-500"
                                    } pb-2 hoverItems`}
                            >
                                Additional Information
                            </button>
                            <button
                                onClick={() => setActiveTab("reviews")}
                                className={`${activeTab === "reviews"
                                    ? "text-primary-black font-medium border-black"
                                    : "text-gray-500"
                                    } pb-2 hoverItems flex gap-1`}
                            >
                                Reviews<p>({singleProduct?.reviews[0]?.rating})</p>
                            </button>
                        </div>
                        <div className='mt-6'>

                            {activeTab === "description" && (
                                <div>
                                    <h3 className='font-medium font-jost'>
                                        {singleProduct.title}
                                    </h3>
                                    <p className='max-w-232.5 leading-6.75'>
                                        {singleProduct.description}
                                    </p>
                                    <div>
                                        <div>

                                            <div className='flex justify-between text-primary-black font-jost'>
                                                <div>
                                                    <h3 className='font-medium font-jost my-10'>Why choose product?</h3>
                                                    <div className='flex gap-3 items-center'>
                                                        <p><span className='text-5xl text-secondary-grey '>.</span> Creat by cotton fibric with soft and smooth</p>
                                                    </div>
                                                    <div className='flex gap-3 items-center'>
                                                        <p><span className='text-5xl text-secondary-grey '>.</span> Creat by cotton fibric with soft and smooth</p>
                                                    </div>
                                                    <div className='flex gap-3 items-center'>
                                                        <p><span className='text-5xl text-secondary-grey '>.</span> Creat by cotton fibric with soft and smooth</p>
                                                    </div>

                                                </div>
                                                <div>
                                                    <h3 className='font-medium font-jost my-10'>Sample Number List</h3>
                                                    <div className='flex gap-3 items-center'>
                                                        <p><span className='text-5xl text-secondary-grey '>.</span> Creat by cotton fibric with soft and smooth</p>
                                                    </div>
                                                    <div className='flex gap-3 items-center'>
                                                        <p><span className='text-5xl text-secondary-grey '>.</span> Creat by cotton fibric with soft and smooth</p>
                                                    </div>
                                                    <div className='flex gap-3 items-center'>
                                                        <p><span className='text-5xl text-secondary-grey '>.</span> Creat by cotton fibric with soft and smooth</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab === "info" && (
                                <div>
                                    <div className='flex gap-14.5'>
                                        <ul className='flex flex-col gap-7.5 font-medium text-primary-black'>
                                            <li>Weight</li>
                                            <li>Dimensions</li>
                                            <li>Size</li>
                                            <li>Color</li>
                                            <li>Storage</li>
                                        </ul>
                                        <ul className='flex flex-col gap-7.5'>
                                            <li>{singleProduct.weight}</li>
                                            <li>{singleProduct.dimensions.width},{singleProduct.dimensions.height},{singleProduct.dimensions.depth}</li>
                                            <li>size</li>
                                            <li>color</li>
                                            <li>{singleProduct.availabilityStatus}</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {activeTab === "reviews" && (
                                <div className='flex gap-14.5'>

                                    <div>
                                        {
                                            singleProduct?.reviews?.map((item) => {
                                                return (
                                                    <div className='mb-10 font-jost text-secondary-grey' key={item.id}>
                                                        <div className='flex gap-10 items-center'>
                                                            <div>
                                                                <Image src={reviewsImg} />
                                                            </div>
                                                            <div className='flex gap-30'>
                                                                <h3 className='w-150'>{item.reviewerName}</h3>
                                                                <span><Rate allowHalf defaultValue={item.rating} /> </span>
                                                            </div>
                                                        </div>
                                                        <div className='ms-24'>
                                                            <p>{item.date}</p>
                                                            <p className='mt-5'>{item.comment}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div> */}
                    <div>

                    </div>
                    <ProductDescription singleProduct={singleProduct} />
                    <LimitedEdition className='mt-9.5 mb-25' name='RELATED' name2='PRODUCT' />
                </Container>
            </section >
        </>
    );
};

export default ProductDetails;