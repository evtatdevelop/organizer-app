import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDays } from './organizerSliceAPI';

const data = new Date()
const initialState = {
  loading: false,
  display: 'month',
  days: [],
  year: data.getFullYear(),
  month: data.getMonth(),
  day: data.getDate(),
}

export const getMonth = createAsyncThunk( 'organizer/getDays', async ( MonthDay ) => {
  const monthDate = new Date(MonthDay),
        year = monthDate.getFullYear(),
        month = monthDate.getMonth(),
        date = new Date(year, month, 1),
        from = date.getTime(),
        to = new Date(year, month + 1, 0, 23, 59, 59, 999 ).getTime();
  
  const response = await getDays(from, to); // console.log(response);

  const onejan = new Date(year,0,1), 
        onejanDay = onejan.getDay(),
        result = [];
  let day =  new Date(year, month, 1).getDay();
  if ( day > 0 ) while ( day-- > 1 ) result.push({'key': Math.random(),});
  while ( date.getMonth() === month ) {
    const dateNumber = date.getDate(),
          key = `${year}.${month}.${dateNumber}`,
          day = date.getDay(),
          monthName = date.toLocaleString('en', { month: 'long' }),
          dayName = date.toLocaleString('en', { weekday: 'short' }),
          dayNameLong = date.toLocaleString('en', { weekday: 'long' }),
          startDayTime = date.getTime(),
          endDayTime = startDayTime + 86399999,
          weekNumber = Math.ceil((((date - onejan) / 86400000) + onejanDay ) / 7) - Math.floor(onejanDay / 4),
          data = response.filter(item => item.date > startDayTime && item.date < endDayTime);
          result.push({key, dateNumber, day, dayName, dayNameLong, monthName, startDayTime, endDayTime, weekNumber, data}); 
    date.setDate(dateNumber + 1);
  }
  return result;
})


export const organizerSlice = createSlice({
  name: 'organizer',
  initialState,
  reducers: {
    setDisplayMode: ( state, action ) => { state.display = action.payload },
    setDay: ( state, action ) => { state.day = action.payload },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMonth.pending, ( state ) => { state.loading = true })
      .addCase(getMonth.fulfilled, ( state, action ) => {
        state.loading = false;
        const date = new Date(action.payload[7]['startDayTime'])
        state.year = date.getFullYear();
        state.month = date.getMonth();
        state.days = action.payload
      })
  }
});

export const { 
  setDisplayMode, setDay
} = organizerSlice.actions;

export const loading = ( state ) => state.organizer.loading;
export const days = ( state ) => state.organizer.days;
export const display = ( state ) => state.organizer.display;
export const currYear = ( state ) => state.organizer.year;
export const currMonth = ( state ) => state.organizer.month;
export const currDay = ( state ) => state.organizer.day;

export default organizerSlice.reducer;
