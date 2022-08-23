/* eslint-disable no-fallthrough */
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
        case 'set':       console.log( state.res ); 
        case 'clear':     state.exp = ''; state.res = ''; break;
        case 'brackets':  state.exp += (state.exp.match(/\(/g) || []).length - (state.exp.match(/\)/g) || []).length ? ')' : '('; state.res = calcFunc(state.exp); break;
        case 'divide':    state.exp += '÷'; state.res = calcFunc(state.exp); break;
        case 'multiply':  state.exp += '×'; state.res = calcFunc(state.exp); break;
        case 'subtract':  state.exp += '-'; state.res = calcFunc(state.exp); break;
        case 'add':       state.exp += '+'; state.res = calcFunc(state.exp); break;
        case 'sign':      state.exp += Number(state.exp) * -1; break;
        case 'dot':       state.exp += '.'; break;
        case 'equals':    state.exp = calcFunc( state.exp ); state.res = ''; break;
        default:          state.exp += action.payload; state.res = calcFunc(state.exp);
      };
    },
    inputExp: ( state, action ) => { state.exp = action.payload },
    back: ( state, action ) => { 
      state.exp = state.exp.substring(0, state.exp.length - 1); 
      state.res = calcFunc(state.exp); 
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


const calcFunc = ( exp ) => {
  const actions = [
    { value: '×', func: (a, b) => a * b },
    { value: '÷', func: (a, b) => a / b },
    { value: '+', func: (a, b) => a + b },
    { value: '-', func: (a, b) => a - b },
  ]
  const parseBrackets = (str) => {
    const out = str.match(/\((.*)\)/);
    if ( !out ) return calcExpr(str);
    return calcExpr( str.replace(out[0], parseBrackets(out[1])) );
  }
  const calcExpr = (str) => {
    actions.map( action => {
      const res = parseExpr(str, action);
      if ( res ) {
        str = str.replace(res.str, res.value.toString());
        str = calcExpr(str);
      }
      return action;
    });
    return str;
  }
  const parseExpr = (str, action) => {
    const out = str.match(`(([-]?\\d+\\.?\\d*)\\s*\\${action.value}\\s*([-]?\\d+\\.?\\d*))`);
    if ( !out ) return false;
    return { 
      str: out[1],
      value: action.func(Number(out[2]), Number(out[3]))
    };
  }
  return parseBrackets(exp);
}