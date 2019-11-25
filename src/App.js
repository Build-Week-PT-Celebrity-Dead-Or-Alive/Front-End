import React, { useState, useEffect } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// utilities
import { getToken } from './Utilities/AxiosWithAuth';
import ProtectedRoute from './Utilities/ProtectedRoute';
import axios from 'axios';
import { CelebrityContext } from './Context/CelebrityContext';

// components
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/FinalPage/SignUp/SignUp';
import Account from './components/FinalPage/Account/Account';
import Login from './components/FinalPage/Login/Login';
import Logout from './components/FinalPage/Logout';
import Users from './components/Admin/Users';
import CelebList from './components/Celebrity/CelebList';
import UpdateCeleb from './components/Celebrity/UpdateCeleb';
import Final from './components/FinalPage/FinalPage';
import QuizCard from './components/QuizPage/QuizCard/QuizCard';

import './App.css';
import './Fonts.css';
import { CelebrityContext } from './Context/CelebrityContext';

function App() {
  // celeb state for quiz
  const [celebs, setCelebs] = useState([])
  // score state for users
  const [score, setUpdateScore] = useState(0)
  // user state to delete users
  const [users, setUsers] = useState([])
  // error for sign-up
  const [error, setError] = useState();
  // signup state to register new users
  const [signUp, setSignUp]= useState({
    username: '',
    password: ''
  });

  const signedIn = getToken();

  useEffect(() => {
      axios
      .get('https://celeb-death-status.herokuapp.com/api/celebs')
      .then(results => {
          setCelebs(results.data)
        })
      .catch(err => {
        console.log(`There was an error: ${err}`)
      })
  })

  // need to code this out to function with context API/functional component
  // updateScore = () => {
  //   this.setState({
  //     score: this.state.score + 1
  //   });
  // }

  // render() {
  //   let renderQuizCard = (history) => {
  //     if(!this.state.celebs.length){
  //       return(
  //         <p>Loading...</p>
  //       );
  //     }
  //     else {
  //       return(
  //         <QuizCard celebs={this.state.celebs} score={this.state.score} updateScore={this.updateScore} history={history}/>
  //       );
  //     }
  //   }

  return (
    <div className="App">
    <nav className="nav-bar">
      <Link to='/'>Home</Link>
      {!signedIn && <Link to='/signup'>Sign-Up</Link>}
      {signedIn && <Link to='/account'>My Account</Link>}
      {!signedIn && <Link to='/login'>Login</Link>}
      {signedIn && <Link to='/users'>Users</Link>}
      {signedIn && <Link to='/logout'>Logout</Link>}
    </nav>

      <CelebrityContext.Provider value={celebs}>
        <Route exact path='/' component={LandingPage} />
        {/* <Route exact path='/' render={(props) =>{
          return(<LandingPage {...props}/>);
        }}/> */}
        <Route exact path='/signup' component={SignUp} />
        <ProtectedRoute exact path='/account' component={Account} />
        <ProtectedRoute exact path='/users' component={Users} />
        <Route exact path='/celebs' component={CelebList} />
        <ProtectedRoute exact path='/celebs/:id' component={UpdateCeleb} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/quizpage' component={QuizCard} />
        <Route exact path='/finalpage' component={Final} />

        {/* <Route path="/quizpage" render={(props) =>{
          console.log(props.history);
          return renderQuizCard(props.history);
        }}/>
        <Route path="/finalpage">
          <Final score={this.state.score}/>
        </Route> */}
      </CelebrityContext.Provider>
    </div>
  );
}

// class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     celebs: [],
  //     score: 0
  //   }
  // }

  // componentDidMount() {
  //   axios.get('https://celeb-death-status.herokuapp.com/api/celebs')
  //       .then(results => {
  //           this.setState({
  //             celebs:results.data
  //           })
  //         })
  //       .catch(err => {
  //         console.log(`There was an error: ${err}`)
  //       })
  // }

  // signedIn = getToken();

//   updateScore = () => {
//     this.setState({
//       score: this.state.score + 1
//     });
//   }

//   render() {
//     let renderQuizCard = (history) => {
//       if(!this.state.celebs.length){
//         return(
//           <p>Loading...</p>
//         );
//       }
//       else {
//         return(
//           <QuizCard celebs={this.state.celebs} score={this.state.score} updateScore={this.updateScore} history={history}/>
//         );
//       }
//     }

//     return (
//       <div className="App">
//         <nav className="nav-bar">
//           <Link to='/'>Home</Link>
//           {!this.signedIn && <Link to='/signup'>Sign-Up</Link>}
//           {this.signedIn && <Link to='/account'>My Account</Link>}
//           {!this.signedIn && <Link to='/login'>Login</Link>}
//           {this.signedIn && <Link to='/users'>Users</Link>}
//           {this.signedIn && <Link to='/logout'>Logout</Link>}
//         </nav>
  
//         <Route exact path='/' render={(props) =>{
//           return(<LandingPage {...props}/>);
//         }}/>
//         <Route exact path='/signup' component={SignUp} />
//         <ProtectedRoute exact path='/account' component={Account} />
//         <ProtectedRoute exact path='/users' component={Users} />
//         <Route exact path='/celebs' component={CelebList} />
//         <ProtectedRoute exact path='/celebs/:id' component={UpdateCeleb} />
//         <Route exact path='/login' component={Login} />
//         <Route exact path='/logout' component={Logout} />
        
//         <Route path="/quizpage" render={(props) =>{
//           console.log(props.history);
//           return renderQuizCard(props.history);
//         }}/>
//         <Route path="/finalpage">
//           <Final score={this.state.score}/>
//         </Route>
//       </div>
//     );
//   }

// }

export default withRouter(App);