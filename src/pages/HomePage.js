import React from "react";
import Banner from "../components/banner/Banner";
import CategorySlider from "../components/categorySlider/CategorySlider";

const HomePage = ({ itemsList }) => {
  return (
    <div>
      <Banner />
      <CategorySlider itemsList={itemsList} />
    </div>
  );
};

export default HomePage;
