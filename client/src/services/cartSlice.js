import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id, name, image, desc } = action.payload;
      const existingItem = state.value.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.value.push({ id, name, image, desc, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const index = state.value.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const currentItem = state.value[index];
        if (currentItem.quantity > 1) {
          currentItem.quantity--;
        } else {
          state.value.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { increment, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
