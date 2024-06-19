import { Service } from "@/types/service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Cart = {
  id: number;
  title: string;
  price: number | undefined;
  image: string | undefined;
  qty: number;
};

export type Services = Omit<
  Service,
  "name" | "desc" | "video" | "photo" | "longDesc" | "images"
>;

const initialState: Cart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Services>) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, title, price, qty: 1, image });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQty: (state, action: PayloadAction<number>) => {
      const cartItem = state.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.qty += 1;
      }
    },
    decrementQty: (state, action: PayloadAction<number>) => {
      const cartItem = state.find((item) => item.id === action.payload);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
    },
    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQty,
  decrementQty,
} = cartSlice.actions;
export default cartSlice.reducer;
