import { createContext } from "react";

export const CartContext = createContext({
    items: [], //it's good to add a default value
    addItemToCart: () => {}
});

