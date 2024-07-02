import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productReducer } from './features/product/productSlice';
import { phoneNumberReduser } from './features/user/phoneNumberSlice';
import { userProfileReduser } from './features/user/userProfileSlice';
import { storage } from './storage';

const rootReducer = combineReducers({
  user: userProfileReduser,
  phoneNumber: phoneNumberReduser,
  product: productReducer

});

const persistConfig = {
  key: 'user',
  storage,

};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export let persistor = persistStore(store as AppStore);
