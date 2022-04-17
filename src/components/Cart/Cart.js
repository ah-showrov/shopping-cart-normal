import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearCart,
  handleDeleteCartItem,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  );

  if (!cartItems.length) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "red",
        }}
      >
        Your Cart is Empty.. <Link to="/">Go to Shop</Link>
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ marginLeft: "75px" }}>
        Total Cart Items : {cartItems.length}
      </h1>

      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px auto",
              background: "gray",
            }}
          >
            <img width="100px" src={item.image} alt="" />
            <h2
              style={{ color: "red" }}
              onClick={() => handleDeleteCartItem(item)}
            >
              X
            </h2>
            <h2> {item?.title} </h2>
            <h3> {item.quantity} </h3>
            <h3>{item.quantity * item.price}</h3>

            <div>
              <button
                style={{
                  padding: "8px 10px",
                  fontSize: 18,
                  borderRadius: 10,
                  border: "none",
                  margin: 5,
                  cursor: "pointer",
                  background: "green",
                  color: "white",
                }}
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                style={{
                  padding: "8px 12px",
                  fontSize: 18,
                  borderRadius: 10,
                  border: "none",
                  margin: 5,
                  cursor: "pointer",
                  background: "red",
                  color: "white",
                }}
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
          </div>
        );
      })}

      <div
        className="cart__item__total__price"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
          paddingTop: "30px",
        }}
      >
        {" "}
        <h3
          style={{
            textAlign: "right",
            padding: "20px 75px",
          }}
        >
          <button
            style={{
              padding: "8px 12px",
              fontSize: 18,
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background: "red",
              color: "white",
            }}
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </h3>
        <h3
          style={{
            textAlign: "right",
            padding: "20px 75px",
          }}
        >
          Total Price : {totalPrice}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
