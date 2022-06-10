import React from "react";
import styles from './assetsTools.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { showTools, onShowTools  } from "../assetsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { AssetsForm } from "./assetsForm/assetsForm";

export const AssetsTools = () => {

  const show = useSelector(showTools);
  const dispatch = useDispatch();

  let classesForm = styles.assetsTools;
  
  if ( show === 'closed' ) classesForm = classesForm + ` ${styles.show}`;
  if ( show === 'opened' ) classesForm = classesForm + ` ${styles.hide}`;
  
  let classesToolsButton = styles.toolsButton;
  classesToolsButton = show ? classesToolsButton : classesToolsButton + ` ${styles.opacity}`;
  const icon = <FontAwesomeIcon icon={ faAnglesRight }/>


  return (
    <section className={ classesForm }>

      <AssetsForm/>

      <button type="button" 
        className={ classesToolsButton }
        onClick={ () => dispatch(onShowTools(show)) }
      ><span className={styles.icon}>{icon}</span></button>
    </section>
  )
}