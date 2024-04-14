import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: true,
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    closeBurgerMenu: state => {
      state.menuOpen = false;
    },
  },
});

export const { closeBurgerMenu } = burgerSlice.actions;

export const burgerReducer = burgerSlice.reducer;
