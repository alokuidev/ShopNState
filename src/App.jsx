import "./App.css";
import Checkout from "./Component/Checkout";
import Cart from "./Component/Cart";
import ProductList from "./Component/ProductList";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="heading">Shopping Cart 🛒</h1>
        <div className="main-content">
          {/* Product List */}
          <ProductList />
          {/* Cart Section */}
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
