import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssets } from './assetsSliceAPI';

const initialState = {
  data: [],
  status: 'idle',
  sorted: [],
  expanded: false,
  showForm: false,
}

const sorting = ( assets ) => assets.filter(item => item.status === 'active');

export const getDataAsync = createAsyncThunk(
  'assets/getAssets',
  async () => await getAssets()
)

export const assetsListSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    showAll: ( state ) => {
      state.expanded 
      ? state.sorted = sorting(state.data)
      : state.sorted = state.data;
      state.expanded = !state.expanded;
    },

    onShowForm: ( state, show ) => {
      state.showForm = !state.showForm;
    }
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

export const { showAll, onShowForm } = assetsListSlice.actions;
export const assets = ( state ) => state.assets.sorted;
export const status = ( state ) => state.assets.status;
export const expanded = ( state ) => state.assets.expanded;
export const showForm = ( state ) => state.assets.showForm;

export default assetsListSlice.reducer;
