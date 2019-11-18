import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// utilities
import { getToken } from './Utilities/AxiosWithAuth';
import ProtectedRoute from './Utilities/ProtectedRoute';

// components
import LandingPage from './components/LandingPage/LandingPage';
import SignUp from './components/FinalPage/SignUp/SignUp';
import Account from './components/FinalPage/Account';
import Login from './components/FinalPage/Login';
// need Logout component

import './App.css';

function App() {
  const signedIn = getToken();
  return (
    <div className="App">
      <nav>
        <Link to='/landingpage'>Home</Link>
        {!signedIn && <Link to='/signup'>Sign-Up</Link>}
        {signedIn && <Link to='/account'>My Account</Link>}
        {!signedIn && <Link to='/login'>Login</Link>}
        {/* <Link to='/logout'>Logout</Link> */}
      </nav>

      <Route exact path='/landingpage' component={LandingPage} />
      <Route exact path='/signup' component={SignUp} />
      <ProtectedRoute exact path='/account' component={Account} />
      <Route exact path='/login' component={Login} />
      {/* <Route exact path='/logout' component={Logout} /> */}
    </div>
  );
}

export default withRouter(App);
