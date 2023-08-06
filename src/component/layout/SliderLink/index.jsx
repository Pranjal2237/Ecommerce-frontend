import { Box } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {sliders} from '../../../data/sliderlinks'

const SliderLink = () => {
  const settings = {
    dots: true,
    infinite: true,

    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  return (
    <Box sx={{'>.slick-slider':{'>.slick-prev':{left:'25px',zIndex:'3'},'>.slick-next':{right:'25px',zIndex:'3'}}}}>
    <Slider {...settings}>
    {sliders.map((slide)=>{
        return(
            <Box  sx={{border:'2px solid black'}} >
            <img src={slide} alt='' style={{width:'100%'}} />
            </Box>
        )
    })}
    </Slider>
    </Box>
  )
}

export default SliderLink