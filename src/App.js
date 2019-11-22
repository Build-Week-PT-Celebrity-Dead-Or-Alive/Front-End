import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { Link, Route, withRouter } from 'react-router-dom';

// utilities
import { getToken } from './Utilities/AxiosWithAuth';
import ProtectedRoute from './Utilities/ProtectedRoute';
import axios from 'axios';

// components
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/FinalPage/SignUp/SignUp';
import Account from './components/FinalPage/Account/Account';
import Login from './components/FinalPage/Login/Login';
import Logout from './components/FinalPage/Logout';
import Admin from './components/Admin/Admin';
import Users from './components/Admin/Users';
import './App.css';
import Final from './components/FinalPage/FinalPage';
import './Fonts.css';
import QuizCard from './components/QuizPage/QuizCard/QuizCard';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      celebs: [],
      score: 0
    }
  }

  componentDidMount() {
    axios.get('https://celeb-death-status.herokuapp.com/api/celebs')
        .then(results => {
            this.setState({
              celebs:results.data
            })
          })
        .catch(err => {
          console.log(`There was an error: ${err}`)
        })
  }

  // const [celebs, setCelebs] = useState([]);

  signedIn = getToken();

  // useEffect(() => {        
  //   axios.get('https://celeb-death-status.herokuapp.com/api/celebs')
  //       .then(results => {console.log(results.data)})
  //       .catch(err => {console.log(`There was an error: ${err}`)})  
  // }, []);

//  console.log(celebs);

  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    let renderQuizCard = () => {
      if(!this.state.celebs.length){
        return(
          <p>Loading...</p>
        );
      }
      else {
        return(
          <QuizCard celebs={this.state.celebs} score={this.state.score} updateScore={this.updateScore}/>
        );
      }
    }

    return (
      <div>
        <main>
            <Route exact path="/final" component={Final}/>
        </main>
        <div className="App">
          <nav className="nav-bar">
            <Link to='/landingpage'>Home</Link>
            {!this.signedIn && <Link to='/signup'>Sign-Up</Link>}
            {this.signedIn && <Link to='/account'>My Account</Link>}
            {!this.signedIn && <Link to='/login'>Login</Link>}
            <Link to='/logout'>Logout</Link>
          </nav>
    
          <Route exact path='/landingpage' component={LandingPage} />
          <Route exact path='/signup' component={SignUp} />
          <ProtectedRoute exact path='/account' component={Account} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
    
          <Route exact path='/' render={(props) =>{
            return(<LandingPage {...props}/>);
          }}/>
          <Route path="/quizpage">
            {renderQuizCard()}
          </Route>
          <Route path="finalpage">
    
          </Route>
    
        </div>
      </div>
    );
  }

}

export default withRouter(App);