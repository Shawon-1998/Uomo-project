import React from 'react'
import Image from '../common/Image'
import shopBannerImg from '../../assests/images/ShopBanner.png'
import ListItem from '../common/ListItem'
import { shopBannerNav } from '../../Api/shopBannerData'
import Container from '../Ui/Container'
import { Link } from 'react-router'


const ShopBanner = ({ products }) => {
    return (
        <section>
            <Image className='w-full mx-auto px-15 mb-9' src={shopBannerImg} />
            <Container className='relative'>
                <ul className='flex gap-7.5 absolute bottom-34.75 left-0'>
                    {
                        shopBannerNav?.map((item) => {
                            return (
                                <ListItem className='text-primary-black font-jost font-medium' key={item.id}>
                                    <Link >
                                        {item.name}
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                </ul>
            </Container>

        </section>
    )
}

export default ShopBanner

