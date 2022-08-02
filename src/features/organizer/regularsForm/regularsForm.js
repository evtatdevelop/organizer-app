import React from "react";
import styles from './regularsForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { 
  currentEvent, onRegForm, getMonth,
  setEventName, setEventDate, setEventDesc, setEventType, setEventValue, setEventCurrency, setEventCash, setRegPeriod, setLastDate,
  saveRegular, newRegular, removeRegular, 
  currYear, currMonth, currDay, 
} from "../organizerSlice";
import { getDate, getTime } from "../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { getPeriod } from "../../../helpers";

export const RegularsForm = () => {
  const dispatch = useDispatch();
  const data = useSelector(currentEvent);
  const curDateY = useSelector(currYear);
  const curDateM = useSelector(currMonth);
  const curDateD = useSelector(currDay);
  const { id, date, date_from, name, description, type, value, currency, cash, status, period, last_date } = data;
  const eventDate = getDate(date_from);
  const eventTime = getTime(date_from);
  const currdate = new Date(curDateY, curDateM, curDateD, 0, 0, 0, 0 ).getTime();


  return (
    <section className={ styles.regularsForm }>

      <button type='button' className={styles.closer}
        onClick={() => dispatch(onRegForm(false))}
      >&times;</button>
      
      <form id="regularForm" name="regularForm" 
        onSubmit={ (e)=>{ 
          e.preventDefault();
          e.target.reset();
          id ? dispatch(saveRegular(data)) : dispatch(newRegular(data));
          setTimeout( () => dispatch(getMonth(currdate)), 500);
          // new Promise(resolve => { id ? dispatch(saveRegular(data)) : dispatch(newRegular(data)) }).then( dispatch(getMonth(Date.now())) );
        } } 
      >
        
        {/* <p>regularsForm</p> */}

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
          <input type='radio' name='period' id='periodDay'
            value='day' 
            defaultChecked={ period === 'day' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="periodDay"> <span className={styles.event}>Day</span> </label>
          <input type='radio' name='period' id='periodWeek'
            value='week' 
            defaultChecked={ period === 'week' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="periodWeek"><span className={styles.event}>Week</span> </label>
          <input type='radio' name='period' id='periodMonth'
            value='month' 
            defaultChecked={ period === 'month' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="periodMonth"><span className={styles.event}>Month</span> </label>        
          <input type='radio' name='period' id='periodYear'
            value='year' 
            defaultChecked={ period === 'year' }
            onChange = { e => dispatch(setRegPeriod(e.target.value)) }
          /><label htmlFor="periodYear"><span className={styles.event}>Year</span> </label>        
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
          // ? <input type='number' name="value" placeholder='Value' className={styles.hideField}
          //     min={0}
          //     defaultValue={value}
          //     onInput={ e => dispatch(setEventValue(+e.target.value)) }
          //   />
          ?  <div className={styles.eventValue}>
              <input type='number' name="value" placeholder='Value' className={styles.hideField} required
                min={0}
                defaultValue={ value }
                onInput={ e => dispatch(setEventValue(+e.target.value)) }
              />            
              <input type='text' name="currency" placeholder='Currency' className={styles.hideField} required
                defaultValue={ currency }
                onInput={ e => dispatch(setEventCurrency(e.target.value)) }
              />            
          </div>
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
        { id 
          && Date.now() <= Number(date)
          && Date.now() + getPeriod(date, period) >= Number(date)
          ? <div className={styles.controlBtn}>
              <button type="button"
              onClick={ () => {
                dispatch(removeRegular(id))
                setTimeout( () => dispatch(getMonth(currdate)), 1000)
              }}
              ><FontAwesomeIcon icon={faXmark} className={styles.delete}/> Delete</button> 
              <button type="button"
                onClick={ () => {
                  const nowAccept = Date.now();
                  dispatch(setLastDate(nowAccept));
                  const acceptData = {...data}
                  acceptData.last_date = nowAccept;
                  // console.log(acceptData);
                  dispatch(saveRegular(acceptData));
                  setTimeout( () => dispatch(getMonth(currdate)), 1000)
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

