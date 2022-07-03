import React from "react";
import styles from './organizer.module.scss';
import Display from "./display";
import { Switcher } from "./switcher/switcher";
import EventForm from "./eventForm";
import { useSelector, useDispatch } from "react-redux";
import { showForm } from "./organizerSlice";


export const Organiser = () => {
  const show = useSelector(showForm);
  return (
    <section className={styles.organizer}>
      <Display/>
      <Switcher/>
      { show 
        ? <EventForm/>
        : null }
    </section>
  )
}