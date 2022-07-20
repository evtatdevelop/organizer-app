import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEvents, setEvent, addEvent, delEvent, setRegulars, addRegulars, delRegulars } from './organizerSliceAPI';

const data = new Date();
const initialState = {
  loading:      false,
  display:      'month',
  days:         [],
  year:         data.getFullYear(),
  month:        data.getMonth(),
  day:          data.getDate(),
  showForm:     false,
  regForm:      false,
  currentEvent: {}
}

export const getMonth = createAsyncThunk( 'organizer/getMonth', async ( MonthDay ) => {
  const monthDate = new Date(MonthDay),
        year = monthDate.getFullYear(),
        month = monthDate.getMonth(),
        date = new Date(year, month, 1),
        from = date.getTime(),
        to = new Date(year, month + 1, 0, 23, 59, 59, 999 ).getTime(); 
  const events = await getEvents(from, to); 
  // console.log(events);
  const response = [...events];

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
          data = response.filter(item => item.date >= startDayTime && item.date < endDayTime);
          result.push({key, dateNumber, day, dayName, dayNameLong, monthNumber, monthName, startDayTime, endDayTime, weekNumber, data}); 
    date.setDate(dateNumber + 1);
  }
  return result;
})

export const newEvent       = createAsyncThunk('organizer/addEvent', async ( data ) => await addEvent(data) )
export const saveEvent      = createAsyncThunk( 'organizer/setEvent', async ( data ) => await setEvent(data) )
export const removeEvent    = createAsyncThunk('organizer/delEvent', async ( id ) => await delEvent(id) )

export const saveRegular    = createAsyncThunk( 'organizer/setRegulars', async ( data ) => await setRegulars(data) )
export const newRegular     = createAsyncThunk('organizer/addRegulars', async ( data ) => await addRegulars(data) )
export const removeRegular  = createAsyncThunk('organizer/delRegulars', async ( id ) => await delRegulars(id) )

