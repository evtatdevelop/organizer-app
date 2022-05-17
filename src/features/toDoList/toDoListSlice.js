import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from './toDoListAPI';

const initialState = {
  data: [],
  status: 'idle',
  btnUan: false,
}

export const getDataAsync = createAsyncThunk(
  'GET_DATA',
  async (data) => {
    const response = await fetchData(data);
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
        state.data = [...action.payload];
        state.btnUan = true; 
      })
  }
});

export const { getTest, addAssets } = toDoListSlice.actions;

export const selectData = (state) => state.toDoList.data;
export const showBtnUan = (state) => state.toDoList.btnUan;

export const addYuan = (yuan) => (dispatch, getState) => {
  const existYuan = !!selectData(getState()).filter(item=>item.currensy === 'CNY').length;
  if ( !existYuan ) {
    dispatch(addAssets(yuan))
  }
};

export default toDoListSlice.reducer;