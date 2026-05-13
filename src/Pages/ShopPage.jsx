
import React, { useEffect, useState } from 'react'
import ShopBanner from '../Components/Shop/ShopBanner'
import BreadCrumbs from '../Components/common/BreadCrumbs'
import ShortAndView from '../Components/Shop/ShortAndView'
import Container from '../Components/Ui/Container'

import AllProducts from '../Components/Shop/AllProducts'


const ShopPage = () => {

    return (
        <main className='mt-25'>
            {/* <TrendyProducts /> */}
            <ShopBanner />
            <Container>
                <div className='flex justify-between'>
                    <BreadCrumbs />
                    <ShortAndView />
                </div>
                <AllProducts />
            </Container>

        </main>
    )
}

export default ShopPage
