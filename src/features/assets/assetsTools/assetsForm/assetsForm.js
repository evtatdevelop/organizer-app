import styles from './assets.module.scss';

export const AssetsForm = props => {

  return (
    <form className={styles.assetsForm}>
      <label>
        <input type='text' placeholder='Curensy'/>
      </label>
      <label>
        <input type='number' placeholder='Value'/>
      </label>
      <label>
        <input type='text' placeholder='Type'/>
      </label>
      <label>
        <input type='checkbox'/>
        <span>Show</span>
      </label>
      
      <button type='submit'>Add</button>
    </form>
  )
}