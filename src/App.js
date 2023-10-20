import './App.css';
import Footer from "./component/Footer";
import RouterFunction from "./component/Router";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className={"container"}>
        <CartProvider>
            <RouterFunction />
            <Footer />
        </CartProvider>
    </div>
  );
}

export default App;
