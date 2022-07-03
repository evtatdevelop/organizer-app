import React from "react";
import styles from './eventForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { onShowForm } from "../organizerSlice";

export const EventForm = () => {
  const dispatch = useDispatch();

  // const checked = status === 'not_active' ? '' : 'checked';
  
  const submit = (e) => {
    e.preventDefault();
    // id ? dispatch(saveAsset(data)) : dispatch(newAsset(data)) 
    console.log('add new evenet');
    e.target.reset();
  }

  return (
    <section className={ styles.eventForm }>
      <button type='button' 
        className={styles.closer}
        onClick={() => dispatch(onShowForm(false))}
      >&times;</button>
      <form id="eventForm" name="eventForm" onSubmit={ (e)=>submit(e) }>
        
        <input type='text' name="name" placeholder='Name' required
          autoFocus={true}
        />
        
        <div className={`${styles.formGroup} ${styles.datetime}`}>
          <input type='date' name="datetime" required/>
          <input type='time' name="time"/>        
        </div>

        <div className={`${styles.formGroup} ${styles.eventType}`}>
          <input type='radio' name='eventType' id='eventEvent' defaultChecked={true}/><label htmlFor="eventEvent"> <span className={styles.event}>Event</span> </label>        
          <input type='radio' name='eventType' id='eventProfit'/><label htmlFor="eventProfit"><span className={styles.profit}>Profit</span> </label>
          <input type='radio' name='eventType' id='eventCosts'/><label htmlFor="eventCosts"><span className={styles.costs}>Costs</span> </label>
        </div>

        <input type='number' name="value" placeholder='Value'/>

        <div className={`${styles.formGroup} ${styles.eventCash}`}>
          <input type='radio' name='eventCash' id='eventCash' defaultChecked={true}/><label htmlFor="eventCash"><span className={styles.cash}>Cash</span></label>
          <input type='radio' name='eventCash' id='eventCard'/><label htmlFor="eventCard"><span className={styles.card}>Card</span></label>
        </div>

        <textarea name="description" placeholder='Description'></textarea>

        <button type='submit'
          // onClick={() => dispatch(onShowForm(false)) }
        >Submit</button>

      </form>    
    </section>

  )
}

