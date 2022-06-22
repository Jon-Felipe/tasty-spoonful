import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialFilterState = {
  search: '',
};

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  recipes: [],
  recipe: {},
  ...initialFilterState,
};

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (_, thunkAPI) => {
    const { search } = thunkAPI.getState().recipe;
    try {
      const response = await customFetch.get(
        `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategoryRecipes = createAsyncThunk(
  'recipes/getByCategory',
  async (type, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${type}&addRecipeNutrition=true`
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleRecipe = createAsyncThunk(
  'recipes/getSingleRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearState: () => initialState,
  },
  extraReducers: {
    [getRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [getRecipes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.recipes = payload;
    },
    [getRecipes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
    },
    [getCategoryRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategoryRecipes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.recipes = payload;
    },
    [getCategoryRecipes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
    },
    [getSingleRecipe.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleRecipe.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.recipe = payload;
    },
    [getSingleRecipe.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
    },
  },
});

export const { openSidebar, closeSidebar, handleChange, clearState } =
  recipeSlice.actions;

export default recipeSlice.reducer;
