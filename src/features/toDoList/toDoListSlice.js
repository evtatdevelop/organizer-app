import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from './toDoListAPI';

const initialState = {
  data: [
    {
      id: 0,
      currensy: 'RUB',
      value: 1000,
      status: 'active',
    },
    {
      id: 1,
      currensy: 'THB',
      value: 3000,
      status: 'active',
    },
  ],
  status: 'idle',
}

export const getDataAsync = createAsyncThunk(
  'GET_DATA',
  async (amount) => {
    const response = await fetchData(amount);
    return response.data
  }
)

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    getTest: (state) => {     
      const tstAssets = [];

      state.data = [...tstAssets];
    },
    addAssets: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.push(action.payload);
      })
  }
});

export const { getTest, addAssets } = toDoListSlice.actions;

export const selectData = (state) => state.toDoList.data;

export const addYuan = (yuan) => (dispatch, getState) => {
  const existYuan = !!selectData(getState()).filter(item=>item.currensy === 'CNY').length;
  if ( !existYuan ) {
    dispatch(addAssets(yuan))
  }
};

export default toDoListSlice.reducer;