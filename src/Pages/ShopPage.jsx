
import React, { useEffect, useState } from 'react'
import ShopBanner from '../Components/Shop/ShopBanner'
import BreadCrumbs from '../Components/common/BreadCrumbs'
import ShortAndView from '../Components/Shop/ShortAndView'
import Container from '../Components/Ui/Container'
import AllProducts from '../Components/Shop/AllProducts'
import axios from 'axios'
import { useSelector } from 'react-redux'

const ShopPage = () => {

    const products = useSelector(state => state.getProduct.value)

    return (
        <main className='mt-25'>
            <ShopBanner products={products} />

            <Container>
                <div className='flex justify-between'>
                    <BreadCrumbs />
                    <ShortAndView products={products} />
                </div>
                <AllProducts products={products} />
            </Container>

        </main>
    )
}

export default ShopPage
