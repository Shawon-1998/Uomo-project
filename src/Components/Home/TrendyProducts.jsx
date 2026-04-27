import React, { useState } from 'react'
import Container from '../Ui/Container'
import { productData } from '../../Api/productItems'
import ListItem from '../common/ListItem'

const TrendyProducts = () => {
    const [active, setActive] = useState("")
    const handleActive = () => {
        alert("asdf")
    }
    return (
        <>
            <section>
                <Container>
                    <h2 className='text-center font-jost text-[35px] font-normal '>OUR TRENDY <span className='font-bold'>PRODUCTS</span></h2>
                    <ul className='flex justify-center gap-13.25 text-base text-secondary-grey font-medium mt-7.75 mb-10.25'>
                        {
                            productData?.map((item) => {
                                return (
                                    <ListItem onClick={handleActive} className={`cursor-pointer`} key={item.id}>
                                        {item.name}
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default TrendyProducts
