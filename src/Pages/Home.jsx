import React from 'react'
import Banner3 from '../Components/Home/Banner3'
import Category from '../Components/Home/category/Category'
import TrendyProducts from '../Components/Home/TrendyProducts'
import SpringCollection from '../Components/Home/SpringCollection'
import StartingImage from '../Components/Home/StartingImage'
import LimitedEdition from '../Components/Home/LimitedEdition'
import Marquee from '../Components/Home/Marquee'
import LatestNews from '../Components/Home/LatestNews'
import ProductDetails from '../Components/Home/ProductDetails'

const Home = () => {
  return (
    <>
      <Banner3 />
      <Category />
      <TrendyProducts />
      <SpringCollection />
      <StartingImage />
      <LimitedEdition />
      <LatestNews />
      <Marquee />
      <ProductDetails />
    </>
  )
}

export default Home

