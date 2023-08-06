import React from 'react'

const TrendingProductCard = ({image,product,newPrice,originalPrice}) => {
  return (
    <div className='trendingProduct-main-div'>
        <div className='trendingProduct-img-div'>
            <img src={image} alt="" />
        </div>
        <div className='trendingProduct-name-div'>
        <p>{product}</p>
        <p style={{fontSize:"13px",marginTop:"7px"}}>Rs. {newPrice} <span style={{fontSize:"11px",color:"#A9ACC6",textDecoration:"line-through"}}>Rs. {originalPrice}</span></p>
        </div>
    </div>
  )
}

export default TrendingProductCard