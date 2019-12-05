import React, { useState, useEffect } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// utilities
import AxiosWithAuth, { getToken } from './Utilities/AxiosWithAuth';
import ProtectedRoute from './Utilities/ProtectedRoute';
import axios from 'axios';

// components
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/FinalPage/SignUp/SignUp';
import Account from './components/FinalPage/Account/Account';
import Login from './components/FinalPage/Login/Login';
import Logout from './components/FinalPage/Logout';
import Users from './components/Admin/Users';
import UpdateScore from './components/QuizPage/QuizCard/Score/UpdateScore';
import CelebList from './components/Celebrity/CelebList';
import UpdateCeleb from './components/Celebrity/UpdateCeleb';
import Final from './components/FinalPage/FinalPage';
import QuizCard from './components/QuizPage/QuizCard/QuizCard';

// state management
import { UserContext } from './context/UserContext';
import { CelebrityContext } from './context/CelebrityContext';

import './App.css';
import './Fonts.css';

const App = (props) => {
  const [celebs, setCelebs] = useState([])
  const [score, setScore] = useState(0)
  const [users, setUsers] = useState([])

  // getting data
  useEffect(() => {
    axios
      .get('https://celeb-death-status.herokuapp.com/api/celebs')
      .then(res => {
        setCelebs(res.data)
      })
      .catch(error => {
        console.log('ERROR', error)
      })
      getUsers()
      getCelebs()
  },[])

  function getUsers() {
    AxiosWithAuth()
      .get('/protected/users')
      .then(result => {
        setUsers(result.data)
      })
      .catch(error => {
        console.log('USERS ERROR', error)
      })
  }

  // handle delete for users/delete by id
  const handleUserDelete = (e, id) => {
    e.preventDefault()

    if(window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id)
    }
  }

  function deleteUser(id) {
    AxiosWithAuth()
      .delete(`/protected/users/${id}`)
      .then(result => {
        console.log('User was deleted!')
        setUsers(users.filter(user => user.id !== id))
      })
      .catch(error => {
        console.log('DELETE ERROR', error)
      })
  }

  function getCelebs() {
    AxiosWithAuth()
    .get('/celebs')
    .then(result => {
      // console.log('GET CELEB LIST', result.data)
      setCelebs(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleCelebDelete = (e, id) => {
    e.preventDefault()

    if(window.confirm('Are you sure you want to delete this Celebrity?')) {
      deleteCelebs(id)
    }
  }

  function deleteCelebs(id) {
    AxiosWithAuth()
      .delete(`/protected/celebs/${id}`)
      .then(res => {
        console.log('Celeb was deleted!')
        setCelebs(celebs.filter(user => user.id !== id))
      })
      .catch(error => {
        console.log('CELEB ERROR', error)
      })
  }

  const updateScore = () => {
    setScore(score + 1);
  }


  let renderQuizCard = (history)=> {
    if(!celebs.length){
      return(
        <p>Loading...</p>
      );
    } else {
    return(
      <QuizCard 
        celebs={celebs} 
        score={score} 
        updateScore={updateScore} 
        history={history} 
      />
      );
    }
  }

  const signedIn = getToken();

  return (
    <CelebrityContext.Provider value={{ celebs, handleCelebDelete }}>
      <UserContext.Provider value={{ users, handleUserDelete }}>
        <div className="App">
          <nav className="nav-bar">
            <Link to='/'>Home</Link>
            {!signedIn && <Link to='/signup'>Sign-Up</Link>}
            {signedIn && <Link to='/account'>My Account</Link>}
            {!signedIn && <Link to='/login'>Login</Link>}
            {signedIn && <Link to='/users'>Users</Link>}
            {signedIn && <Link to='/celebs'>Celebirty List</Link>}
            {signedIn && <Link to='/logout'>Logout</Link>}
          </nav>

          <Route exact path='/' render={(props) =>{
            return(<LandingPage {...props}/>);
          }}/>
          <Route exact path='/signup' component={SignUp} />
          <ProtectedRoute exact path='/account' component={Account} />
          <Route exact path='/quizcard'>
            <QuizCard card={props.history}/>
          </Route>
          <ProtectedRoute exact path='/users' component={Users} />
          <ProtectedRoute exact path='/users/:id' component={UpdateScore} />
          <ProtectedRoute exact path='/celebs' component={CelebList} />
          <ProtectedRoute exact path='/celebs/:id' component={UpdateCeleb} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />

          <Route path="/quizpage" render={(props) =>{
            console.log(props.history);
            return renderQuizCard(props.history);
          }}/> 

          <Route path="/finalpage">
            <Final score={score}/>
          </Route>
        </div>
      </UserContext.Provider>
    </CelebrityContext.Provider>
  );
}

export default withRouter(App);