export const organizerSlice = createSlice({
  name: 'organizer',
  initialState,
  reducers: {
    setDisplayMode: ( state, action ) => { state.display                  = action.payload },
    setDay:         ( state, action ) => { state.day                      = action.payload },
    setEventName:   ( state, action ) => { state.currentEvent.name        = action.payload },
    setEventDesc:   ( state, action ) => { state.currentEvent.description = action.payload },
    setEventValue:  ( state, action ) => { state.currentEvent.value       = action.payload },
    setEventCash:   ( state, action ) => { state.currentEvent.cash        = action.payload },
    setEventStatus: ( state, action ) => { state.currentEvent.status      = action.payload },
    setRegPeriod:   ( state, action ) => { state.currentEvent.period      = action.payload },
    setLastDate:    ( state, action ) => { state.currentEvent.last_date   = action.payload },

    setEventType:   ( state, action ) => { 
      state.currentEvent.type = action.payload
      state.currentEvent.cash = action.payload !== 'event' ? 'card' : null;
    },

    onShowForm: ( state, action ) => {
      state.showForm = action.payload;
      if ( action.payload ) {
        const now = new Date();
        state.currentEvent.name = '';
        state.currentEvent.date = new Date(state.year, state.month, state.day, now.getHours(), now.getMinutes()).getTime();
        state.currentEvent.type = 'event';
        state.currentEvent.value = 0;
        state.currentEvent.cash = null;
        state.currentEvent.description = '';
        state.currentEvent.status = 'active';
        state.currentEvent.mode = 'onetime';
      } else state.currentEvent = {}
    },

    onRegForm: ( state, action ) => {
      state.regForm = action.payload;
      if ( action.payload ) {
        const now = new Date();
        state.currentEvent.name = '';
        state.currentEvent.date_from = new Date(state.year, state.month, state.day, now.getHours(), now.getMinutes()).getTime();
        state.currentEvent.date_to = null;
        state.currentEvent.type = 'event';
        state.currentEvent.value = 0;
        state.currentEvent.cash = null;
        state.currentEvent.description = '';
        state.currentEvent.period = 'day';
        state.currentEvent.status = 'active';
        state.currentEvent.mode = 'regular';
        state.currentEvent.last_date = now - 365*24*3600*1000
      } else state.currentEvent = {}
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
      state.currentEvent.date = date.getTime();
    },

    setCurrEvent: (state, action) => {
      const { day, id, mode} = action.payload;
      state.days.map( itemDay => {  
        if ( itemDay.key === day ) {
          itemDay.data.map( event => {
            if ( event.id === id ) {
              state.currentEvent = {...event}
              state.currentEvent.date = +event.date;
              state.currentEvent.value = event.value ? +event.value : null;
              
              if ( mode === 'onetime' ) {
                state.currentEvent.date = +event.date;
                state.showForm = true;
              }
              if ( mode === 'regular' ) {
                state.currentEvent.id = event.id.split('-')[0];
                // delete state.currentEvent.date;
                // state.currentEvent.date_from = +event.date_from;
                state.regForm = true;
              }
            
            
            }
          return event; })
        }
      return itemDay; })
    }

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

      .addCase(newEvent.pending, ( state ) => { state.loading = true })
      .addCase(newEvent.fulfilled, (state, action) => {
        const { id, date, name, description, type, value, status, cash, mode} = action.payload;
        state.days.map(day => {
          if ( date >= day.startDayTime && date <= day.endDayTime ) {          
            day.data.push({ id, date, name, description, type, value, status, cash, mode })
            day.data.sort((a, b) => Number(a.date) - Number(b.date))
          }
        return day; })
        state.loading = false;
        state.showForm = false;
        state.currentEvent = {};
      })

      .addCase(saveEvent.pending, ( state ) => { state.loading = true })
      .addCase(saveEvent.fulfilled, (state, action) => {
        const { id, date, name, description, type, value, status, cash, mode } = action.payload;
        state.days.map(day => {
          if ( date >= day.startDayTime && date <= day.endDayTime ) {
            const data = day.data.filter(event => Number(event.id) !== Number(id))
            data.push({ id, date, name, description, type, value, status, cash, mode });
            data.sort((a, b) => Number(a.date) - Number(b.date))
            day.data = data;
          }
        return day; })
        state.loading = false;
        state.showForm = false;
        state.currentEvent = {};
      })

      .addCase(removeEvent.pending, ( state ) => { state.loading = true })
      .addCase(removeEvent.fulfilled, (state, action) => {
        const { id, date } = state.currentEvent;
        state.days.map(day => {
          if ( date >= day.startDayTime && date <= day.endDayTime ) {
            const data = day.data.filter(event => Number(event.id) !== Number(id))
            day.data = data;
          }
        return day; })
        state.loading = false;
        state.showForm = false;
        state.currentEvent = {};
      })



      .addCase(saveRegular.pending, ( state ) => { state.loading = true })
      .addCase(saveRegular.fulfilled, (state, action) => {
        console.log(action.payload);
        // const { id, date, name, description, type, value, status, cash, mode } = action.payload;
        // state.days.map(day => {
        //   if ( date >= day.startDayTime && date <= day.endDayTime ) {
        //     const data = day.data.filter(event => Number(event.id) !== Number(id))
        //     data.push({ id, date, name, description, type, value, status, cash, mode });
        //     data.sort((a, b) => Number(a.date) - Number(b.date))
        //     day.data = data;
        //   }
        // return day; })
        state.loading = false;
        state.regForm = false;
        state.currentEvent = {};
      })

      .addCase(newRegular.pending, ( state ) => { state.loading = true })
      .addCase(newRegular.fulfilled, (state, action) => {
        
        console.log(action.payload);
        // const { id, date, name, description, type, value, status, cash, mode} = action.payload;
        // state.days.map(day => {
        //   if ( date >= day.startDayTime && date <= day.endDayTime ) {          
        //     day.data.push({ id, date, name, description, type, value, status, cash, mode })
        //     day.data.sort((a, b) => Number(a.date) - Number(b.date))
        //   }
        // return day; })
        state.loading = false;
        state.regForm = false;
        state.currentEvent = {};
      })
      
      .addCase(removeRegular.pending, ( state ) => { state.loading = true })
      .addCase(removeRegular.fulfilled, (state, action) => {

        console.log(action.payload);
        // const { id, date } = state.currentEvent;
        // state.days.map(day => {
        //   if ( date >= day.startDayTime && date <= day.endDayTime ) {
        //     const data = day.data.filter(event => Number(event.id) !== Number(id))
        //     day.data = data;
        //   }
        // return day; })
        state.loading = false;
        state.regForm = false;
        state.currentEvent = {};
      })
  }
});

export const { 
  setDisplayMode, setDay, onShowForm, setCurrEvent, onRegForm,
  setEventName, setEventDate, setEventDesc, setEventType, setEventValue, setEventCash, setEventStatus, setRegPeriod, setLastDate
} = organizerSlice.actions;

export const loading      = ( state ) => state.organizer.loading;
export const days         = ( state ) => state.organizer.days;
export const display      = ( state ) => state.organizer.display;
export const currYear     = ( state ) => state.organizer.year;
export const currMonth    = ( state ) => state.organizer.month;
export const currDay      = ( state ) => state.organizer.day;
export const showForm     = ( state ) => state.organizer.showForm;
export const regForm      = ( state ) => state.organizer.regForm;
export const currentEvent = ( state ) => state.organizer.currentEvent;

export default organizerSlice.reducer;
