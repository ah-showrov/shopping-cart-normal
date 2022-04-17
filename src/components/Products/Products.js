import React from "react";
import "./Products.css";
const Products = ({ products, handleAddProduct }) => {
  return (
    <div className="products__container">
      {products.map((product) => {
        return (
          <div className="product__card" key={product.id}>
            <div className="product__image__wrapper">
              <img
                className="product__image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <h3 className="product__title">{product.title}</h3>
            <p className="product__price"> ${product.price}</p>
            <button
              className="product__add__button"
              onClick={() => handleAddProduct(product)}
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
