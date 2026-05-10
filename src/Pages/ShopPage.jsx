
import React, { useEffect, useState } from 'react'
import ShopBanner from '../Components/Shop/ShopBanner'
import BreadCrumbs from '../Components/common/BreadCrumbs'
import ShortAndView from '../Components/Shop/ShortAndView'
import Container from '../Components/Ui/Container'
import axios from 'axios'
import AllProducts from '../Components/Shop/AllProducts'

const ShopPage = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        function getProduct() {
            axios.get('https://dummyjson.com/products?page=1&limit=194')
                .then((res) => {
                    setProduct(res.data.products);
                }).catch((err) => {
                    throw new Error(err.message ? err.message : "This is a custom error message");
                })
        }
        getProduct();
    },
        []);
    console.log(product)
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
