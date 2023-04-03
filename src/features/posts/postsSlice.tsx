import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  BlogsResponse,
  CreatePostRequest,
  PostDetails,
} from "../../models/category.interface";
import { WIX_TEST_TOKEN } from "../../utils";

export interface PostsTypes {
  postsLoading: boolean;
  postsError: boolean;
  postsResult?: BlogsResponse;
  isLoading: boolean;
  selectedPost?: PostDetails;
  postLoading: boolean;
  postError: boolean;
  editError: boolean;
}

const initialState: PostsTypes = {
  postsLoading: false,
  postsError: false,
  postsResult: { draftPosts: [] },
  isLoading: false,
  postLoading: false,
  postError: false,
  editError: false,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_: void, thunkAPI: any) => {
    let getPostURL = `https://www.wixapis.com/blog/v3/draft-posts`;
    try {
      const resp = await axios.get(getPostURL, {
        headers: {
          Authorization: WIX_TEST_TOKEN,
        },
      });
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while getting the posts");
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (value: CreatePostRequest, thunkAPI: any) => {
    let createURL = `https://www.wixapis.com/blog/v3/draft-posts`;

    try {
      const resp = await axios.post(
        createURL,
        { draftPost: value },
        {
          headers: {
            Authorization: WIX_TEST_TOKEN,
          },
        }
      );
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while creating the post ");
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/getPost",
  async (id: string, thunkAPI: any) => {
    let getPostURL = `https://www.wixapis.com/blog/v3/draft-posts/${id}`;
    try {
      const resp = await axios.get(getPostURL, {
        headers: {
          Authorization: WIX_TEST_TOKEN,
        },
      });
      return resp.data.draftPost;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while getting the post");
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (value: PostDetails, thunkAPI: any) => {
    let editUrl = `https://www.wixapis.com/blog/v3/draft-posts/${value.id}`;
    try {
      const resp = await axios.patch(
        editUrl,
        { draftPost: value },
        {
          headers: {
            Authorization: WIX_TEST_TOKEN,
          },
        }
      );
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while deleting the post");
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: string, thunkAPI: any) => {
    let deleteURL = `https://www.wixapis.com/blog/v3/draft-posts/${id}`;
    try {
      const resp = await axios.delete(deleteURL, {
        headers: {
          Authorization: WIX_TEST_TOKEN,
        },
      });
      thunkAPI.dispatch(getPosts());
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue("Error while deleting the post");
    }
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.postsLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.postsLoading = false;
        state.postsResult = payload;
        state.postsError = false;
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.postsLoading = false;
        state.postsError = true;
      })

      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postsError = false;
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(getPost.pending, (state) => {
        state.postLoading = true;
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        state.postLoading = false;
        state.selectedPost = payload;
        state.postError = false;
      })
      .addCase(getPost.rejected, (state, { payload }) => {
        state.postLoading = false;
        state.postError = true;
      })

      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPost.fulfilled, (state) => {
        state.isLoading = false;
        state.editError = false;
      })
      .addCase(editPost.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.editError = true;
      });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
