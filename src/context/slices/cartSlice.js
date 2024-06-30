import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value[index].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index >= 0) {
        state.value[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    decCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index >= 0 && state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.value));
      } else if (index >= 0 && state.value[index].quantity === 1) {
        state.value = state.value.filter((_, i) => i !== index);
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    removeFromCart(state, action) {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id,
      );
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    clearCart(state) {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, incCart, decCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
