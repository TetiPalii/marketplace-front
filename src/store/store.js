import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReduser,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};
