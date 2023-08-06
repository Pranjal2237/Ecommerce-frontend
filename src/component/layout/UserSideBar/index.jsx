import { Box, Button, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebar } from '../../../data/profilecard'

const UserSideBar = ({handleComponent,changeIndex}) => {

  const [ndex, setIndex] = useState({idx:0,index:0})
  const navigate=useNavigate();
  const handleClick=(idx,index)=>{
    if(index===1&&idx===0)
    {
      navigate('/user/order');
    }
    else if(index===3&&idx===0)
    {
      navigate('/terms')
    }
    else if(index===3&&idx===1)
    {
      navigate('/privacypolicy');
    }
    else
    {
    const temp={...index}
    temp.idx=idx;
    temp.index=index;
    setIndex(()=>({...temp}))
    }
  }
  useEffect(()=>{
    // setIndex(()=>({...changeIndex}))
    handleComponent(ndex);
  },[ndex])
  
  return (
    <Box sx={{pr:'25px',borderRight:'1px solid #d4d5d9',width:'170px',boxSizing:'border-box'}}>
        {sidebar.map((card,index)=>(
            <Box sx={{p:'20px 0px',borderBottom:'1px solid #d4d5d9'}}>
            {card.heading!=='' && (<Box sx={{p:'10px 0px','>p':{color:'#A9ACC6',fontSize:'12px'}}}><Typography>{card.heading}</Typography></Box>)}
            <Box>
            {card.content.map((content,idx)=>(
                <Box sx={{'>button':{textTransform:'none',color:ndex.index===index?ndex.idx===idx?'#14cda8':'#151875':'#151875',fontSize:'15px',p:'0px',fontWeight:ndex.index===index?ndex.idx==idx?'800':'auto':'auto'},m:'5px 0px'}}  >
                <Button onClick={()=>(handleClick(idx,index))}>{content}</Button>
                </Box>
            ))}
            </Box>
            </Box>
        ))}
    </Box>
  )
}

export default UserSideBar