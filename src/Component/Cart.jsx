import React from "react";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <h2 className="cart-heading">Your Cart</h2>

        <div className="cart-item">
          <p className="cart-item-name">Product Name</p>
          <div className="cart-quantity">
            <button className="qty-btn">-</button>
            <span className="qty-number">1</span>
            <button className="qty-btn">+</button>
          </div>
          <p className="cart-item-price">$49.99</p>
        </div>

        {/* Total Section */}
        <div className="cart-total">
          <p>
            Total: <span>$149.97</span>
          </p>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
