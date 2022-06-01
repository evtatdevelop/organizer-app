import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssets, getAsset, setAsset } from './assetsSliceAPI';

const initialState = {
  data: [],
  loading: false,
  sorted: [],
  showTools: false,
  currentAsset: {},
}

const sorting = ( assets ) => assets.filter(item => item.status === 'active');

export const getDataAsync = createAsyncThunk(
  'assets/getAssets',
  async () => await getAssets()
)

export const getOneAsset = createAsyncThunk(
  'assets/getAsset',
  async (id) => await getAsset(id)
)

export const saveAsset = createAsyncThunk(
  'assets/setAsset',
  async (data) => await setAsset(data)
)

export const assetsListSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    onShowTools: ( state ) => { state.showTools = !state.showTools },

    // Setting current values through the assetsForm
    setCurrCurrensy: (state, action) => { state.currentAsset.currensy = action.payload },
    setCurrValue: (state, action) => { state.currentAsset.value = action.payload },
    setCurrType: (state, action) => { state.currentAsset.type = action.payload },
    setCurrStatus: (state, action) => { state.currentAsset.status = action.payload ? 'active' : 'not_active' },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, ( state ) => { state.loading = true })
      .addCase(getDataAsync.fulfilled, ( state, action ) => {
        state.loading = false;
        state.data = action.payload;
        state.sorted = sorting(action.payload);
      })

      .addCase(getOneAsset.pending, ( state ) => { state.loading = true })
      .addCase(getOneAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAsset = action.payload;
        state.showTools = true;
      })

      .addCase(saveAsset.pending, ( state ) => { state.loading = true })
      .addCase(saveAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.showTools = false;
        state.currentAsset = {};
        console.log(action.payload);
      });
  }
});

export const { 
  onShowTools, 
  setCurrCurrensy, setCurrValue, setCurrStatus, setCurrType
} = assetsListSlice.actions;
export const data = ( state ) => state.assets.data;
export const assets = ( state ) => state.assets.sorted;
export const loading = ( state ) => state.assets.loading;
export const showTools = ( state ) => state.assets.showTools;
export const currentAsset = ( state ) => state.assets.currentAsset;

export default assetsListSlice.reducer;
