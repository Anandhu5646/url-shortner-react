import logo from './logo.svg';
import './App.css';
import UrlShortner from './components/UrlShortner';
import BackgroundAnimation from './components/BackgroundAnimation';
import Linkresult from './components/Linkresult';
import { useState } from 'react';

function App() {

  const [inputValue,setInputValue]= useState('')
 
  return (
    <div className="App">
      <UrlShortner setInputValue={setInputValue}/>
      <BackgroundAnimation/>
      <Linkresult inputValue={inputValue}/>
    </div>
  );
}

export default App;
