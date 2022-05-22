import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssets } from './assetsListSliceAPI';

const initialState = {
  data: [],
  status: 'idle',
  sorted: [],
  expanded: false,
}

const sorting = ( assets ) => assets.filter(item => item.status === 'active');

export const getDataAsync = createAsyncThunk(
  'assetsList/getAssets',
  async () => await getAssets()
)

export const assetsListSlice = createSlice({
  name: 'assetsList',
  initialState,
  reducers: {
    showAll: ( state ) => {
      state.expanded 
      ? state.sorted = sorting(state.data)
      : state.sorted = state.data;
      state.expanded = !state.expanded;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, ( state ) => {
        state.status = 'loading';
      })
      .addCase(getDataAsync.fulfilled, ( state, action ) => {
        state.status = 'idle';
        state.data = action.payload;
        const sorted = sorting(action.payload)
        state.sorted = [...sorted];
      })
  }
});

export const { showAll } = assetsListSlice.actions;
export const assets = ( state ) => state.assetsList.sorted;
export const status = ( state ) => state.assetsList.status;
export const expanded = ( state ) => state.assetsList.expanded;

export default assetsListSlice.reducer;
