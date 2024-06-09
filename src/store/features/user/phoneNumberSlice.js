import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  phoneNumber: '',
  
};

export const phoneNumberSlice = createSlice({
  name: 'phoneNumber',
  initialState,
  reducers: {
    savePhoneNumber: (state, action) => {
      
      state.phoneNumber = action.payload;
    },
  
  },
});

export const { savePhoneNumber} =
phoneNumberSlice.actions;
export const phoneNumberReduser = phoneNumberSlice.reducer;

