import React from 'react';
import { Statehook  } from './Components/Statehook';
import './App.css';
import UseReducer from './Components/Usereducer';
import Redux from './Redux/Redux';
import Fetch from './Components/Fetch';

function App() {
  return (
    <div className="App">
   <Statehook />
   <UseReducer/>
 < Redux />
 <Fetch />
    </div>
  );
}

export default App;
