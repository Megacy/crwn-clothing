import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { DropdownContext } from "../../contexts/dropdown.context";
import { useContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(DropdownContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
