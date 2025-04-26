import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <Carousel data={[
        {img:'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp'}
    ]}/>
  )
}

export default Home