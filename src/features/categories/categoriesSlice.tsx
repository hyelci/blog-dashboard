import {
  CategoriesResponse,
  CategoryDetails,
  CreateCategoryRequest,
  TagsResponse,
} from "../../models/category.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WIX_TEST_TOKEN } from "../../utils";

export interface CategoriesTypes {
  categoriesLoading: boolean;
  categoriesError: boolean;
  categoriesResult?: CategoriesResponse;
  isLoading: boolean;
  label?: string;
  description: string;
  title?: string;
  isEditing: boolean;
  editError: boolean;
  selectedCategory?: CategoryDetails;
  categoryLoading: boolean;
  categoryError: boolean;
  editCategoryId?: string;
}

const initialState: CategoriesTypes = {
  categoriesLoading: false,
  categoriesError: false,
  categoriesResult: { categories: [] },
  isLoading: false,
  label: "",
  description: "",
  title: "",
  isEditing: false,
  editError: false,
  categoryLoading: false,
  categoryError: false,
  editCategoryId: "",
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_: void, thunkAPI: any) => {
    let url = "https://www.wixapis.com/blog/v3/categories";
    try {
      const resp = await axios.get(url, {
        headers: {
          Authorization: WIX_TEST_TOKEN,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while getting the categories");
    }
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (value: CreateCategoryRequest, thunkAPI: any) => {
    let createUrl = `https://www.wixapis.com/blog/v3/categories`;
    try {
      const resp = await axios.post(
        createUrl,
        { category: value },
        {
          headers: {
            Authorization: WIX_TEST_TOKEN,
          },
        }
      );
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while creating the category");
    }
  }
);

export const getCategory = createAsyncThunk(
  "categories/editInfo",
  async (id: string, thunkAPI: any) => {
    let getCategoryUrl = `https://www.wixapis.com/blog/v3/categories/${id}`;

    try {
      const resp = await axios.get(getCategoryUrl, {
        headers: {
          Authorization: WIX_TEST_TOKEN,
        },
      });
      return resp.data.category;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while getting news");
    }
  }
);

export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async (value: CategoryDetails, thunkAPI: any) => {
    let editUrl = `https://www.wixapis.com/blog/v3/categories/${value.id}`;
    try {
      const resp = await axios.patch(
        editUrl,
        { category: value },
        {
          headers: {
            Authorization: WIX_TEST_TOKEN,
          },
        }
      );
      // thunkAPI.dispatch(clearValues());
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while deleting the category");
    }
  }
);

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,

  reducers: {
    removeCategory: (state, { payload }) => {
      const updatedList = state.categoriesResult!.categories.filter(
        (singleCategory: CategoryDetails) => singleCategory.id !== payload
      );

      state.categoriesResult!.categories = updatedList;
    },

    clearValues: (state, { payload }) => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categoriesLoading = false;
        state.categoriesResult = payload;
        state.categoriesError = false;
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        state.categoriesLoading = false;
        state.categoriesError = true;
      })

      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categoriesError = false;
      })
      .addCase(createCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(getCategory.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.categoryLoading = false;
        state.selectedCategory = payload;
        state.categoryError = false;
      })
      .addCase(getCategory.rejected, (state, { payload }) => {
        state.categoryLoading = false;
        state.categoryError = true;
      })

      .addCase(editCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editCategory.fulfilled, (state) => {
        state.isLoading = false;
        state.editError = false;
      })
      .addCase(editCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.editError = true;
      });
  },
});

export const { removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
