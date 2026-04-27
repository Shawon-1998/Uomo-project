import React from 'react'
import Container from '../Ui/Container'
import { catergoryItem } from '../../Api/categoryData'

const Category = () => {
    return (
        <>
            <section>
                <Container >
                    <div className='flex'>
                        {catergoryItem?.map((item, index) => {
                            return (
                                <div className='w-full h-150 bg-blue-600'>{item?.name}</div>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Category
