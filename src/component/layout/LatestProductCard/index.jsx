import React from 'react'

const LatestProductCard = ({image,product,newPrice,originalPrice}) => {
  return (
    <div className='latestProduct-main-div'>
        <div className='latestProduct-img-div'>
            <img src={image}/>
        </div>
        <div className='latestProduct-name-div'>
            <p>{product}</p>
            <p>Rs. {newPrice} <span>Rs. {originalPrice}</span></p>
        </div>
    </div>
  )
}

export default LatestProductCard