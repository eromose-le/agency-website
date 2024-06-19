"use client";
import { Cart } from "@/redux/slices/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

export default function CartLength() {
  const cartItems = useSelector((state: { cart: Cart[] }) => state.cart);
  const cartLength = cartItems.length;
  return <span>{cartLength}</span>;
}
