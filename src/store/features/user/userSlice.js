import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    savePhoneNumber: (state, action) => {
      // console.log(action.payload);
      state.phoneNumber = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = action.payload;
    },
  },
});

export const { savePhoneNumber, setIsLoggedIn } = userSlice.actions;
export const userReduser = userSlice.reducer;
