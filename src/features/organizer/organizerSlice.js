import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDays } from './organizerSliceAPI';

const initialState = {
  loading: false,
  display: 'month',
  days: [],
  time: Date.now(),
}


export const getMonth = createAsyncThunk( 'organizer/getDays', async ( MonthDay ) => {
  const monthDate = new Date(MonthDay),
        year = monthDate.getFullYear(),
        month = monthDate.getMonth(),
        date = new Date(year, month, 1),
        from = date.getTime(),
        to = new Date(year, month + 1, 0, 23, 59, 59, 999 ).getTime();
  
  const response = await getDays(from, to);
  // console.log(response);

  const onejan = new Date(year,0,1), 
        onejanDay = onejan.getDay(),
        result = [];
  let day =  new Date(year, month, 1).getDay();
  if ( day > 0 ) while ( day-- > 1 ) result.push({'key': Math.random(),});
  while ( date.getMonth() === month ) {
    const dateNumber = date.getDate(),
          key = `${year}.${month}.${dateNumber}`,
          day = date.getDay(),
          dayName = date.toLocaleString('en', { weekday: 'short' }),
          startDayTime = date.getTime(),
          endDayTime = startDayTime + 86399999,
          weekNumber = Math.ceil((((date - onejan) / 86400000) + onejanDay ) / 7) - Math.floor(onejanDay / 4),
          data = response.filter(item => item.date > startDayTime && item.date < endDayTime);
          result.push({key, dateNumber, day, dayName, startDayTime, endDayTime, weekNumber, data}); 
    date.setDate(dateNumber + 1);
  }
  return result;
})


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
        state.time = action.payload[7]['startDayTime'] //TODO: 
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


// const getMonthDays = (year, month) => {
//   const date = new Date(year, month, 1),
//         onejan = new Date(year,0,1), onejanDay = onejan.getDay(),
//         result = [];
//         let day =  new Date(year, month, 1).getDay();
//         if ( day > 0 ) while ( day-- > 1 ) result.push({'key': Math.random(),});

//   while ( date.getMonth() === month ) {
//     const dateNumber = date.getDate(),
//           key = `${year}.${month}.${dateNumber}`,
//           day = date.getDay(),
//           dayName = date.toLocaleString('en', { weekday: 'long' }),
//           startDayTime = date.getTime(),
//           endDayTime = startDayTime + 86399999,
//           weekNumber = Math.ceil((((date - onejan) / 86400000) + onejanDay ) / 7) - Math.floor(onejanDay / 4);
//     result.push({key, dateNumber, day, dayName, startDayTime, endDayTime, weekNumber}); 
//     date.setDate(dateNumber + 1);
//   }
//   return result;
// }



export default organizerSlice.reducer;
