import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Main />
      </div>
    </div>
  );
}

export default App;
