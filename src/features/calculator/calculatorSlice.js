import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display:  'grid',
  left:     1,
  top:      1,
}


export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDisplay: ( state, action ) => { state.display = action.payload },
    setLeft:    ( state, action ) => { state.left = action.payload },
    setTop:     ( state, action ) => { state.top = action.payload },

  },

});

export const { setDisplay, setLeft, setTop, } = calculatorSlice.actions;

export const calcDisplay  = ( state ) => state.calculator.display;
export const calcLeft     = ( state ) => state.calculator.left;
export const calcTop      = ( state ) => state.calculator.top;

export default calculatorSlice.reducer;
