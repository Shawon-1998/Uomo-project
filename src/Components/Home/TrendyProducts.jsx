import React, { useEffect, useState } from 'react'
import Container from '../Ui/Container'
import { productData } from '../../Api/productItems'
import ListItem from '../common/ListItem'
import Products from '../common/Products'
import axios from 'axios'

const TrendyProducts = () => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState(1)
    const [active, setActive] = useState("")
    const handleActive = (id) => {
        setCategory(id)
    }

    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         .then((item) => setProduct(item.products))
    // }, []);

    useEffect(() => {
        async function getProduct() {
            let res = await axios.get('https://dummyjson.com/products')
                .then((api) => {
                    setProduct(api.data.products)
                }).catch((err) => {
                    throw new Error(err.message ? err.message : "This is a custom error message");
                })
        }
        getProduct()
    }, [])
    return (
        <>
            <section>
                <Container>
                    <h2 className='text-center font-jost text-[35px] font-normal '>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>
                    <ul className='flex justify-center gap-13.25  mt-7.75 mb-10.25'>
                        {
                            productData?.map((item) => {
                                return (
                                    <ListItem onClick={() => handleActive(item.id)}
                                        className={`${category == item.id ? "text-base text-primary-black font-bold " : "text-base text-secondary-grey font-medium "} `}
                                    >
                                        {item.name}
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                    <div className='grid grid-cols-4 gap-x-7.5 gap-y-15'>
                        {
                            product?.map((item) => {
                                return (
                                    <Products item={item} key={item.id}
                                    />
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TrendyProducts
