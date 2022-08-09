import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRates } from "./features/commonAPI/commonSlice";
import { Assets } from './features/assets/asset';
import { Loader } from './features/loader/loader';
import Organiser from './features/organizer';
import Calculator from "./features/calculator";
import './rest.css';
import './constants.css';
import './App.scss';

function App() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getRates()) }, []);

  return (
    <div className="App">
      <main className='main'><Organiser/></main>
      <aside className='assets'><Assets/></aside>
      <Loader/>
      <Calculator/>
    </div>
  );
}

export default App;
