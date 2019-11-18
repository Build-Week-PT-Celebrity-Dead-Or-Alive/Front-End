import React from 'react';

import Nav from './components/Nav';

import SignUp from './components/FinalPage/SignUp/SignUp';
import './App.css';
import {Link, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './Fonts.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={(props) =>{
        return(<LandingPage {...props}/>);
      }}/>
      <Route path="/quizpage">

      </Route>
      <Route path="finalpage">

      </Route>
    </div>
  );
}

export default App;
