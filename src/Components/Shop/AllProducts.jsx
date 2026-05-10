import React from 'react'
import Products from '../common/Products'

const AllProducts = ({ item }) => {
    return (
        <div>
            <div className='grid grid-cols-4'>
                {/* {
                    product?.map((item) => {
                        return (
                            <Products key={item.id} item={item} />
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default AllProducts
