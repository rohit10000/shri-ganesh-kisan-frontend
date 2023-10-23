import './App.css';
import Footer from "./component/Footer";
import RouterFunction from "./component/Router";
import { CartProvider } from "./context/CartContext";
import { ShippingProvider } from "./context/ShippingContext";

function App() {
  return (
    <div className={"container"}>
        <CartProvider>
          <ShippingProvider>
            <RouterFunction />
            <Footer />
          </ShippingProvider>
        </CartProvider>
    </div>
  );
}

export default App;
