import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDays } from './organizerSliceAPI';

const data = new Date();
const initialState = {
  loading:      false,
  display:      'month',
  days:         [],
  year:         data.getFullYear(),
  month:        data.getMonth(),
  day:          data.getDate(),
  showForm:     false,
  currentEvent: {}
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
          monthNumber = month,
          monthName = date.toLocaleString('en', { month: 'long' }),
          dayName = date.toLocaleString('en', { weekday: 'short' }),
          dayNameLong = date.toLocaleString('en', { weekday: 'long' }),
          startDayTime = date.getTime(),
          endDayTime = startDayTime + 86399999,
          weekNumber = Math.ceil((((date - onejan) / 86400000) + onejanDay ) / 7) - Math.floor(onejanDay / 4),
          data = response.filter(item => item.date > startDayTime && item.date < endDayTime);
          result.push({key, dateNumber, day, dayName, dayNameLong, monthNumber, monthName, startDayTime, endDayTime, weekNumber, data}); 
    date.setDate(dateNumber + 1);
  }
  return result;
})


export const organizerSlice = createSlice({
  name: 'organizer',
  initialState,
  reducers: {
    setDisplayMode: ( state, action ) => { state.display                  = action.payload },
    setDay:         ( state, action ) => { state.day                      = action.payload },
    setEventName:   ( state, action ) => { state.currentEvent.name        = action.payload },
    setEventDesc:   ( state, action ) => { state.currentEvent.description = action.payload },
    setEventType:   ( state, action ) => { state.currentEvent.type        = action.payload },
    setEventValue:  ( state, action ) => { state.currentEvent.value       = action.payload },
    setEventCash:   ( state, action ) => { state.currentEvent.cash        = action.payload },
    setEventStatus: ( state, action ) => { state.currentEvent.status      = action.payload },

    onShowForm: ( state, action ) => {
      state.showForm = action.payload;
      setDefaultEvent(state);
    },

    setEventDate: (state, action) => { 
      let date = action.payload;   
      if ( date.includes(':') ) {
        const splitInput = date.split(':');
        if ( state.currentEvent.date ) 
          date = new Date(state.currentEvent.date);
        else date = new Date();
        date.setHours(splitInput[0]);
        date.setMinutes(splitInput[1]);
      } else {
        if ( state.currentEvent.date ) {
          const currDate = new Date(state.currentEvent.date);
          date = new Date(date);
          date.setHours( currDate.getHours() );
          date.setMinutes( currDate.getMinutes() );
        } else date = new Date(date);  
      }
      state.currentEvent.time = date.getTime();
    },

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
  setDisplayMode, setDay, onShowForm,
  setEventName, setEventDate, setEventDesc, setEventType, setEventValue, setEventCash, setEventStatus
} = organizerSlice.actions;

export const loading      = ( state ) => state.organizer.loading;
export const days         = ( state ) => state.organizer.days;
export const display      = ( state ) => state.organizer.display;
export const currYear     = ( state ) => state.organizer.year;
export const currMonth    = ( state ) => state.organizer.month;
export const currDay      = ( state ) => state.organizer.day;
export const showForm     = ( state ) => state.organizer.showForm;
export const currentEvent = ( state ) => state.organizer.currentEvent;

export default organizerSlice.reducer;


const setDefaultEvent = state => {
  const now = new Date();
  state.currentEvent.name = '';
  state.currentEvent.time = new Date(state.year, state.month, state.day, now.getHours(), now.getMinutes()).getTime();
  state.currentEvent.type = 'event';
  state.currentEvent.value = 0;
  state.currentEvent.cash = null;
  state.currentEvent.description = '';
}