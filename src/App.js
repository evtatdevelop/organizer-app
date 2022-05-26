import React from 'react';
import { Counter } from './features/counter/Counter';
import { Assets } from './features/assets/asset';
import './rest.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main className='main'>Main</main>
      <aside className='assets'><Assets/></aside>
      <nav className='nav'>
        <ul className='navigation'></ul>
        <Counter />
      </nav>
    </div>
  );
}

export default App;
