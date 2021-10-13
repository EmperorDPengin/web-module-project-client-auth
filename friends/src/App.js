import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './App.css';
import HomePage from './components/HomePage/HomePage';
import LogInPage from './components/LogInPage/LoginPage';
import FriendsList from './components/FriendsList/FriendsList';
import FriendForm from './components/FriendForm/FriendForm';

function App() {
  let isLoggedIn = localStorage.getItem("token");

  return (
    
    <Router>
      <div className="App">

        <header>
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Login</Link>
            {isLoggedIn && <Link to="/friendform">Add Friend</Link>}
          </nav>
        </header>

        <Switch>
          <PrivateRoute exact path='/friendform' component={FriendForm} />
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path="/login" component={LogInPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
