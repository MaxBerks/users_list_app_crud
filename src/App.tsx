import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
