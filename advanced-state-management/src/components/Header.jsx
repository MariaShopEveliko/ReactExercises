import { useRef, useContext } from "react";

import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";
import { ThemeContext } from "../store/theme-context.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);
  const themeCtx = useContext(ThemeContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <div>
          <p>
            <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
          </p>
          <p>
            <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
          </p>
        </div>
      </header>
    </>
  );
}
