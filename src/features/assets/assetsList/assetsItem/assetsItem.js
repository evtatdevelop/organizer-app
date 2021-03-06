import styles from './assetsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
// import worldCurrencies from "world-currencies";

const AssetsItem = props => {
  
  const { item, hadlerClick } = props;
  const classesLabel = `${styles.icon} ${styles[item.type]}`;
  const classesValue = `${ styles.value } ${ styles[item.type] }`;
  
  // const currencies = worldCurrencies;
  // console.log(currencies.SGD);

  return (
    <li className={ styles.assetsItem } >
      <button onClick={ ()=>hadlerClick(item.id) } >
        <span className={styles.label}>
          {item.type === 'cash' ? <FontAwesomeIcon icon={ faWallet } className={ classesLabel } /> : null}
          {item.type === 'card' ? <FontAwesomeIcon icon={ faCreditCard } className={ classesLabel } /> : null}
          <span className={styles.currensy}>{item.currensy}</span>        
          {/* <span className={styles.currensy}>{currencies[item.currensy]['units']['major']['symbol']}</span>         */}
        </span>
        <span className={ classesValue }>{ item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }</span>          
      </button>
    </li>
  )
}

export default AssetsItem;