import { clearCart } from "@/redux/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const CartClearButton = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return <button onClick={handleClearCart}>Clear Cart</button>;
};

export default CartClearButton;
