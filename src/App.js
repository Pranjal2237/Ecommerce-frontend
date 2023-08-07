import Header from "./component/layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Ordered from "./pages/Ordered";
import './App.css'
import { loadUser } from "./redux/slice/loginSlice.js";
import { store } from './redux/store' ;
import { useEffect, useState} from "react";
import WishList from "./pages/WishList";
import { Box } from "@mui/material";
import Order from "./pages/Order";
import User from "./pages/User";
import PrivacyPolicy from "./component/layout/PrivacyPolicy";
import TermOfUse from "./component/layout/TermOfUse";
import SingleOrder from "./pages/SingleOrder";
import { useSelector } from "react-redux";

function App() {
  const [keyword, setKeyword] =useState("");
  const user=useSelector((state)=>state.userLogin.data);

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  

  return (
    <Router>
      <Box minHeight='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
        <Header setKeyword={setKeyword} />
        <Routes>
          <Route exact path="/" element={<Home />} replace />
          <Route path="/products" element={<Products keyword={keyword} />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={user?<Cart/>:<Login/>} />
          <Route path="/payment" element={user?<Payment/>:<Login/>} />
          <Route path="/payment/ordered" element={user?<Ordered/>:<Login/>} />
          <Route path="/user/wishlist" element={user?<WishList/>:<Login/>} />
          <Route path="/user/order" element={user?<Order/>:<Login/>} />
          <Route path="/profile" element={<User/>} /> 
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/terms' element={<TermOfUse/>} />
          <Route path="/order/:order_id/:product_id" element={user?<SingleOrder/>:<Login/>} />
        </Routes>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
