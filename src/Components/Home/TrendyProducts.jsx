import React, { useEffect, useState } from 'react'
import Container from '../Ui/Container'
import { productData } from '../../Api/productItems'
import ListItem from '../common/ListItem'
import Products from '../common/Products'
import axios from 'axios'
import Skeleton from './category/Skeleton'
import { useDispatch } from 'react-redux'
import { allProducts } from '../../Features/Product/productSlices'
import { Link } from 'react-router'

const TrendyProducts = () => {
    const [product, setProduct] = useState([]);
    const [filterCategoryProduct, setFilterCategoryProduct] = useState([]);
    const [category, setCategory] = useState("smartphones");
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        function getProduct() {
            axios.get('https://dummyjson.com/products?limit=194')
                .then((res) => {
                    const products = res.data.products
                    setProduct(products)
                    const smartphoneProducts = products.filter(
                        (item) => item.category === "tablets"
                    )

                    setFilterCategoryProduct(smartphoneProducts)
                    dispatch(allProducts(products))
                    setLoading(false)

                }).catch((err) => {
                    throw new Error(err.message ? err.message : "This is a custom error message");
                })
        }
        getProduct();
    }, []);


    const handleActive = (name) => {
        setCategory(name)

        setFilterCategoryProduct(
            product.filter(item => item.category === name)
        )
    }

    return (
        <>
            <section>
                <Container>
                    <h2 className='text-center font-jost lg:text-[35px] text-2xl font-normal '>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>

                    <ul className='flex justify-center gap-4 lg:gap-13.25  mt-7.75 mb-10.25 whitespace-nowrap '>
                        {
                            productData?.map((item) => {
                                return (

                                    <ListItem key={item.id} onClick={() => handleActive(item.name)} className={`${category == item.name ? " text-primary-black  font-bold  hoverItems" :
                                        " text-secondary-grey font-medium "} lg:text-base text-sm uppercase`}> {item.name} </ListItem>

                                )
                            })
                        }
                    </ul>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-x-7.5 lg:gap-y-15 gap-y-5 justify-center w-full mx-auto'>
                        {
                            !loading ? (filterCategoryProduct?.map((item) => <Products item={item} key={item.id} />)) :
                                <>
                                    {
                                        Array.from({ length: 8 }).map((item, index) => (
                                            <Skeleton key={index} />
                                        ))
                                    }
                                </>
                        }
                    </div>

                    {
                        <div className='text-center mt-10.5 lg:mb-25.5 mb-15'>
                            <Link className="font-jost text-primary-black font-medium text-sm cursor-pointer hoverItems" to='/shop'>
                                SEE ALL PRODUCTS
                            </Link>
                        </div>
                    }
                </Container>
            </section>
        </>
    )
}

export default TrendyProducts
