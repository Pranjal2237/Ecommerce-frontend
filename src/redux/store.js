import {configureStore} from '@reduxjs/toolkit'
import WishListReducer from './slice/WishListSlice'
import productsReducer from './slice/productsSlice'
import singleProductReducer from './slice/singleProductSlice'
import loginReducer from './slice/loginSlice'
import signupReducer from './slice/signupSlice'
import orderReducer from './slice/orderSlice'

export const store=configureStore({
    reducer:{
        products:productsReducer,
        wishlist:WishListReducer,
        singleProduct:singleProductReducer,
        userLogin:loginReducer,
        userSignup:signupReducer,
        order:orderReducer
    }
})