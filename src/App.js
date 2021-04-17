import React, { useState, useEffect } from 'react';
import './App.css';

// Router
import { Route } from 'react-router-dom';

//import Components and Pages
import Login from './components/Login'
import Home from './components/Home'
//หน้าแอปส่วนหลักในการทำการ Route และrender หน้า

import fire from './config/fire'


const App = () => { 

const [user, setUser] = useState({})

 useEffect(() => {
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
  },[])

  // const authListener = () => {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //     console.log(user);
  //     setUser({user})
  //     }
  //     else {
  //       setUser(null)
  //     }
  //   })
  // }


    return (
      <div>
        <div>
          {user === null && (<Login />)}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    )
  }

export default App