import React from 'react'
import Image from '../common/Image';
import { BannerData } from '../../Api/bannerData';

const Banner = () => {

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
                            className="h-6 w-6 rounded-full bg-primary-black text-primary-white justify-center flex items-center"
                        >
                            {index + 1}
                        </a>
                    ))
                }
            </div>



        </>
    )
}

export default Banner
