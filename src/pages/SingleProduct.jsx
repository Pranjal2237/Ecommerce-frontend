import React from 'react'
import SingleProductInformation from '../component/layout/SingleProductInformation'
import { Stack } from '@mui/material'
import ProductDescription from '../component/layout/ProductDescription'
import SimilerProduct from '../component/layout/SimilerProduct'
import { useSelector } from 'react-redux'


const SingleProduct = () => {

  const state=useSelector((state)=>state);
  return (
    <Stack>
        <SingleProductInformation/>
        <ProductDescription/>
        {/* {state?.singleProduct?.data!==null ? (state?.singleProduct?.data!==null ? (<SimilerProduct/>) :(console.log('data not present'))):(console.log('null'))}  */}
        {/* <SimilerProduct/> */}
        
    </Stack>
  )
}

export default SingleProduct