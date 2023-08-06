import { Button } from '@mui/material'
import React from 'react'

const TopCategoriesCard = ({image,product}) => {
  return (
    <div className='topCategories-main-div'>
        <div className='topCategories-img-div'>
            <img src={image} alt='' />
        </div>
        <div className='topCategories-name-div'>
            <p>{product}</p>
        </div>
    </div>
  )
}

export default TopCategoriesCard