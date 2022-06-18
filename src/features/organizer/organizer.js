import React from "react";
import styles from './organizer.module.scss';
import Display from "./display";
import { Switcher } from "./switcher/switcher";

export const Organiser = () => {

  return (
    <section className={styles.organizer}>
      <Display/>
      <Switcher/>
    </section>
  )
}