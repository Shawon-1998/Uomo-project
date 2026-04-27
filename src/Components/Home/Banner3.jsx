import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from '../common/Image';
import { BannerData } from '../../Api/bannerData';

const Banner3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 576px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 768px)": {
                slides: { perView: 1, spacing: 10 },
            },
            "(min-width: 992px)": {
                slides: { perView: 1, spacing: 10 },
            },
            "(min-width: 1170px)": {
                slides: { perView: 1, spacing: 10 },
            },
            "(min-width: 1410px)": {
                slides: { perView: 1, spacing: 10 },
            },
        },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 1,
            spacing: 0,
        },
        loop: true,
    })

    return (
        <>
            <div className="navigation-wrapper relative">
                <div ref={sliderRef} className="keen-slider">
                    {
                        BannerData?.map((item, index) => (
                            <div
                                key={item?.id}
                                className="keen-slider__slide"
                            >
                                <Image
                                    src={item?.banner}
                                    alt={item?.alt}
                                    className="w-full"
                                />
                            </div>
                        ))
                    }
                </div>

                {/* Navigation arrows */}

                <div className='absolute lg:bottom-10 lg:left-35 bottom-5 left-20'>
                    {/* Dots */}
                    {loaded && instanceRef.current && (
                        <div className="flex justify-center gap-2 ">
                            {[
                                ...Array(instanceRef.current.track.details.slides.length).keys(),
                            ].map((item) => {
                                return (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(item)
                                        }}
                                        className={`h-7.5 w-7.5 rounded-full flex items-center justify-center ${currentSlide === item
                                            ? 'border-[1.5px] border-primary-black' : 'border border-transparent cursor-pointer '
                                            }`}
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full  ${currentSlide === item ? 'bg-primary-black' : 'bg-fourthColor'} `}>
                                        </span>
                                    </button>
                                )
                            })}
                        </div >
                    )}
                </div>
            </div>

        </>
    )
}



export default Banner3
