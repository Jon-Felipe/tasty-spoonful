import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialFilterState = {
  search: '',
  cuisine: '',
  diet: '',
};

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  recipes: [],
  recipe: {},
  recipeNutrition: {},
  ...initialFilterState,
};

export const getRecipes = createAsyncThunk(
  'recipes/getRecipes',
  async (type, thunkAPI) => {
    const { diet, cuisine } = thunkAPI.getState().recipe;
    try {
      const response = await customFetch.get(
        `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${type}&cuisine=${cuisine}&diet=${diet}`
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

export const getRecipeNutrition = createAsyncThunk(
  'recipe/getRecipeNutrition',
  async (id, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`
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
    clearFilters: (state) => {
      return { ...state, ...initialFilterState };
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
    [getRecipeNutrition.fulfilled]: (state, { payload }) => {
      state.recipeNutrition = payload;
    },
    [getRecipeNutrition.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  handleChange,
  clearFilters,
  clearState,
} = recipeSlice.actions;

export default recipeSlice.reducer;
