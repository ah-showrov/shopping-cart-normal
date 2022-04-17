import React from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";

const Home = ({ products, handleAddProduct, cartItems }) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <Products products={products} handleAddProduct={handleAddProduct} />
    </>
  );
};

export default Home;
