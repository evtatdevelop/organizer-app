import React, { useEffect } from "react";
import styles from './day.module.scss';
import { days, currYear, currMonth, currDay, setDisplayMode, onShowForm, onRegForm } from "../../organizerSlice";
import { useSelector, useDispatch } from "react-redux";
import { moneyFormat } from "../../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import EventItem  from "./eventItem";
import Clock from "./clock";
import { rates } from "../../../commonAPI/commonSlice";

import { instantBalance, instBalance } from "../../../commonAPI/commonSlice";

export const Day = () => {  
  const year = useSelector(currYear)
  const month = useSelector(currMonth)
  const day = useSelector(currDay)
  const currencies = useSelector(rates)
  const monthDays = useSelector(days)
  const dispatch = useDispatch();
  const balance = useSelector(instBalance)

  const dataDay = monthDays.find(item => item.key === `${year}.${month}.${day}`);

  const getRate = ( curr ) => {
    let rate = 1;
    if ( curr !== 'RUB' ) {
      const currency = currencies.find(item => item.code === curr)
      rate = currency.inverseRate;
    }
    return Number(rate)
  }


  const totalProfit = moneyFormat(Math.round(dataDay.data.filter(item => item.type === 'profit').reduce((sum, curr) => sum + +curr.value * getRate(curr.currency), 0)))
  const totalCosts = moneyFormat(Math.round(dataDay.data.filter(item => item.type === 'costs').reduce((sum, curr) => sum + +curr.value * getRate(curr.currency), 0)))
  const cardCosts = dataDay.data.filter(item => item.type === 'costs' && item.cash === 'card').reduce((sum, curr) => sum + +curr.value * getRate(curr.currency), 0)
  const cashCosts = dataDay.data.filter(item => item.type === 'costs' && item.cash === 'cash').reduce((sum, curr) => sum + +curr.value * getRate(curr.currency), 0)

  const handlerClickView = (mode) => { dispatch( setDisplayMode(mode)) } 


  // console.log(dataDay.startDayTime);
  useEffect(() => { 
    dispatch( instantBalance(dataDay.startDayTime));
  }, []);

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


        {Date.now() > dataDay.startDayTime 
          ? <div className={styles.balance}> </div>
          : null
        }    
        {Date.now() < dataDay.endDayTime && Date.now() > dataDay.startDayTime 
          ? <div className={styles.clock}> <Clock/> </div>
          : null
        }       
        {Date.now() < dataDay.startDayTime 
          ? <div className={styles.balance}> {moneyFormat(Number(balance))} </div>
          : null
        }
        

      </header>

      {/* main */}
      <ul className={styles.eventList}>
        {dataDay.data.map( item => <EventItem key={`${item.mode}${item.id}`} item={item} day={dataDay} mode={item.mode}/> )}
      </ul>

      <div className={styles.addButtons}>
        <button className={`${styles.addEvent} ${styles.eventBtn}`}
          onClick={() => dispatch( onShowForm(true))}
        >new event</button>      
        <button className={`${styles.addEvent} ${styles.regBtn}`}
          onClick={() => dispatch( onRegForm(true))}
        >new regular</button>       
      </div>      
     

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
