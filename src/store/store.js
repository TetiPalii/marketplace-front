import { configureStore } from '@reduxjs/toolkit';
import { userReduser } from './features/user/userSlice';
import { burgerReducer } from './features/user/burgerSlice';

export const makeStore = () => {
  // console.log(userReduser);
  return configureStore({
    reducer: {
      user: userReduser,
      burger: burgerReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};
