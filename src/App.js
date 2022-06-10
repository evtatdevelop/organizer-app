import React from 'react';
import { Counter } from './features/counter/Counter';
import { Assets } from './features/assets/asset';
import { Loader } from './features/loader/loader';
import Organiser from './features/organizer';
import './rest.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main className='main'><Organiser/></main>
      <aside className='assets'><Assets/></aside>
      <nav className='nav'>
        <ul className='navigation'></ul>
        <Counter />
      </nav>
      <Loader/>
    </div>
  );
}

export default App;
