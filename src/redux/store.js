import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cars } from "./slices/carsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cars"],
};

const customCombine = combineReducers({
  cars,
});

const customPersist = persistReducer(persistConfig, customCombine);

const store = configureStore({
  reducer: customPersist,
  // used chatgpt to solve the serializable error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const presistor = persistStore(store);

export default store;
