import React from 'react';
import Image from '../common/Image';
import { BannerData } from '../../Api/bannerData';
import BannerImage from "../../assests/images/banner.png";

const Banner = () => {
    return (
        <>
            {
                BannerData?.map((item) => {
                    return <Image key={item.id} src={item.banner} />
                })
            }
        </>
    )
}

export default Banner
