import { CartItem, } from "@/types";
import {  createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemExist = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (itemExist) {
        itemExist.qty++;
      } else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
    },
    decrement: (state, action) => {
      const itemExist = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (itemExist) {
        itemExist.qty--;
      }
      if (itemExist?.qty === 0) {
        state.cartItems = state.cartItems.filter(
          (el) => el.product.id !== action.payload.id
        );
      }
    },
  },
});

//
const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemsQty = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => (total += curr.qty), 0)
);

export const TotalPrice = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, curr: CartItem) => (total += curr.qty * curr.product.price),
    0
  )
);

export const productQty = createSelector(
  [cartItems, (cartItems, productId: number) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product.id === productId)?.qty
);

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
