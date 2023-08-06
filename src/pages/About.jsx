import React from 'react'
import { Stack, Typography,Box } from '@mui/material'
import AboutInfo from '../component/layout/AboutInfo'
import AboutCard from '../component/layout/AboutCard'

const About = () => {
  return (
    <Stack direction="column" className='container'>
    <AboutInfo/>
    <Box textAlign="center" marginBottom="60px">
    <Typography sx={{mt:'80px',fontWeight:"700",fontSize:"28px",color:"#151875"}}>Our Features</Typography>
    <AboutCard/>
    </Box>
    </Stack>
  )
}

export default About