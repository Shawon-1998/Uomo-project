
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
    const [selectedCategory, setSelectedCategory] = useState("all")

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((item) => item.category === selectedCategory)
    return (
        <main className='mt-25'>
            <ShopBanner setSelectedCategory={setSelectedCategory} />

            <Container>
                <div className='flex justify-between'>
                    <BreadCrumbs />
                    <ShortAndView filteredProducts={filteredProducts} />
                </div>
                <AllProducts filteredProducts={filteredProducts} />
            </Container>

        </main>
    )
}

export default ShopPage
