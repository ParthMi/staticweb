import React from 'react'
import HeroSwriper from '../components/swiper/HeroSwriper'
import AboutSection from '../components/homecomponents/AboutSection'
import ProductsSection from '../components/homecomponents/ProductsSection'
import BlogSection from '../components/homecomponents/BlogSection'

const Home = () => {
  return (
    <div>
      <div className='hero-slider'>
        <HeroSwriper />
      </div>
      <div className='about-section py-6 mt-[-22px]'>
        <AboutSection />
      </div>
      <div className="product-section">
        <ProductsSection />
      </div>
      <div className='blog-section '>
        <BlogSection />
      </div>
    </div>
  )
}

export default Home
