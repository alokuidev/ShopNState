import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Shopping Cart 🛒</h1>

      <div className="main-content">
        {/* Product List */}

        <div className="product-list">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            productList.map((elem) => {
              return (
                <div className="product-card" key={elem.id}>
                  <img
                    src={elem.image}
                    alt="Product"
                    className="product-image"
                  />
                  <h2 className="product-title">
                    {elem.title.length > 15
                      ? elem.title.slice(0, 10) + "..."
                      : elem.title}
                  </h2>
                  <p className="product-price">${elem.price}</p>
                  <button className="add-btn">Add to Cart</button>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Section */}
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
      </div>
    </div>
  );
}

export default App;
