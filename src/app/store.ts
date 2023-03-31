import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    categoriesSlice: categoriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
