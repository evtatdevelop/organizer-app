import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssets } from './assetsListSliceAPI';

const initialState = {
  data: [],
  status: 'idle',
}

export const getDataAsync = createAsyncThunk(
  'assetsList/getAssets',
  async () => await getAssets()
)

export const assetsListSlice = createSlice({
  name: 'assetsList',
  initialState,
  reducers: {
    addAssets: (state, action) => {
      state.data = [...action.payload];
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = [...action.payload];
      })
  }
});

export const { addAssets } = assetsListSlice.actions;
export const assets = (state) => state.assetsList.data;
export const status = (state) => state.assetsList.status;

export default assetsListSlice.reducer;