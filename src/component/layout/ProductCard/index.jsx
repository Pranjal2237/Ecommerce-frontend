import React,{ useEffect, useState } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/slice/productsSlice";
import {addCart} from '../../../redux/slice/loginSlice'
import { deleteWishList, newWishList } from "../../../redux/slice/WishListSlice";
import { getAllWishList } from "../../../redux/slice/WishListSlice";

const ProductCard = () => {

  const [isWishListed, setisWishListed] = useState(false);
  
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const disp=useDispatch();
  const state = useSelector((state) => state);
  let a=[];
  
  const StyledButton = styled(Button)({
    minWidth: "0px",
  });


  const handleAdd =(product_id)=>{
    dispatch(addCart({quantity:1,product_id}))
    if(state?.userLogin?.data==null)
    {
      navigate("/login");
    }
  }

  const handleRemoveWishlist=(product_id)=>{
    let wishlist_id;
    state?.wishlist?.data?.products.forEach((key)=>{
      if(key.wishListProduct.product_id===product_id)
      {
        wishlist_id=key._id;
      }
    })
    dispatch(deleteWishList(wishlist_id))
    setisWishListed(!isWishListed);
  }

  const handleWishList=(product_id)=>{
    dispatch(newWishList(product_id))
    if(state?.wishlist?.error)
    {
      navigate("/login");
    }
  }
  useEffect(() => {
    dispatch(getProducts());
    },[]);

    useEffect(()=>{
      disp(getAllWishList())
    },[state.wishlist?.data?.wishList,state.wishlist?.data?.message])


    if(state?.wishlist?.data?.products?.length>0)
    {
      state?.wishlist?.data?.products.forEach((key)=>{a.push(key.wishListProduct.product_id)})
    }

    if(!state?.products?.data)
    {
      return(
        <h1>Loading.........</h1>
      )
    }

  return (
    <Box sx={{width:'60%'}}>
    {state?.products?.data?.products.length===0?(<Typography sx={{fontSize:'30px',fontWeight:'700'}}>No Product Found!!</Typography>):state?.products?.data?.products.map((product,index)=>{

  return(
      <Box sx={{ display: "flex", alignItems: "center",p:"10px",m:"14px 0px",width:"100%",gap:"2rem"}}>
        <Box sx={{ width:"40%",backgroundColor:"#F5F5F5",p:"25px 0px",flexShrink:"0"}}>
          <Link to={`/product/${product._id}`} style={{display:"flex",width:"100%"}} >
            <img
              src={`http://localhost:4000/assets/${product.images[0].public_id}`}
              alt=""
              style={{ width: "80%", objectFit: "cover",margin:"auto" }}
            />
          </Link>
        </Box>
        <Box sx={{flexGrow:"1"}}>
          <Typography sx={{ fontWeight: "800", color: "#111C85" }}>
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",color:"#535399",mb:"5px" }}>
            <Typography sx={{fontSize:"13px",fontWeight:"700"}}>Rs. {product.price}</Typography>
            <Rating
              name="rating"
              value={product.rating}
              readOnly
              sx={{ ml: "15px"}}
            />
          </Box>
          <Typography sx={{color:"#9295AA",fontSize:"11px",mb:"5px"}}>{product.description}</Typography>
          {/* <Link to="/cart"> */}
          <StyledButton onClick={()=> handleAdd(product._id)}>
            <ShoppingCartOutlinedIcon />
          </StyledButton>
          {/* </Link> */}
          {a.includes(product._id)?(<StyledButton onClick={()=>{handleRemoveWishlist(product._id)}}><FavoriteIcon sx={{color:'red'}}/></StyledButton>):(<StyledButton onClick={()=>{handleWishList(product._id,index)}}>
            <FavoriteBorderOutlinedIcon />
          </StyledButton>)}
          <StyledButton>
            <ZoomInOutlinedIcon />
          </StyledButton>
        </Box>
      </Box>
  )
    })}
    </Box>
  );
};

export default ProductCard;
