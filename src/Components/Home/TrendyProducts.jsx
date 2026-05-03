import React, { useEffect, useState } from 'react'
import Container from '../Ui/Container'
import { productData } from '../../Api/productItems'
import ListItem from '../common/ListItem'
import Products from '../common/Products'
import axios from 'axios'

const TrendyProducts = () => {
    const [product, setProduct] = useState([]);
    const [filterCategoryProduct, setFilterCategoryProduct] = useState([]);
    const [limitProduct, setLimitProduct] = useState([]);
    const [category, setCategory] = useState("all");
    const [active, setActive] = useState("");

    const handleActive = (name) => {
        setCategory(name)
        if (name == "all") {
            setFilterCategoryProduct(product)
        } else {
            let filterProduct = product.filter((item) => {
                return (
                    item.category == name
                )
            })
            setFilterCategoryProduct(filterProduct)
        }

    };

    useEffect(() => {
        function getProduct() {
            axios.get('https://dummyjson.com/products')
                .then((res) => {
                    setProduct(res.data.products);
                }).catch((err) => {
                    throw new Error(err.message ? err.message : "This is a custom error message");
                })
        }
        getProduct();

    }, []);

    useEffect(() => {
        const limit = product.slice(0, 8);
        setLimitProduct(limit);
    }, [product])

    const handleSelect = () => {
        let limit = product.slice(0, filterCategoryProduct.length - 1)
        setLimitProduct(limit);
    }
    return (
        <>
            <section>
                <Container>
                    <h2 className='text-center font-jost text-[35px] font-normal '>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>
                    <ul className='flex justify-center gap-13.25  mt-7.75 mb-10.25'>
                        {
                            productData?.map((item) => {
                                return (
                                    <ListItem onClick={() => handleActive(item.name)} className={`${category == item.name ? "text-base text-primary-black font-bold " : "text-base text-secondary-grey font-medium "}`}> {item.name} </ListItem>
                                )
                            })
                        }
                    </ul>
                    <div className='grid grid-cols-4 gap-x-7.5 gap-y-15'>
                        {
                            category == "all" ? limitProduct?.map((item) => <Products item={item} key={item.id} />) : filterCategoryProduct?.map((item) => <Products item={item} key={item.id} />)
                        }
                    </div>
                    <div onClick={handleSelect} className='text-center mt-10.5 mb-25.5'>
                        <button className="font-jost text-primary-black font-medium text-sm cursor-pointer after:bg-primary-black relative  leading-6  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-[50%]">SEE ALL PRODUCTS</button>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TrendyProducts
