import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header/Header';
import VolunteerWorks from './components/VolunteerWorks/VolunteerWorks';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    isSignIn: false,
  })
  return (
    <UserContext.Provider>
      <Router>
        <header className="header-section">
          <Header />
          <VolunteerWorks />
        </header>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
