import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import reviewsImg from '../../assests/images/reviews.png'
import { Rate } from 'antd';
import Image from '../common/Image';
import ProductReviewInputField from './ProductReviewInputField';

const ProductDescription = ({ singleProduct }) => {

    const getProduct = useSelector((state) => state.getProduct.value)

    const [activeTab, setActiveTab] = useState("description")

    const tabs = [
        {
            id: "description",
            label: "Description"
        },
        {
            id: "info",
            label: "Additional Information"
        },
        {
            id: "reviews",
            label: `Reviews (${singleProduct?.reviews?.length})`
        }
    ]

    const features = [
        "Creat by cotton fibric with soft and smooth",
        "Creat by cotton fibric with soft and smooth",
        "Creat by cotton fibric with soft and smooth",
    ]

    const additionalInfo = [
        {
            label: "Weight",
            value: singleProduct?.weight
        },
        {
            label: "Dimensions",
            value: `${singleProduct?.dimensions?.width},
            ${singleProduct?.dimensions?.height},
            ${singleProduct?.dimensions?.depth}`
        },
        {
            label: "Size",
            value: "size"
        },
        {
            label: "order-quantity",
            value: singleProduct?.minimumOrderQuantity
        },
        {
            label: "Storage",
            value: singleProduct?.availabilityStatus
        }
    ]

    return (
        <section>
            <div className='mt-10 flex flex-col items-center'>

                <div className='flex gap-6'>

                    {
                        tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                            ${activeTab === tab.id
                                        ? "text-primary-black font-medium border-black"
                                        : "text-gray-500"
                                    }
                            pb-2 hoverItems
                        `}
                            >
                                {tab.label}
                            </button>
                        ))
                    }

                </div>
                <div className='mt-6'>
                    {
                        activeTab === "description" && (
                            <div>
                                <h3 className='font-medium font-jost'>
                                    {singleProduct?.title}
                                </h3>
                                <p className='max-w-232.5 leading-6.75'>
                                    {singleProduct?.description}
                                </p>
                                <div className='flex justify-between text-primary-black font-jost'>
                                    {
                                        ["Why choose product?", "Sample Number List"]
                                            .map((title, index) => (
                                                <div key={index}>
                                                    <h3 className='font-medium my-10'>
                                                        {title}
                                                    </h3>

                                                    {
                                                        features.map((item, index) => (
                                                            <div
                                                                key={index}
                                                                className='flex gap-3 items-center'     >
                                                                <p>
                                                                    <span className='text-5xl
                        text-secondary-grey'>. </span>
                                                                    {item}       </p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        )
                    }
                    {
                        activeTab === "info" && (
                            <div className='flex flex-col gap-7.5'>
                                {
                                    additionalInfo.map((item, index) => (
                                        <div
                                            key={index}
                                            className='flex gap-20'
                                        >
                                            <h3 className='font-medium text-primary-black w-30'>
                                                {item.label}
                                            </h3>
                                            <p>{item.value}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                    {
                        activeTab === "reviews" && (
                            <div>
                                {
                                    singleProduct?.reviews?.map((item, index) => (
                                        <div
                                            className='mb-10 font-jost text-secondary-grey'
                                            key={index}
                                        >
                                            <div className='flex gap-10 items-center'>
                                                <div>
                                                    <Image src={reviewsImg} />
                                                </div>
                                                <div className='flex items-center justify-between lg:gap-30'>
                                                    <h3 className='w-full'>
                                                        {item.reviewerName}
                                                    </h3>
                                                    <span>
                                                        <Rate
                                                            allowHalf
                                                            defaultValue={item.rating}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='lg:ms-24'>
                                                <p>{item.date}</p>
                                                <p className='mt-5'>
                                                    {item.comment}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                                <ProductReviewInputField />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductDescription