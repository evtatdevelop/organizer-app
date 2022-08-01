import React from "react";
import styles from './organizer.module.scss';
import Display from "./display";
import { Switcher } from "./switcher/switcher";
import EventForm from "./eventForm";
import { useSelector } from "react-redux";
import { showForm, regForm } from "./organizerSlice";
import RegularsForm from "./regularsForm";

export const Organiser = () => {
  const show = useSelector(showForm);
  const regf = useSelector(regForm);
  return (
    <section className={styles.organizer}>
      <Display/>
      <Switcher/>
      { show ? <EventForm/> : null }
      { regf ? <RegularsForm/> : null }
    </section>
  )
}