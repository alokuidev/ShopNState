import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../Redux/TodoSlice";

const Cart = () => {
  const addedProduct = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  useEffect(() => {
   // console.log(JSON.stringify(addedProduct));
  }, [addedProduct]);
  return (
    <>
      <div className="cart">
        <h2 className="cart-heading">Your Cart</h2>
        {addedProduct.map((elem) => {
          return (
            <div className="cart-item" key={elem.id}>
              <p className="cart-item-name">{elem.name.length > 7 ? elem.name.slice(0,8)+'...': elem.name}</p>
              <div className="cart-quantity">
                <button className="qty-btn" onClick={() =>dispatch(removeCart({id:elem.id}))}>-</button>
                <span className="qty-number">{elem.quantity}</span>
                <button className="qty-btn" onClick={() =>dispatch(addCart({id:elem.id}))}>+</button>
              </div>
              <p className="cart-item-price">${elem.price}</p>
            </div>
          );
        })}
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
