import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header/Header';
import VolunteerWorks from './components/VolunteerWorks/VolunteerWorks';
import VolunteerForm from './components/VolunteerForm/VolunteerForm';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterWorkshop from './components/RegisterWorkshop/RegisterWorkshop';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    isSignIn: false,
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route path="/" exact>
            <header className="header-section">
              <Header />
              <VolunteerWorks />
            </header>
          </Route>

          <PrivateRoute path="/volunteer-work/:formId">
            <VolunteerForm />
          </PrivateRoute>
          <Route path="/register-workshop">
            <RegisterWorkshop />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
