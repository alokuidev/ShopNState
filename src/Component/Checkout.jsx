const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Checkout 🛍️</h1>

      <div className="checkout-main">
        {/* Cart Summary */}
        <div className="checkout-summary">
          <h2>Your Order</h2>
          <div className="order-item">
            <p>Product Name 1</p>
            <span>$49.99</span>
          </div>
          <div className="order-item">
            <p>Product Name 2</p>
            <span>$29.99</span>
          </div>
          <div className="order-item total">
            <p>
              <strong>Total</strong>
            </p>
            <span>
              <strong>$79.98</strong>
            </span>
          </div>
        </div>

        {/* Billing Details */}
        <div className="checkout-form">
          <h2>Billing Details</h2>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="you@example.com" />

            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="123 Main Street" />

            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="New York" />

            <label htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" placeholder="10001" />

            <button type="submit" className="checkout-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
