import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ListItem from '../common/ListItem'

const SideBar = () => {
    const products = useSelector(state => state.getProduct.value);
    const filteredProducts = useSelector(state => state.getProduct.filterValue);
    const [selectedCategory, setSelectedCategory] = useState("")

    const filters = useMemo(() => {
        return {
            categories: [...new Set(products?.map(item => item.category))],
            brands: [...new Set(products?.map(item => item.brand))],
            prices: [...new Set(products?.map(item => item.price))]
        }
    }, [products])
    return (
        <div>
            <div className="drawer drawer-end ">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className='font-jost font-medium text-sm flex items-center gap-2.5 cursor-pointer drawer-content'>

                    {/* Page content here */}
                    <label htmlFor="my-drawer-5" className=" uppercase text-primary-black font-jost flex gap-2 items-center hover:text-red-500"> <svg width="14" height="10" className='hover:text-red-500' viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.44444 9.33333H8.55556V7.77778H5.44444V9.33333ZM0 0V1.55556H14V0H0ZM2.33333 5.44444H11.6667V3.88889H2.33333V5.44444Z" fill="currentColor" />
                    </svg> FILTER</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 pt-30 p-2 ">
                        <h2 className=' text-3xl text-primary-black font-jost font-medium'>Category</h2>
                        {

                            filters?.categories?.map((item) => {
                                return (
                                    <>
                                        <ListItem key={item} className="grid ">
                                            {item}
                                        </ListItem>
                                    </>
                                )
                            })
                        }
                        <h2 className=' text-3xl my-10 text-primary-black font-jost font-medium'>Brands</h2>
                        {

                            filters?.brands?.map((item) => {
                                return (
                                    <>
                                        <ListItem key={item} className="grid ">
                                            {item}
                                        </ListItem>
                                    </>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
