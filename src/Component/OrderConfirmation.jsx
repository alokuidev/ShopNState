import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  
  return (
    <>
      <div className="container">
        <div className="confirmationBox">
          <h2>🎉 Order Confirmed! ✅</h2>
          <p>
            Thank you for your purchase! Your order has been successfully
            placed.
          </p>
          <div className="orderSummary">
            <h3>Your Order</h3>
            <table>
              <tbody>
                <tr>
                  <td>Product Name 1</td>
                  <td>$49.99</td>
                </tr>
                <tr>
                  <td>Product Name 2</td>
                  <td>$29.99</td>
                </tr>
                <tr className="total">
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>$79.98</strong>
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
