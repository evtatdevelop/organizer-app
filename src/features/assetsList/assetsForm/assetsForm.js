import React from "react";
import styles from './assetsForm.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { showForm, onShowForm  } from "../assetsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

export const AssetsForm = props => {

  const show = useSelector(showForm);
  const dispatch = useDispatch();

  let classesForm = styles.assetsForm 
  let classesAddButton = styles.addButton  
  classesForm = show ? classesForm + ` ${styles.show}` : classesForm;
  classesAddButton = show ? classesAddButton : classesAddButton + ` ${styles.opacity}`;
  const icon = show 
    ? <FontAwesomeIcon icon={ faAnglesLeft } />
    : <FontAwesomeIcon icon={ faAnglesRight } />


  return (
    <section className={ classesForm }>
      <form>
        New assets
      </form>
      
      <button type="button" 
        className={ classesAddButton }
        onClick={ () => dispatch(onShowForm()) }
      >{icon}</button>
    </section>

    
    
    
  )
}