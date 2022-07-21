import React from "react";
import styles from './eventForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { 
  currentEvent, onShowForm, getMonth,
  setEventName, setEventDate, setEventDesc, setEventType, setEventValue, setEventCash, setEventStatus, 
  saveEvent, newEvent, removeEvent 
} from "../organizerSlice";
import { getDate, getTime } from "../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

export const EventForm = () => {
  const dispatch = useDispatch();
  const data = useSelector(currentEvent);
  const {id, date, name, description, type, value, cash, status} = data;
  const eventDate = getDate(date);
  const eventTime = getTime(date);
  
  return (
    <section className={ styles.eventForm }>

      <button type='button' className={styles.closer}
        onClick={() => dispatch(onShowForm(false))}
      >&times;</button>
      
      <form id="eventForm" name="eventForm" 
        onSubmit={ (e)=>{ 
          e.preventDefault();
          id ? dispatch(saveEvent(data)) : dispatch(newEvent(data));
          e.target.reset();
          setTimeout( () => dispatch(getMonth(Date.now())), 1000)
        } } 
      >

        <p>eventForm</p>

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

        { status === 'active'
          ? <button type='submit'>Save</button>
          : null
        }
        {/* control buttons */}
        { id && status === 'active'
          ? <div className={styles.controlBtn}>
              <button type="button"
              onClick={ () => {
                dispatch(removeEvent(id))
                setTimeout( () => dispatch(getMonth(Date.now())), 1000)
              }}
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

