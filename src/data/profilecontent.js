import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const profile=[
    {
        type:'My Profile',
        src:'/profile',
        icon:<AccountCircleIcon color='blue'/>
    },
    {
        type:'Orders',
        src:'/user/order',
        icon:<ListAltIcon/>
    },
    {
        type:'Cart',
        src:'/cart',
        icon:<ShoppingCartIcon/>
    },
    {
        type:'WishList',
        src:'/user/wishlist',
        icon:<FavoriteIcon/>
    },
    {
        type:'Log Out',
        src:'/login',
        icon:<ExitToAppIcon/>
    }
]