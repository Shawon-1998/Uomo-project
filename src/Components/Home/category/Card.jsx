import React from 'react'
import { Link } from 'react-router'
import Image from '../../common/Image'
const Card = ({ item }) => {
    return (
        <div key={item?.id} className={`${item?.id == 1 && 'col-span-2 row-span-2'} ${item?.id == 2 && 'col-span-2 row-span-1 '} relative`} >
            <Image src={item?.image} />
            <div className='absolute bottom-10 left-10'>
                <h4 className='font-jost text-sm font-normal'>HOT LIST</h4>
                <h2 className='text-[26px] font-medium font-jost'><span className='font-bold'>{item.name}</span> COLLECTION</h2>
                <Link className="font-jost text-sm font-medium  after:bg-primary-black relative  leading-6  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-[50%]" to={item.link} >SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Card
