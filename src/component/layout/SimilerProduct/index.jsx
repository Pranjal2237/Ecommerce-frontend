import { Stack,Box, Typography } from '@mui/material'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rating from "@mui/material/Rating";
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../../../redux/slice/singleProductSlice';

const SimilerProduct = () => {


    const state=useSelector((state)=>state)

    
    
    

    // useEffect(()=>{
    //     console.log(state?.singleProduct?.data.pro.category);
    //     dispatch(getProducts(list))
    // },[])
  return (
    <Box sx={{mt:'40px'}}>
    <Typography variant='h4' sx={{fontWeight:'700',textAlign:'center'}}>Releted Products</Typography>
    <Stack direction="row" sx={{m:'auto',mt:'60px',width:'80%',justifyContent:'space-between'}}>
    {state?.products?.data.products.slice(0,4).map((product)=>{
        return(
            <Box sx={{width:'250px',textAlign:'center'}}>
            <Link to={`/product/${product._id}`}>
            <Box sx={{background:'#f8e0f8',alignItems:'center',width:'250px','&:hover':{background:'#e383e3'},cursor:'pointer',transition:'0.25s ease-in-out',borderRadius:'5px'}}>
            <img src={product.images[0].public_id} alt="" width='100%'/>
            </Box>
            </Link>
            <Box sx={{mt:'5px'}}>
                <Typography sx={{fontWeight:'600'}}>{product.name}</Typography>
                <Rating
              name="rating"
              value={product.rating}
              readOnly
              sx={{ m: "5px" }}
            />
            <Typography>Rs. {product.price}</Typography>
            </Box>
            </Box>
        )
    })}
    </Stack>
    </Box>
  )
}

export default SimilerProduct