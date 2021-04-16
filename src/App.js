import React, { useState, useEffect } from 'react';
import './App.css';

// Router
import { Route } from 'react-router-dom';

//import Components and Pages
import LoginPage from './components/Login'
import Home from './components/Home'
//หน้าแอปส่วนหลักในการทำการ Route และrender หน้า

import fire from './config/firebase'

const App = () => { 

const [user, setUser] = useState([])

  useEffect(() => {
    authListener();
  },[user])


  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
      console.log(user);
      setUser({user})
      }
      else {
        setUser(null)
  
      }
    })
  }


    return (
      <div>
        <div>
          {user === null && (<LoginPage />)}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
        </div>
      </div>
    )
  }

export default App