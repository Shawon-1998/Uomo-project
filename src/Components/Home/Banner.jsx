import React, { useState } from 'react'
import Image from '../common/Image';
import { BannerData } from '../../Api/bannerData';

const Banner = () => {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full">
                    {
                        BannerData?.map((item, index) => (
                            <div
                                key={item.id}
                                id={`item${index + 1}`}
                                className="carousel-item w-full"
                            >
                                <Image
                                    src={item.banner}
                                    alt={item.alt}
                                    className="w-full"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex w-full gap-2 py-2 absolute bottom-10 left-40">
                {
                    BannerData?.map((item, index) => (
                        <a
                            key={index}
                            href={`#item${index + 1}`}
                            onClick={() => setActive(index)}
                            className={`h-7.5 w-7.5 rounded-full flex items-center justify-center  ${active === index ? 'border-[1.5px] border-primary-black' : 'border border-transparent'}`}>

                            <span className={`h-1.5 w-1.5 rounded-full  ${active === index ? 'bg-primary-black' : 'bg-fourthColor'} `}>
                            </span>
                        </a>
                    ))
                }
            </div>

        </>
    )
}

export default Banner
