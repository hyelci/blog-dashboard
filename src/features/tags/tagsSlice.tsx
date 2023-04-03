import {
  CreateTagRequest,
  TagDetails,
  TagsResponse,
} from "../../models/category.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { WIX_TEST_TOKEN } from "../../utils";

export interface TagsTypes {
  tagsLoading: boolean;
  tagsError: boolean;
  tagsResult?: TagsResponse;
  isLoading: boolean;
}

const initialState: TagsTypes = {
  tagsLoading: false,
  tagsError: false,
  tagsResult: { tags: [] },
  isLoading: false,
};

export const getTags = createAsyncThunk(
  "tags/getTags",
  async (_: void, thunkAPI: any) => {
    let url = "http://www.wixapis.com/blog/v3/tags/query";
    try {
      const resp = await axios.post(
        url,
        { filters: {} },
        {
          headers: {
            Authorization: WIX_TEST_TOKEN,
          },
        }
      );
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while creating the tag");
    }
  }
);

export const createTag = createAsyncThunk(
  "tags/createTag",
  async (value: CreateTagRequest, thunkAPI: any) => {
    let createTagUrl = `https://www.wixapis.com/blog/v3/tags`;
    try {
      const resp = await axios.post(createTagUrl, value, {
        headers: {
          Authorization: WIX_TEST_TOKEN,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while creating the tag");
    }
  }
);

const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    removeTag: (state, { payload }) => {
      const updatedList = state.tagsResult!.tags.filter(
        (singleTag: TagDetails) => singleTag.id !== payload
      );
      state.tagsResult!.tags = updatedList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.tagsLoading = true;
      })
      .addCase(getTags.fulfilled, (state, { payload }) => {
        state.tagsLoading = false;
        state.tagsResult = payload;
        state.tagsError = false;
      })
      .addCase(getTags.rejected, (state, { payload }) => {
        state.tagsLoading = false;
        state.tagsError = true;
      })

      .addCase(createTag.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTag.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tagsError = false;
      })
      .addCase(createTag.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { removeTag } = tagsSlice.actions;
export default tagsSlice.reducer;
