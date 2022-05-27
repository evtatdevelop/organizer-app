import React from "react";
import styles from './assetsTools.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { showForm, onShowForm  } from "../assetsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

export const AssetsTools = () => {

  const show = useSelector(showForm);
  const dispatch = useDispatch();

  let classesForm = styles.assetsTools 
  let classesToolsButton = styles.toolsButton  
  classesForm = show ? classesForm + ` ${styles.show}` : classesForm;
  classesToolsButton = show ? classesToolsButton : classesToolsButton + ` ${styles.opacity}`;
  const icon = show 
    ? <FontAwesomeIcon icon={ faAnglesLeft } />
    : <FontAwesomeIcon icon={ faAnglesRight } />


  return (
    <section className={ classesForm }>

      Assets Tools

      <button type="button" 
        className={ classesToolsButton }
        onClick={ () => dispatch(onShowForm()) }
      >{icon}</button>
    </section>
  )
}