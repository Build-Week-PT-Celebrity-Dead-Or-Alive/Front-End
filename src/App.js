import React from 'react';
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
import Users from './components/Admin/Users';
import CelebList from './components/Celebrity/CelebList';
import UpdateCeleb from './components/Celebrity/UpdateCeleb';
import FinalPage from './components/FinalPage/FinalPage';
import QuizCard from './components/QuizPage/QuizCard/QuizCard';

import './App.css';
import './Fonts.css';

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

  signedIn = getToken();

  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    let renderQuizCard = (history) => {
      if(!this.state.celebs.length){
        return(
          <p>Loading...</p>
        );
      }
      else {
        return(
          <QuizCard celebs={this.state.celebs} score={this.state.score} updateScore={this.updateScore} history={history}/>
        );
      }
    }

    return (
      <div className="App">
        <nav className="nav-bar">
          <Link to='/'>Home</Link>
          {!this.signedIn && <Link to='/signup'>Sign-Up</Link>}
          {this.signedIn && <Link to='/account'>My Account</Link>}
          {!this.signedIn && <Link to='/login'>Login</Link>}
          {this.signedIn && <Link to='/users'>Users</Link>}
          {this.signedIn && <Link to='/logout'>Logout</Link>}
        </nav>
  
        <Route exact path='/' render={(props) =>{
          return(<LandingPage {...props}/>);
        }}/>
        <Route exact path='/signup' component={SignUp} />
        <ProtectedRoute exact path='/account' component={Account} />
        <ProtectedRoute exact path='/users' component={Users} />
        <Route exact path='/celebs' component={CelebList} />
        <ProtectedRoute exact path='/celebs/:id' component={UpdateCeleb} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
  
        <Route exact path='/' render={(props) =>{
          return(<LandingPage {...props}/>);
        }}/>
        <Route path="/quizpage" render={(props) =>{
          console.log(props.history);
          return renderQuizCard(props.history);
        }}/>
        <Route path="/finalpage">
          <Final score={this.state.score}/>
        </Route>
      </div>
    );
  }

}

export default withRouter(App);