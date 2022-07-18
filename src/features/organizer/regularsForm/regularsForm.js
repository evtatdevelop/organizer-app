import React from "react";
import styles from './regularsForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { 
  currentEvent, onRegForm, getMonth,
  setEventName, setEventDate, setEventDesc, setEventType, setEventValue, setEventCash, setEventStatus, setRegPeriod,
  saveEvent, newEvent, removeEvent 
} from "../organizerSlice";
import { getDate, getTime } from "../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

export const RegularsForm = () => {
  const dispatch = useDispatch();
  const data = useSelector(currentEvent);
  const { id, date, name, description, type, value, cash, status, period, last_date } = data;
  const eventDate = getDate(date);
  const eventTime = getTime(date);
  
  console.log( period, last_date, type);

  return (
    <section className={ styles.regularsForm }>

      <button type='button' className={styles.closer}
        onClick={() => dispatch(onRegForm(false))}
      >&times;</button>
      
      <form id="eventForm" name="eventForm" 
        onSubmit={ (e)=>{ 
          e.preventDefault();
          id ? dispatch(saveEvent(data)) : dispatch(newEvent(data));
          e.target.reset();
        } } 
      >
        
        <p>regularsForm</p>

        {/* Name */}
        <input type='text' name="name" placeholder='Name' required
          autoFocus={true}
          defaultValue = {name}
          onInput={ e => dispatch(setEventName(e.target.value)) }
        />
        
        {/* Date & time */}
        <div className={`${styles.formGroup} ${styles.datetime}`}>
          <input type='date' name="datetime" required 
            defaultValue={eventDate}
            onChange = { e => dispatch(setEventDate(e.target.value)) }
          />
          <input type='time' name="time" 
            defaultValue={eventTime}
            onInput={ e => dispatch(setEventDate(e.target.value)) }
          />
        </div>

        <div className={`${styles.formGroup} ${styles.eventType}`}>
          <input type='radio' name='period' id='day'
            value='day' 
            defaultChecked={ period === 'day' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="day"> <span className={styles.event}>Day</span> </label>
          <input type='radio' name='period' id='week'
            value='week' 
            defaultChecked={ period === 'week' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="week"><span className={styles.event}>Week</span> </label>
          <input type='radio' name='period' id='momth'
            value='momth' 
            defaultChecked={ period === 'month' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="momth"><span className={styles.event}>Month</span> </label>        
          <input type='radio' name='period' id='year'
            value='year' 
            defaultChecked={ period === 'year' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="year"><span className={styles.event}>Year</span> </label>        
        </div>

        {/* Type of event */}
        <div className={`${styles.formGroup} ${styles.eventType}`}>
          <input type='radio' name='eventType' id='eventEvent'
            value='event' 
            defaultChecked={ type === 'event' }
            onChange = { e => dispatch(setEventType(e.target.value)) }
          /><label htmlFor="eventEvent"> <span className={styles.event}>Event</span> </label>
          <input type='radio' name='eventType' id='eventProfit'
            value='profit' 
            defaultChecked={ type === 'profit' }
            onChange = { e => dispatch(setEventType(e.target.value)) }
          /><label htmlFor="eventProfit"><span className={styles.profit}>Profit</span> </label>
          <input type='radio' name='eventType' id='eventCosts'
            value='costs' 
            defaultChecked={ type === 'costs' }
            onChange = { e => dispatch(setEventType(e.target.value)) }
          /><label htmlFor="eventCosts"><span className={styles.costs}>Costs</span> </label>
        </div>

        {/* Value */}
        { type !== 'event'
          ? <input type='number' name="value" placeholder='Value' className={styles.hideField}
              min={0}
              defaultValue={value}
              onInput={ e => dispatch(setEventValue(+e.target.value)) }
            />
          : null  
        }
        

        {/* Cash or Card */}
        { type !== 'event'
          ? <div className={`${styles.formGroup} ${styles.eventCash} ${styles.hideField}`}>
              <input type='radio' name='eventCash' id='eventCash'
                value='cash' 
                defaultChecked={ cash === 'cash'}
                onChange = { e => dispatch(setEventCash(e.target.value)) }
              /><label htmlFor="eventCash"><span className={styles.cash}>Cash</span></label>
              <input type='radio' name='eventCash' id='eventCard'
                value='card' 
                defaultChecked={ cash === 'card'}
                onChange = { e => dispatch(setEventCash(e.target.value)) }
              /><label htmlFor="eventCard"><span className={styles.card}>Card</span></label>
            </div>
          : null
        }

        {/* Noies */}
        <textarea name="description" placeholder='Notes' 
          defaultValue={ description }
          onInput={ e => dispatch(setEventDesc(e.target.value)) }
        ></textarea>

        <button type='submit'>Save</button>

        {/* control buttons */}
        { id && status === 'active'
          ? <div className={styles.controlBtn}>
              <button type="button"
              onClick={ () => dispatch(removeEvent(id)) }
              ><FontAwesomeIcon icon={faXmark} className={styles.delete}/> Delete</button> 
              <button type="button"
                onClick={ () => {
                  dispatch(setEventStatus('success'));
                  const acceptData = {...data}
                  acceptData.status = 'success';
                  dispatch(saveEvent(acceptData));
                }
              }
              ><FontAwesomeIcon icon={faCheck} className={styles.accept}/> Accept</button> 
            </div>
          : null  
        }

      </form>    
    </section>

  )
}

