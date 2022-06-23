import React from "react";
import styles from './eventItem.module.scss';
// import { useSelector, useDispatch } from "react-redux";
import { moneyFormat, getTime } from "../../../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const EventItem = props => {
  const { item } = props;

  return ( 
        <li key={item.id} className={styles.eventItem}>
          <button onClick={()=>console.log(item.id)}>
            <span className={styles.eventTime}>{getTime(Number(item.date))}</span>
            <span className={styleEventName(item.date)}>{item.name}</span> 
            <span className={styles.eventStatus}>
              {item.status === 'resolved' ? <FontAwesomeIcon icon={faCheck}/> : null}
            </span>
            <span className={styleEventVal(item.type)}>
              {item.type !== 'event' 
                ? item.type !== 'profit' 
                  ? `- ${moneyFormat(item.value)}`
                  : `+ ${moneyFormat(item.value)}`
                : null
              }
            </span>
            <span className={styleEventCash(item.cash)}>
              {item.cash === 'cash' ? <FontAwesomeIcon icon={faWallet}/> : null}
              {item.cash === 'card' ? <FontAwesomeIcon icon={faCreditCard}  /> : null}
            
            </span>
          </button>
          {item.description
            ? <div className={styles.description}>{item.description}</div>
            : null }
        </li>
  )    
}


const styleEventVal = (eventType) => {
  let result = styles.eventValue;
  switch ( eventType ) {
    case 'profit': result += ' ' + styles.profit; break;
    case 'costs': result += ' ' + styles.costs; break;
    default: result += ' ' + styles.event; break;
  }
  return result;
} 

const styleEventName = (itemDate) => {
  let result = styles.eventName;
  if ( itemDate < Date.now() ) result += ` ${styles.past}`;
  return result;
}

const styleEventCash = (itemCash) => {
  let result = styles.eventCash;
  if ( itemCash === 'cash' ) result += ` ${styles.cash}`;
  if ( itemCash === 'card' ) result += ` ${styles.card}`;
  return result;  
}
