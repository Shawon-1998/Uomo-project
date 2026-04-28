import React, { useEffect, useState } from 'react'
import Container from '../Ui/Container'
import { productData } from '../../Api/productItems'
import ListItem from '../common/ListItem'
import Products from '../common/Products'
import axios from 'axios'

const TrendyProducts = () => {
    const [product, setProduct] = useState([])
    const [active, setActive] = useState("")
    const handleActive = () => {
        alert("asdf")
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
                    <ul className='flex justify-center gap-13.25 text-base text-secondary-grey font-medium mt-7.75 mb-10.25'>
                        {
                            productData?.map((item) => {
                                return (
                                    <ListItem onClick={handleActive} className={`cursor-pointer`} >
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
                                    <Products key={item.id}
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
