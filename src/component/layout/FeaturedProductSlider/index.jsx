import React from 'react'
import { Box } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {sliders} from '../../../data/sliderlinks'
import SliderCard from '../SliderCard';
import featuredProducts from '../../../data/featuredProducts';

const FeaturedProductSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
    
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
      };

  return (
    <Box sx={{'>.slick-slider':{'>.slick-list':{'>.slick-track':{'>.slick-slide':{padding:'10px'}}},'>.slick-prev':{left:'25px',zIndex:'3'},'>.slick-next':{right:'25px',zIndex:'3'}}}}>
    <Slider {...settings}>
    {featuredProducts.map(({image,product,price})=>(
      <SliderCard image={image} Product={product} price={price} />
    ))}
    </Slider>
    </Box>
  )
}

export default FeaturedProductSlider