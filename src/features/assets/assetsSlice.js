import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssets, getAsset } from './assetsSliceAPI';

const initialState = {
  data: [],
  loading: false,
  sorted: [],
  showForm: false,
  currentAsset: {},
}

const sorting = ( assets ) => assets.filter(item => item.status === 'active');

export const getDataAsync = createAsyncThunk(
  'assets/getAssets',
  async () => await getAssets()
)

export const getOneAsset =createAsyncThunk(
  'assets/getAsset',
  async (id) => await getAsset(id)
)

export const assetsListSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    onShowForm: ( state ) => {
      state.showForm = !state.showForm;
    },
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, ( state ) => {
        state.loading = true;
      })
      .addCase(getDataAsync.fulfilled, ( state, action ) => {
        state.loading = false;
        state.data = action.payload;
        state.sorted = sorting(action.payload);
      })

      .addCase(getOneAsset.pending, ( state ) => {
        state.loading = true;
      })
      .addCase(getOneAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAsset = action.payload;
      });
  }
});

export const { onShowForm } = assetsListSlice.actions;
export const data = ( state ) => state.assets.data;
export const assets = ( state ) => state.assets.sorted;
export const loading = ( state ) => state.assets.loading;
export const showForm = ( state ) => state.assets.showForm;

export default assetsListSlice.reducer;
