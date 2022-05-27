import React from "react";
import styles from './loader.module.scss';
import { useSelector } from "react-redux";
import { loading } from "../assets/assetsSlice";

export const Loader = () => {

  const load = useSelector(loading);

  return (
    load ? <div className={styles.loader}>loading</div> : null
  )
}