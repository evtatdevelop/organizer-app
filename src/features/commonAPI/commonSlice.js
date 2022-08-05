import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIRates, getInstantBalance } from './commonAPI';

const initialState = {
  loading:  false,
  rates:    [],
  instBalance: null,
}

export const getRates = createAsyncThunk('common/rates', async () => {
  const rates_data = localStorage.getItem('rates_data')
  const now = Date.now();
  if ( !rates_data || now > Number(rates_data) + 12*60*60*1000 ) {
    localStorage.setItem('rates_data', now);
    return await APIRates();
  }
})


export const instantBalance = createAsyncThunk('common/getDayBalance', async ( time ) => await getInstantBalance(time) )

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getRates.pending, ( state ) => { state.loading = true })
      .addCase(getRates.fulfilled, (state, action) => {
        const rates = [];
        let strRates = '';       
        if ( action.payload ) {
          Object.values(action.payload).map(item => {
            const { code, name, rate, inverseRate } = item;
            const itemStr = `${code}/${name}/${rate}/${inverseRate}`;
            strRates += strRates ? `|${itemStr}` : itemStr;
            rates.push({code, name, rate, inverseRate});
            return item;
          })
          localStorage.setItem('rates', strRates)
        } else {
          strRates = localStorage.getItem('rates')
          if ( strRates ) {
            strRates.split('|').map(item => {
              const strCurrency = item.split('/');
              rates.push({
                code:         strCurrency[0],
                name:         strCurrency[1],
                rate:         Number(strCurrency[2]),
                inverseRate:  Number(strCurrency[3])
              })
              return item;
            })            
          }
        }
        state.rates = rates
        state.loading = false;
      })

      
      .addCase(instantBalance.pending, ( state ) => { state.loading = true })
      .addCase(instantBalance.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.instBalance = action.payload
      })
  }
});

// export const { 
//   setDisplayMode, setDay, onShowForm, setCurrEvent, onRegForm,
//   setEventName, setEventDate, setEventDesc, setEventType, setEventValue, setEventCurrency, setEventCash, setEventStatus, setRegPeriod, setLastDate
// } = commonSlice.actions;

export const loading      = ( state ) => state.common.loading;
export const rates        = ( state ) => state.common.rates;
export const instBalance  = ( state ) => state.common.instBalance;

export default commonSlice.reducer;
