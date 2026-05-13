import React from 'react'
import { Rate } from 'antd';
import Button from '../Home/category/Button';
const ProductReviewInputField = () => {
    return (
        <section>
            <div>
                <h3 className='font-jost font-medium text-lg text-primary-black'>Be the first to review “Message Cotton T-Shirt”</h3>
                <p className='text-sm font-jost mt-1 mb-9 text-primary-black'>Your email address will not be published. Required fields are marked *</p>
                <div className='flex gap-3 mb-6.5'>
                    <h3 className='font-jost text-sm'>your ratings * </h3> <Rate
                        allowHalf
                        defaultValue={4}
                    />
                </div>
                <form action="" className='mx-5'>
                    <textarea className="border border-primary-black/25 textarea w-full h-53.25" placeholder=""></textarea>
                    <div className="relative w-full mt-7.5">
                        <label
                            className=" absolute -top-3 left-4 bg-white   px-2 text-sm text-primary-black "
                        >
                            Name
                        </label>
                        <input type="text" placeholder="Enter your name" className=" w-full border border-primary-black/25 rounded-md px-4 py-4 mb-7.5 "
                        />
                        <label
                            className=" bg-white px-2 text-sm text-primary-black " >  </label>
                        <input type="email" placeholder="Email address" className=" w-full border border-primary-black/25 rounded-md px-4 py-4 "
                        />
                    </div>
                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 my-6.75 p-4">
                        <label className="label">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </fieldset>
                    <Button > SUBMIT</Button>
                </form>
            </div>
        </section>
    )
}

export default ProductReviewInputField
