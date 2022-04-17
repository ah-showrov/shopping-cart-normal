import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import products from "./components/fakeData";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find(
      (item) => parseInt(item.id) === parseInt(product.id)
    );

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          parseInt(item.id) === parseInt(product.id)
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      console.log(cartItems);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find(
      (item) => parseInt(item.id) === parseInt(product.id)
    );
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          parseInt(item.id) === parseInt(product.id)
            ? {
                ...productExist,
                quantity: productExist.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleDeleteCartItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                handleAddProduct={handleAddProduct}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleClearCart={handleClearCart}
                handleDeleteCartItem={handleDeleteCartItem}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
