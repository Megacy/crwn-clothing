import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const addCartItem = (cartItems, item) => {
  //find if the item is already in the cart
  // if it is, increase the quantity. if not, add it to the cart
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const value = { isOpen, setIsOpen, addItemToCart, cartItems };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
