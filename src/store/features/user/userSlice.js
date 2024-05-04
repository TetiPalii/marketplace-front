import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  phoneNumber: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    savePhoneNumber: (state, action) => {
      
      state.phoneNumber = action.payload;
    },
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { savePhoneNumber, setIsLoggedIn, saveUserName } =
  userSlice.actions;
export const userReduser = userSlice.reducer;
