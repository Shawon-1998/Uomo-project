import React from 'react'
import Banner3 from '../Components/Home/Banner3'
// import Banner2 from '../Components/Home/Banner2'
import Category from '../Components/Home/category/Category'
import TrendyProducts from '../Components/Home/TrendyProducts'
import SpringCollection from '../Components/Home/SpringCollection'
import StartingImage from '../Components/Home/StartingImage'
import LimitedEdition from '../Components/Home/LimitedEdition'

const Home = () => {
  return (
    <>
      <Banner3 />
      {/* <Banner2 /> */}
      <Category />
      <TrendyProducts />
      <SpringCollection />
      <StartingImage />
      <LimitedEdition />
    </>
  )
}

export default Home

