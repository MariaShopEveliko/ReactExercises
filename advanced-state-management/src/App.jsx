import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import ThemeContextProvider, { ThemeContext } from "./store/theme-context.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {(themeCtx) => (
          <div className={`theme-${themeCtx.theme}`}>
            <CartContextProvider>
              <Header />
              <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Product {...product} />
                  </li>
                ))}
              </Shop>
            </CartContextProvider>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default App;
