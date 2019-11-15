import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Final from './components/FinalPage/FinalPage';

function App() {
  
  return (
    <main>
        <Route exact path="/final" component={Final}/>
    </main>
  );
}

export default App;
