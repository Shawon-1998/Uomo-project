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
                <Link className="font-jost text-sm font-medium  hoverItems" to={item.link} >SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Card
