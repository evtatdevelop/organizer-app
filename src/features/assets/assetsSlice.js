import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssets, getAsset, setAsset, addAsset, delAsset } from './assetsSliceAPI';

const initialState = {
  data: [],
  loading: false,
  sorted: [],
  showTools: '',
  currentAsset: {},
}

const sorting = (state) => {state.sorted = state.data.filter(item => item.status === 'active')};

export const getDataAsync = createAsyncThunk('assets/getAssets',
  async () => await getAssets()
)
export const getOneAsset = createAsyncThunk('assets/getAsset',
  async ( id ) => await getAsset(id)
)
export const saveAsset = createAsyncThunk('assets/setAsset',
  async ( data ) => await setAsset(data)
)
export const newAsset = createAsyncThunk('assets/addAsset',
  async ( data ) => await addAsset(data)
)
export const removeAsset = createAsyncThunk('assets/delAsset',
  async ( id ) => await delAsset(id)
)

export const assetsListSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    onShowTools: ( state, action ) => {
      state.showTools = action.payload === 'close' ? 'open' : 'close';
      state.currentAsset = {}
    },

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
        sorting(state);
      })

      .addCase(getOneAsset.pending, ( state ) => { state.loading = true })
      .addCase(getOneAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.showTools = 'close';
        state.currentAsset = action.payload;
        
      })

      .addCase(saveAsset.pending, ( state ) => { state.loading = true })
      .addCase(saveAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.showTools = 'open';
        state.currentAsset = {};
        state.data = [
          ...state.data.filter(item => +item.id !== +action.payload.id),
          action.payload
        ]
        sorting(state);
      })

      .addCase(newAsset.pending, ( state ) => { state.loading = true })
      .addCase(newAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.showTools = 'open';
        state.currentAsset = {};
        state.data = [...state.data, action.payload];
        sorting(state);
        console.log(action.payload);
      })

      .addCase(removeAsset.pending, ( state ) => { state.loading = true })
      .addCase(removeAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.showTools = 'open';
        state.currentAsset = {};
        state.data = state.data.filter(item => +item.id !== +action.payload)
        sorting(state);
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
