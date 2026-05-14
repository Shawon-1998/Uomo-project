import React from 'react'
import Container from '../../Ui/Container'
import { catergoryItem } from '../../../Api/categoryData'
import Card from './Card'

const Category = () => {
    return (
        <>
            <section className='mt-5.25 mb-13.5 lg:mt-25.25 lg:mb-23.5'>
                <Container >
                    <div className={`w-full  grid lg:grid-cols-4 lg:gap-7.5 gap-3`}>
                        {catergoryItem?.map((item) => {
                            return (
                                <Card key={item?.id} item={item} />
                            )
                        })}
                    </div>
                </Container>
            </section >
        </>
    )
}

export default Category
