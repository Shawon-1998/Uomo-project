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
    const [limitProduct, setLimitProduct] = useState([]);
    const [category, setCategory] = useState("all");
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        function getProduct() {
            axios.get('https://dummyjson.com/products?limit=194')
                .then((res) => {
                    setProduct(res.data.products);
                    setLoading(false)
                    dispatch(allProducts(res.data.products))

                }).catch((err) => {
                    throw new Error(err.message ? err.message : "This is a custom error message");
                })
        }
        getProduct();
    },
        []);

    const handleActive = (name) => {
        setCategory(name)
        if (name == "all") {
            setFilterCategoryProduct(product)
        } else {
            let filterProduct = product.filter((item) => item.category == name)
            setFilterCategoryProduct(filterProduct)
        }

    };

    useEffect(() => {
        let limit = product.slice(0, 8);
        setLimitProduct(limit);
    }, [product])


    // const handleSelectProduct = () => {
    //     if (limitProduct.length <= 8) {
    //         setLimitProduct(product);
    //     }
    //     else {
    //         let limit = product.slice(0, 8);
    //         setLimitProduct(limit);
    //     }
    //     setShow(!show)
    // }

    return (
        <>
            <section>
                <Container>
                    <h2 className='text-center font-jost text-[35px] font-normal '>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>

                    <ul className='md:flex justify-center gap-13.25  mt-7.75 mb-10.25'>
                        {
                            productData?.map((item) => {
                                return (

                                    <ListItem key={item.id} onClick={() => handleActive(item.name)} className={`${category == item.name ? " text-primary-black font-bold " :
                                        " text-secondary-grey font-medium "} text-base uppercase`}> {item.name} </ListItem>

                                )
                            })
                        }
                    </ul>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-x-7.5 gap-y-15 justify-center w-full mx-auto'>
                        {
                            !loading ? (category == "all" ? limitProduct?.map((item) => <Products item={item} key={item.id} />) : filterCategoryProduct?.map((item) => <Products item={item} key={item.id} />)) :

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
                        <div className='text-center mt-10.5 mb-25.5'>
                            <Link to='/shop'>
                                <button className="font-jost text-primary-black font-medium text-sm cursor-pointer hoverItems"> SEE ALL PRODUCTS</button>
                            </Link>

                        </div>

                        // show product....

                        // <div onClick={handleSelectProduct} className='text-center mt-10.5 mb-25.5'>
                        //     <button className="font-jost text-primary-black font-medium text-sm cursor-pointer hoverItems">{show ? "SEE ALL PRODUCTS" : "SEE LEE PRODUCTS"}</button>
                        // </div>
                    }
                </Container>
            </section>
        </>
    )
}

export default TrendyProducts
