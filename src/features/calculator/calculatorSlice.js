import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display:  'flex',
  left:     100,
  top:      100,
  exp:      '',
  res:      '',
  label:    'Calculator',
}


export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDisplay: ( state, action ) => { state.display = action.payload },
    setLeft:    ( state, action ) => { state.left = action.payload },
    setTop:     ( state, action ) => { state.top = action.payload },
    btnClick:   ( state, action ) => { 
      switch ( action.payload ) {
        case 'set': state.exp += action.payload; break;
        case 'clear': state.exp = ''; break;
        case 'brackets': state.exp += '()'; break;
        case 'divide': state.exp += '/'; break;
        case 'multiply': state.exp += '*'; break;
        case 'subtract': state.exp += '-'; break;
        case 'add': state.exp += '+'; break;
        case 'sign': state.exp += Number(state.exp) * -1; break;
        case 'dot': state.exp += '.'; break;
        case 'equals': console.log(state.exp); break;
        default: state.exp += action.payload;
      };

      state.res = action.payload;
    },
    inputExp:   ( state, action ) => { state.exp = action.payload },

    back:       ( state, action ) => { 
      state.exp = state.exp.substring(0, state.exp.length - 1); 
    },
  },

});

export const { setDisplay, setLeft, setTop, btnClick, inputExp, back} = calculatorSlice.actions;

export const calcDisplay  = ( state ) => state.calculator.display;
export const calcLeft     = ( state ) => state.calculator.left;
export const calcTop      = ( state ) => state.calculator.top;
export const getExp       = ( state ) => state.calculator.exp;
export const getRes       = ( state ) => state.calculator.res;
export const getLabel     = ( state ) => state.calculator.label;

export default calculatorSlice.reducer;
