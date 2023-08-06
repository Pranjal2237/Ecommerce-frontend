import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cardDetails } from '../../../data/profilecard';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../redux/slice/loginSlice';

const Overview = ({handleComponent}) => {

    const state=useSelector((state)=>state);

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleLogout=()=>{
        dispatch(logoutUser())
        navigate('/login');
    }

    const handleEdit=()=>{
        const ndex={
            idx:0,
            index:2
        }
        handleComponent(ndex);
    }

  return (
    <Box>
        <Box>
            {state?.userLogin?.data?.success && (<Box sx={{background:'#F6F7FB',p:'25px 30px',display:'flex',justifyContent:'space-between'}}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Box sx={{width:'150px'}}>
                <AccountBoxIcon sx={{color:'gray',width:'150px',height:'150px',borderRadius:'none'}}/>
                </Box>
                <Typography>{state?.userLogin?.data?.user.email}</Typography>
                </Box>
                <Box>
                <Button sx={{border:'1px solid #3E4152',fontSize:'11px',color:'#3E4152',fontWeight:'800',background:'rgba(255,255,255,0.6)','&:hover':{background:'rgba(255,255,255,0.6)'}}} onClick={()=>(handleEdit())}>EDIT PROFILE</Button>
                </Box>
            </Box>)}
        </Box>
        <Box sx={{display:'flex',width:'710px',justifyContent:'space-between',m:'40px 0px'}}>
            {cardDetails.map((card)=>(
                <Box sx={{display:'flex','>a':{textDecoration:'none',textAlign:'center',m:'auto'},border:'1px solid #d4d5d9',maxWidth:'200px',minHeight:'200px',flexBasis:"100%"}}>
                    <Link to={card.src} sx={{width:'100%',height:'100%'}} >
                        <Box sx={{p:'12px'}}>
                            <Box sx={{width:'100%',mb:'10px'}}>{card.icon}</Box>
                            <Typography sx={{color:'#151875',fontWeight:'600',fontSize:'0.78rem'}}>{card.name}</Typography>
                            <Typography sx={{fontSize:'13px',color:'#A9ACC6',fontSize:'0.65rem'}} >{card.description}</Typography>
                        </Box>
                    </Link>
                </Box>
            ))}
        </Box>
        <Box>
            <Button sx={{p:'15px 80px',fontSize:'16px',fontWeight:'600',color:'white',background:'#FB4997','&:hover':{background:'#FB4997'}}}onClick={()=>(handleLogout())}>LOGOUT</Button>
        </Box>
    </Box>
  )
}

export default Overview