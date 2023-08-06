import { Box, Button, Typography } from '@mui/material'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newOrder } from '../../../redux/slice/orderSlice'
import { useNavigate } from 'react-router-dom'

const PaymentCard = ({shippingInfo,orderItems,itemsPrice,taxPrice,shippingPrice,totalPrice}) => {

  const [paymentInfo, setPaymentInfo] = useState({number:'',cvv:'',expiryDate:'',id:toString(Math.ceil(Math.random()*Math.pow(10,17))),status:'Successful'})

  const navigate=useNavigate();

  const dispatch=useDispatch()
  const state=useSelector((state)=>state)

  const handleNumber=(e)=>{
    const temp={...paymentInfo}
    temp.number=e.target.value;
    setPaymentInfo(()=>({...temp}))
  }

  const handleCVV=(e)=>{
    const temp={...paymentInfo}
    temp.cvv=e.target.value;
    setPaymentInfo(()=>({...temp}))
  }

  const handleExDate=(e)=>{
    const temp={...paymentInfo}
    temp.expiryDate=e.target.value;
    setPaymentInfo(()=>({...temp}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(newOrder({shippingInfo,orderItems,paymentInfo,itemsPrice,taxPrice,shippingPrice,totalPrice}))
    navigate("/payment/ordered");

  }

  return (
    <Box sx={{ p: "30px", background: "#fcf4fc" }}>
    <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>Card Details</Typography>
    </Box>
    <form onSubmit={(e)=>{handleSubmit(e)}}>
    <Box sx={{
            width: "500px",
            ">input": {
              height: "35px",
              mt: "30px",
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
              background: "none",
            },
            display: "flex",
            flexDirection: "column",
          }}>
        <input type="text" placeholder='Enter Card Number..' value={paymentInfo.number} onChange={(e)=>handleNumber(e)} />
        <Box sx={{
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid black",
                width: "240px",
                background: "none",
              },
              display: "flex",
              justifyContent: "space-between",
            }}>
            <input type='text' placeholder='CVV' value={paymentInfo.cvv} onChange={(e)=>handleCVV(e)} />
            <input type='text' placeholder='MM/YYYY' value={paymentInfo.expiryDate} onChange={(e)=>handleExDate(e)} />
        </Box>
        <Box >
            <Button sx={{
              background: "#191970",
              color: "white",
              "&:hover": { background: "#191970" },
              mt: "30px",
              p:'10px 30px'
            }}
            type='submit' >PLACE ORDER</Button>
        </Box>
    </Box>
    </form>
    </Box>
  )
}

export default PaymentCard