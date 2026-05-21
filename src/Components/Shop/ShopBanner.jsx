import React, { useMemo } from 'react'
import Image from '../common/Image'
import shopBannerImg from '../../assests/images/ShopBanner.png'
import ListItem from '../common/ListItem'
import { shopBannerNav } from '../../Api/shopBannerData'
import Container from '../Ui/Container'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'


const ShopBanner = ({ setSelectedCategory }) => {
    const products = useSelector(state => state.getProduct.value)
    const categories = useMemo(() => {
        return [...new Set(products?.map(item => item.category))]
    }, [products])

    return (
        <section className=''>
            <Image className='w-full mx-auto mb-9 object-cover lg:px-15' src={shopBannerImg} />

            <Container className='relative'>

                <ul className='flex gap-7.5 overflow-x-auto  whitespace-nowrap absolute lg:bottom-30.75 bottom-13 left-0 w-full px-5'>

                    <ListItem onClick={() => setSelectedCategory("all")}
                        className='text-primary-black font-jost font-medium uppercase lg:text-lg text-xs hover:text-primary-red shrink-0 '>
                        All
                    </ListItem>

                    {
                        categories?.map((item) => (
                            <ListItem onClick={() => setSelectedCategory(item)}
                                className='text-primary-black font-jost font-medium uppercase lg:text-lg text-xs hover:text-primary-red shrink-0'
                                key={item} >
                                {item}
                            </ListItem>
                        ))
                    }

                </ul>
            </Container>

        </section>
    )
}

export default ShopBanner

