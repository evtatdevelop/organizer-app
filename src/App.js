import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { AssetsList } from './features/assetsList/assetsList';
import './rest.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main className='main'>Main</main>
      <aside className='assets'><AssetsList/></aside>
      <nav className='nav'>
        <ul className='navigation'></ul>
        <Counter />
      </nav>
      
      {/* <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
          <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>
          <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer" >Redux Toolkit</a>
          <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">React Redux </a>
      */}
    </div>
  );
}

export default App;
