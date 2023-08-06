import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getProducts = createAsyncThunk(
  "getProducts",
  async ({
    currentPage = 1,
    category,
    rating = 0,
    priceL = 0,
    priceH = 10000000000,
    keyword = "",
  }) => {
    let link = `http://localhost:4000/app/v1/products?keyword=${keyword}&page=${currentPage}&rating[gte]=${rating}&price[gte]=${priceL}&price[lte]=${priceH}`;

    if (category) {
      console.log("checked");
      link = `http://localhost:4000/app/v1/products?keyword=${keyword}&page=${currentPage}&rating[gte]=${rating}&price[gte]=${priceL}&price[lte]=${priceH}&category=${category}`;
    }

    const response = await Axios.get(link);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isError = true;
      console.log("Error", action.payload);
    });
  },
});

export default productsSlice.reducer;
