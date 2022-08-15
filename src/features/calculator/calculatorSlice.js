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
        case 'clear':     state.exp = ''; break;
        case 'brackets':  state.exp += (state.exp.match(/\(/g) || []).length - (state.exp.match(/\)/g) || []).length ? ')' : '('; break;
        case 'divide':    state.exp += '÷'; break;
        case 'multiply':  state.exp += '×'; break;
        case 'subtract':  state.exp += '-'; break;
        case 'add':       state.exp += '+'; break;
        case 'sign':      state.exp += Number(state.exp) * -1; break;
        case 'dot':       state.exp += '.'; break;
        case 'equals':    calcFunc( state ); break;
        default:          state.exp += action.payload;
      };

      // state.res = action.payload;
    },
    inputExp:   ( state, action ) => { state.exp = action.payload },

    back:       ( state, action ) => { 
      state.exp = state.exp.substring(0, state.exp.length - 1); 
    },
  },

});







const actions = {
  multiplication: {
    value: '×',
    label: 'multiplication',
    func: (a,b) => (parseInt(a) * parseInt(b))
  },
  division: {
    value: '÷',
    label: 'division',
    func: (a,b) => (a / b)
  },
  addition: {
    value: '+',
    label: 'addintion',
    func: (a,b) => (parseInt(a) + parseInt(b))
  },
  subtraction: {
    value: '-',
    label: 'subtraction',
    func: (a,b) => (parseInt(a) - parseInt(b))
  }
}

function calcFunc(state) {
  state.res = parseBrackets(state.exp);
}

function parseBrackets(str) {
  const out = str.match(/\((.*)\)/);
  if (out) {
    const expResult = parseBrackets(out[1]);
    str = str.replace(out[0], expResult);
    return calcExpr(str);
  } else {
    return calcExpr(str);
  }
}

function calcExpr(str) {
  let res;
  Object.keys(actions).map((type) => {
    res = parseExpr(str, actions[type]);
    if (res) {
      str = str.replace(res.str, res.value.toString());
      str = calcExpr(str);
    }
  });
  return str;
}
 
function parseExpr(str, action) {
  const reg = new RegExp(`((\\d+)\\s*\\${action.value}\\s*(\\d+))`);
  const out = str.match(reg);
  if (!out) return false;
  
  const result = {
    str: out[1]
  };
  
  result.value = action.func(out[2], out[3]);
  return result;
}








export const { setDisplay, setLeft, setTop, btnClick, inputExp, back} = calculatorSlice.actions;

export const calcDisplay  = ( state ) => state.calculator.display;
export const calcLeft     = ( state ) => state.calculator.left;
export const calcTop      = ( state ) => state.calculator.top;
export const getExp       = ( state ) => state.calculator.exp;
export const getRes       = ( state ) => state.calculator.res;
export const getLabel     = ( state ) => state.calculator.label;

export default calculatorSlice.reducer;
