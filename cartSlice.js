import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        item => item.id === newItem.id && item.size === newItem.size
      );
      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeFromCart(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.size === size);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;

      state.items = state.items.filter(item => !(item.id === id && item.size === size));
    },

    increaseQuantity(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.size === size);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalAmount += existingItem.price;
      }
    },

    decreaseQuantity(state, action) {
      const { id, size } = action.payload;
      const existingItem = state.items.find(item => item.id === id && item.size === size);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
