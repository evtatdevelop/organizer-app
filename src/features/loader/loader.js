import React from "react";
import styles from './loader.module.scss';
import { useSelector } from "react-redux";
import { status } from "../assets/assetsSlice";

export const Loader = () => {

  const show = useSelector(status);

  return (
    show === 'loading' ? <div className={styles.loader}>loading</div> : null
  )
}