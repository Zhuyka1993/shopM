import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // товари в корзині
  total: 0,  // загальна сума
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i._id === item._id);
      
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i._id !== action.payload);
      state.total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;