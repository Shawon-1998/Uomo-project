import React from 'react'
import Container from '../../Ui/Container'
import { catergoryItem } from '../../../Api/categoryData'


import Card from './Card'
const Category = () => {
    return (
        <>
            <section className='mt-25.25 mb-23.5'>
                <Container >
                    <div className={`w-full  grid grid-cols-4 gap-7.5`}>
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
