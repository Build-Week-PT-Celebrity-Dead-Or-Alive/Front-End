import React from 'react';
import './App.css';
import Final from './components/FinalPage/FinalPage';
import './App.css';
import {Link, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import './Fonts.css';

function App() {
  
  return (
    <>
    <main>
        <Route exact path="/final" component={Final}/>
    </main>
    <div className="App">
      <Route exact path='/' render={(props) =>{
        return(<LandingPage {...props}/>);
      }}/>
      <Route path="/quizpage">

      </Route>
      <Route path="finalpage">

      </Route>
    </div>
    </>
  );
}

export default App;
