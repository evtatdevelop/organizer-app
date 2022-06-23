import React from "react";
import styles from './day.module.scss';
import { days, currYear, currMonth, currDay, setDisplayMode } from "../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { moneyFormat } from "../../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import EventItem  from "./eventItem";
import Clock from "./clock";

export const Day = () => {  
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)

  const monthDays = useSelector(days)
  const dispatch = useDispatch();
  
  const dataDay = monthDays.find(item => item.key === `${year}.${month}.${day}`);
  const totalProfit = moneyFormat(dataDay.data.filter(item => item.type === 'profit').reduce((sum, curr) => sum + +curr.value, 0))
  const totalCosts = moneyFormat(dataDay.data.filter(item => item.type === 'costs').reduce((sum, curr) => sum + +curr.value, 0))
  const cardCosts = dataDay.data.filter(item => item.type === 'costs' && item.cash === 'card').reduce((sum, curr) => sum + +curr.value, 0)
  const cashCosts = dataDay.data.filter(item => item.type === 'costs' && item.cash === 'cash').reduce((sum, curr) => sum + +curr.value, 0)

  const handlerClickView = (mode) => {
    console.log(dataDay.key);
    dispatch( setDisplayMode(mode));
  } 

  return ( 
    <section className={styles.dayList}>
      {/* header */}
      <header className={styles.dayHeader}>
        <div className={styles.dateNumber}>{dataDay.dateNumber}</div>
        
        <div className={styles.dateIinfo}>
          <button 
            className={styles.monthBtn}
            onClick={() => handlerClickView('month')}
          >{dataDay.monthName} {year}</button>
          
          <button 
            className={styles.weekBtn}
            onClick={() => handlerClickView('week')}
          >Week {dataDay.weekNumber}</button>
          
          <span className={ dataDay.day === 0 || dataDay.day === 6
            ? `${styles.weekEndColor}` : `${styles.weekDayColor}` }
          >{dataDay.dayNameLong}</span>          
        </div>

        <div className={styles.clock}>
          {Date.now() < dataDay.endDayTime && Date.now() > dataDay.startDayTime ? <Clock/> : null}
        </div>
      </header>

      {/* main */}
      <ul className={styles.eventList}>
        {dataDay.data.map( item => <EventItem key={item.id} item={item}/> )}
      </ul>

      {/* footer */}
      <footer className={styles.dayTotals}>
        <div className={styles.costtypes}>
        {cardCosts > 0
          ? <span className={`${styles.costs}`}>- {moneyFormat(cardCosts)} <FontAwesomeIcon icon={faCreditCard} className={styles.card}/></span>
          : null}
        {cashCosts > 0
          ? <span className={`${styles.costs}`}>- {moneyFormat(cashCosts)} <FontAwesomeIcon icon={faWallet} className={styles.cash}/></span>
          : null}
        </div>
        <div className={styles.total}>
          <span className={`${styles.profit}`}>+ {totalProfit}</span>
          <span className={`${styles.costs}`}>- {totalCosts}</span>
        </div>
      </footer>

    </section>
  
  )    
}
