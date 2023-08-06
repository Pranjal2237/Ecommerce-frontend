import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductInfo from '../ProductInfo';
import ProductReview from '../ProductReview';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const ProductDescription = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{marginTop:'100px',backgroundColor:"#F9F8FE",p:"40px"}}>
    <Box sx={{width:'60%',margin:'auto'}}>
        <Box sx={{}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{'>button':{ml:'30px'}}}>
            <Tab label="Description" {...a11yProps(0)} sx={{textTransform:'none',fontWeight:'700',fontSize:'16px',color:"#151875",p:"0px"}} />
            <Tab label="Additional Info" {...a11yProps(1)} sx={{textTransform:'none',fontWeight:'700',fontSize:'16px',color:"#151875",p:"0px"}} />
            <Tab label="Reviews" {...a11yProps(2)} sx={{textTransform:'none',fontWeight:'700',fontSize:'16px',color:"#151875",p:"0px"}} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{p:"0px"}}>
            <ProductInfo/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <ProductInfo/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <ProductReview/>
        </TabPanel>
    </Box>
    </Box>
  )
}

export default ProductDescription