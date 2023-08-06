import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';

export const cardDetails=[
    {
        icon:<Inventory2OutlinedIcon sx={{color:'#000000',fontSize:'37px'}} />,
        name:'Orders',
        description:'Check your order status',
        src:'/user/order'
    },
    {
        icon:<AddToPhotosOutlinedIcon sx={{color:'#000000',fontSize:'37px'}} />,
        name:'Collections & WishList',
        description:'All your curated prodcut collections',
        src:'/user/wishlist'
    },
    {
        icon:<SwitchAccountOutlinedIcon sx={{color:'#000000',fontSize:'37px'}} />,
        name:'Profile Details',
        description:'Change your profile details and password',
        src:'/'
    }
]

export const sidebar=[
    {
        heading:'',
        content:['Overview']
    },
    {
        heading:'ORDERS',
        content:['Orders & Returns']
    },
    {
        heading:'ACCOUNT',
        content:['Profile']
    },
    {
        heading:'LEGAL',
        content:['Terms of Use','Privacy Policy']
    }
]