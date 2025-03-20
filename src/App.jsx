import "./App.css";
import ProductList from "./Component/ProductList";
import Checkout from "./Component/Checkout";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderConfirmation from "./Component/OrderConfirmation";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <h1 className="heading">Shopping Cart 🛒</h1>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/OrderConfirmation"
                element={<OrderConfirmation />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
