import React from 'react'
import Container from '../Components/Ui/Container'
import Image from '../Components/common/Image'
import clothingBanner from '../assests/images/clothing-store-1000x390.jpg'
const About = () => {
  return (
    <>
      <Container>
        <h2 className='text-primary-black text-[35px] font-bold font-jost 
        mt-38 mb-8 uppercase'>about uomo</h2>
        <Image className='w-full mx-auto' src={clothingBanner}></Image>
        <main className='ps-60 pe-30'>
          <h4 className='text-[26px] text-primary-black mt-12.5 mb-3.75'>OUR STORY</h4>
          < p className='leading-7.5 font-medium mt-5 mb-8.25'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className='leading-7.5 text-sm text-primary-black'>
            Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
          </p>
          <div className='flex justify-between mt-8.25 mb-7.25'>
            <div>
              <h4 className='font-medium mb-2 text-primary-black'>our mission</h4>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <h4 className='font-medium mb-2 text-primary-black'>our vision</h4>
              <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </main>
      </Container>
    </>
  )
}

export default About
