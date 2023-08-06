import React, { useState } from "react";
import { Stack } from "@mui/system";
import SliderLink from "../component/layout/SliderLink";
import FeaturedProductSlider from "../component/layout/FeaturedProductSlider";
import { Box, Typography } from "@mui/material";
import AboutCard from "../component/layout/AboutCard";
import LatestProductCard from "../component/layout/LatestProductCard";
import TrendingProductCard from "../component/layout/TrendingProductCard";
import TopCategoriesSlider from "../component/layout/TopCategoriesSlider";
import trendingProducts from "../data/trendingProducts";
import {
  newArrival,
  bestSeller,
  featured,
  specialOffer,
} from "../data/latestProducts";

const Home = () => {
  const [id, setid] = useState("New Arrival");

  return (
    <Stack sx={{}}>
      <SliderLink />
      <main>
        <div className="container">
          <p className="heading">Featured Products</p>
          <FeaturedProductSlider />
          <p className="heading">Leatest Products</p>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "30px" }}>
            <Typography
              sx={{
                cursor: "pointer",
                color: id === "New Arrival" ? "#FB4997" : "#151875",
              }}
              onClick={() => {
                setid("New Arrival");
              }}
            >
              New Arrival
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                color: id === "Best Seller" ? "#FB4997" : "#151875",
              }}
              onClick={() => {
                setid("Best Seller");
              }}
            >
              Best Seller
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                color: id === "Featured" ? "#FB4997" : "#151875",
              }}
              onClick={() => {
                setid("Featured");
              }}
            >
              Featured
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                color: id === "Special Offer" ? "#FB4997" : "#151875",
              }}
              onClick={() => {
                setid("Special Offer");
              }}
            >
              Special Offer
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 7,
              justifyContent: "space-between",
              mt: "35px",
            }}
          >
            {id === "New Arrival" &&
              newArrival.map(({ image, product, newPrice, originalPrice }) => (
                <LatestProductCard
                  image={image}
                  product={product}
                  newPrice={newPrice}
                  originalPrice={originalPrice}
                />
              ))}
            {id === "Best Seller" &&
              bestSeller.map(({ image, product, newPrice, originalPrice }) => (
                <LatestProductCard
                  image={image}
                  product={product}
                  newPrice={newPrice}
                  originalPrice={originalPrice}
                />
              ))}
            {id === "Featured" &&
              featured.map(({ image, product, newPrice, originalPrice }) => (
                <LatestProductCard
                  image={image}
                  product={product}
                  newPrice={newPrice}
                  originalPrice={originalPrice}
                />
              ))}
            {id === "Special Offer" &&
              specialOffer.map(
                ({ image, product, newPrice, originalPrice }) => (
                  <LatestProductCard
                    image={image}
                    product={product}
                    newPrice={newPrice}
                    originalPrice={originalPrice}
                  />
                )
              )}
          </Box>
          <p className="heading">What Shopex Offer!</p>
          <AboutCard />
          <Box>
            <Box></Box>
          </Box>
          <p className="heading">Trending Products</p>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {trendingProducts.map(
              ({ image, product, newPrice, originalPrice }) => (
                <TrendingProductCard
                  image={image}
                  product={product}
                  newPrice={newPrice}
                  originalPrice={originalPrice}
                />
              )
            )}
          </Box>
          <p className="heading">Top Categories</p>
          <TopCategoriesSlider />
        </div>
      </main>
    </Stack>
  );
};

export default Home;
