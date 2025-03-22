import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const orderDetail = useSelector((state) => state.orderdetail);
  const PlacedOrder = useSelector((state) => state.cartList);
  const [totalPrice,setTotalPrice] = useState(); 
  useEffect(() =>{
      const totalPriceCal = PlacedOrder.reduce((acc,elem) => { return  acc + parseFloat(elem.quantity * elem.price)},0)
      setTotalPrice(totalPriceCal.toFixed(2))
    },[])
  return (
    <>
      <div className="container">
        <div className="confirmationBox">
          <h2>🎉 Hey {orderDetail.name}, Your Order Is Confirmed! ✅</h2>
          <p>
            Thank you for your purchase! Your order has been successfully
            placed.
          </p>
          <div className="orderSummary">
            <h3>Your Order</h3>
            <table>
              <tbody>
                {PlacedOrder.map((elem) =>{
                  return(
                    <tr>
                    <td>{elem.name}</td>
                    <td>${elem.price * elem.quantity}</td>
                  </tr>
                  )
                })}
                <tr className="total">
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>${totalPrice}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/" className="backToHome">
            Back to Product List
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
