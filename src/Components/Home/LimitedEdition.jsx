import React, { useState } from 'react'
import Container from '../Ui/Container'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useSelector } from 'react-redux'
import Products from '../common/Products'

const LimitedEdition = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const getProduct = useSelector((state) => state.getProduct.value)
    console.log(getProduct)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 576px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 10 },
            },
            "(min-width: 992px)": {
                slides: { perView: 3, spacing: 10 },
            },
            "(min-width: 1170px)": {
                slides: { perView: 4, spacing: 10 },
            },
            "(min-width: 1410px)": {
                slides: { perView: 4, spacing: 10 },
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
            <section>
                <Container>
                    <h2 className='text-center font-jost text-[35px] text-primary-black'>LIMITED <span className='font-bold'>EDITION</span></h2>
                    <div className="navigation-wrapper">
                        <div ref={sliderRef} className="keen-slider">
                            {
                                getProduct?.map((item) => (
                                    <div className="keen-slider__slide flex flex-wrap gap-7.5 justify-center" key={item.id}>
                                        <Products item={item} />
                                    </div>
                                ))
                            }
                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }

                                    className="-top-3 left-4"
                                />

                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }

                                    className="-top-3 right-4"
                                />
                            </>
                        )}
                    </div>

                </Container>
            </section>

        </>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow absolute ${props.className} ${props.left ? "arrow--left" : "arrow--right"} ${disabled} w-5 h-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}


export default LimitedEdition
