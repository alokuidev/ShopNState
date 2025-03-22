import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userOrderDetail } from "../Redux/OrderDetail";

const Checkout = () => {
  const productDetail = useSelector((state) => state.cartList);
  const [finalPrice,setFinalPrice] = useState(0);
  const [userDetail,setUserDetail] = useState({})
  const dispatch = useDispatch();
  useEffect(()=>{
    const totalPrice = productDetail.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setFinalPrice(totalPrice);
  },[])

  const updateUser = (e) =>{
    setUserDetail ((prev) => ({...prev, [e.target.id]:e.target.value})) 
  }
  const orderCnfirm = () =>{
     dispatch(userOrderDetail(userDetail));
  }
  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout 🛍️</h1>

      <div className="checkout-main">
        {/* Cart Summary */}
        <div className="checkout-summary">
          <h2>Your Order</h2>
          {productDetail.map((elem) =>{
            return (
          <div className="order-item" key={elem.id}>
            <p>{elem.name}</p>
            <span>{elem.price * elem.quantity}</span>
          </div>
          )
          })}
          <div className="order-item total">
            <p>
              <strong>Total</strong>
            </p>
            <span>
              <strong>{finalPrice.toFixed(2)}</strong>
            </span>
          </div>
        </div>

        {/* Billing Details */}
        <div className="checkout-form">
          <h2>Billing Details</h2>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name"  placeholder="John Doe" onChange={(e) => updateUser(e)}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" onChange={(e) => updateUser(e)}/>

            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="123 Main Street" onChange={(e) => updateUser(e)}/>

            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="New York" onChange={(e) => updateUser(e)} />

            <label htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" placeholder="10001" onChange={(e) => updateUser(e)}/>
            <Link to='/OrderConfirmation' >
            <button type="submit" onClick={() => orderCnfirm()} className="checkout-btn">
              Place Order
            </button>
            </Link>
            <Link className="backLink" to='/'>Back to Product List</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
