import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import categoriesSlice from "../features/categories/categoriesSlice";
import tagsSlice from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    categoriesSlice: categoriesSlice,
    tagsSlice: tagsSlice,
    postsSlice: postsSlice,
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
