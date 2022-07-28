import React from "react";
import styles from './eventItem.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { setCurrEvent } from "../../../organizerSlice";
import { moneyFormat, getTime } from "../../../../../helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import worldCurrencies from "world-currencies";

export const EventItem = props => {
  const { item, day, mode} = props;
  const dispatch = useDispatch();
  const currencies = worldCurrencies;

  // console.log(item);

  return ( 
        // <li key={item.id} className={styles.eventItem}>
        <li className={styles.eventItem}>
          
          <button onClick={ ()=> dispatch( setCurrEvent({day, id: item.id, mode})) }>

            <span className={styles.eventTime}>{getTime(Number(item.date))}</span>
            <span className={styleEventName(item.date)}>{item.name}</span> 
            <span className={styles.eventStatus}>
              {item.status === 'resolved' ? <FontAwesomeIcon icon={faCheck}/> : null}
            </span>
            <span className={styleEventVal(item.type, item.status)}>
              {item.type !== 'event' 
                ? item.type !== 'profit' 
                  ? `- ${moneyFormat(item.value)} ${currencies[item.currency]['units']['major']['symbol']}`
                  : `+ ${moneyFormat(item.value)} ${currencies[item.currency]['units']['major']['symbol']}`
                : null
              }
            </span>
            <span className={styleEventCash(item.cash, item.status)}>
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


const styleEventVal = (eventType, eventStatus) => {
  let result = styles.eventValue;
  if ( eventStatus === 'success' ) return result + ` ${styles.accepted}`;
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

const styleEventCash = (itemCash, eventStatus) => {
  let result = styles.eventCash;
  // console.log(eventStatus);
  if ( eventStatus === 'success' ) return result + ` ${styles.accepted}`;
  if ( itemCash === 'cash' ) result += ` ${styles.cash}`;
  if ( itemCash === 'card' ) result += ` ${styles.card}`;
  return result;  
}
