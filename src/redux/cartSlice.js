// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Savatga mahsulot qo'shish
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Agar mahsulot mavjud bo'lsa, miqdorini oshiramiz
        existingItem.quantity += 1;
      } else {
        // Yangi mahsulotni qo'shamiz
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Savatdan mahsulotni olib tashlash
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // Savatni tozalash
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
