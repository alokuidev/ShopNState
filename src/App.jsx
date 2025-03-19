import "./App.css";
import Checkout from "./Component/Checkout";
import Cart from "./Component/Cart";
import ProductList from "./Component/ProductList";
import { Provider } from "react-redux";
import store from "./Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="heading">Shopping Cart 🛒</h1>
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
      <Checkout/>
    </Provider>
  );
}

export default App;
