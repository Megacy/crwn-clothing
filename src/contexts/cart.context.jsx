import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
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

export const removeCartItem = (cartItems, item) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );
  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };
  const removeItemFromCart = (item) => {
    setCartItems(removeCartItem(cartItems, item));
  };
  const clearItemFromCart = (item) => {
    setCartItems(clearCartItem(cartItems, item));
  };
  const value = {
    isOpen,
    setIsOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
