import React, { useEffect, useState } from 'react'
import Products from '../common/Products'
import { useSelector } from 'react-redux'
import axios from 'axios';
import Button from '../Home/category/Button';
import Skeleton from '../Home/category/Skeleton';

const AllProducts = ({ filteredProducts }) => {

    const [limit, setLimit] = useState(8)
    const visibleProducts = filteredProducts?.slice(0, limit) || []
    return (
        <section>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
                {
                    visibleProducts?.map((item) => <Products item={item} key={item.id} />)
                }
            </div>

            <Button
                onClick={() => setLimit(prev => prev + 8)}
                className='uppercase block mx-auto my-15'
            >
                Load More
            </Button>
        </section>
    )
}

export default AllProducts
