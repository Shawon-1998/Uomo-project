import React, { useState } from 'react'
import Products from '../common/Products'
import { useSelector } from 'react-redux'

const AllProducts = ({ item }) => {
    const products = useSelector((state) => state.getProduct.value)
    const [limitProduct, setLimitProduct] = useState([]);
    // setLimitProduct(products.slice(0, 8))
    console.log(products)
    return (
        <div>
            <div className='grid grid-cols-4'>
                {
                    products?.map((item) => {
                        return (
                            <Products key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts
