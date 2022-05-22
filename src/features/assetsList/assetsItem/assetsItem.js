import styles from './assetsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const AssetsItem = props => {
  
  const { item, hadlerClick } = props;
  const classesLabel = `${styles.icon} ${styles[item.type]}`;
  const classesValue = `${ styles.value } ${ styles[item.type] }`;

  // console.log(new Date(item.time));

  return (
      item.status === 'active'
      ? <li className={ styles.assetsItem } >
          <button onClick={ ()=>hadlerClick(item.id) } >
            <span className={styles.label}>
              {item.type === 'cash' ? <FontAwesomeIcon icon={ faWallet } className={ classesLabel } /> : null}
              {item.type === 'card' ? <FontAwesomeIcon icon={ faCreditCard } className={ classesLabel } /> : null}
              <span className={styles.currensy}>{item.currensy}</span>        
            </span>
            <span className={ classesValue }>{ item.value.toLocaleString('ru-RU') }</span>          
          </button>
        </li>
      : null
  )
}

export default AssetsItem;