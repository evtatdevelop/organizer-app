import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDays } from './organizerSliceAPI';

const initialState = {
  loading: false,
  display: 'month',
  days: [],
  time: Date.now(),
}


export const getMonth = createAsyncThunk( 'organizer/getDays', async ( MonthDay ) => {
  
  const date = new Date(MonthDay)
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstMonthDay = new Date(new Date(year, month, 1, 0 )).getTime();
  const lastMonthDay = new Date(year, month + 1, 0, 23, 59, 59, 999 ).getTime();

  let response = await getDays(firstMonthDay, lastMonthDay);
  response = getMonthDays( year, month)
  
  return response
} )


export const organizerSlice = createSlice({
  name: 'organizer',
  initialState,
  reducers: {

    setDisplayMode: ( state, action ) => {
      state.display = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getMonth.pending, ( state ) => { state.loading = true })
      .addCase(getMonth.fulfilled, ( state, action ) => {
        state.loading = false;
        state.time = action.payload[7]['startDayTime']
        state.days = action.payload
      })
  }
});

export const { 
  setDisplayMode
} = organizerSlice.actions;

export const loading = ( state ) => state.organizer.loading;
export const days = ( state ) => state.organizer.days;
export const time = ( state ) => state.organizer.time;
export const display = ( state ) => state.organizer.display;


const getMonthDays = (year, month) => {
  const date = new Date(year, month, 1),
        onejan = new Date(year,0,1), onejanDay = onejan.getDay(),
        result = [];
        let day =  new Date(year, month, 1).getDay();
        if ( day > 0 ) while ( day-- > 1 ) result.push({'key': Math.random(),});

  while ( date.getMonth() === month ) {
    const dateNumber = date.getDate(),
          key = `${year}.${month}.${dateNumber}`,
          day = date.getDay(),
          dayName = date.toLocaleString('en', { weekday: 'long' }),
          startDayTime = date.getTime(),
          endDayTime = startDayTime + 86399999,
          weekNumber = Math.ceil((((date - onejan) / 86400000) + onejanDay ) / 7) - Math.floor(onejanDay / 4);
    result.push({key, dateNumber, day, dayName, startDayTime, endDayTime, weekNumber}); 
    date.setDate(dateNumber + 1);
  }
  return result;
}



export default organizerSlice.reducer;
