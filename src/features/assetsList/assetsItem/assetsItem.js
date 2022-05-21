import styles from './assetsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const AssetsItem = props => {
  
  const { item, hadlerClick } = props;
  const classes = `${styles.icon} ${styles[item.type]}`;

  // console.log(new Date(item.time));

  return (
      item.active
      ? <li
          className={ styles.assetsItem }
          onClick={()=>hadlerClick(item.id)}
        >
          <div className={styles.label}>
            {item.type === 'cash' ? <FontAwesomeIcon icon={ faWallet } className={ classes } /> : null}
            {item.type === 'card' ? <FontAwesomeIcon icon={ faCreditCard } className={ classes } /> : null}
            <span className={styles.currensy}>{item.currensy}</span>        
          </div>
          <span className={`${ styles.value } ${ styles[item.type] }`}>{ item.value.toLocaleString('ru-RU') }</span>
        </li>
      : null
  )
}

export default AssetsItem;