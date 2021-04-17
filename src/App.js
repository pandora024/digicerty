import React, { useState, useEffect, useMemo } from 'react';
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

//  useEffect(() => {
//     authListener
//   },[])

 useMemo(() => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser({user})
    }
    else {
      setUser({user :null})
    }
  })
},[user])


if (user == null) {
  return (
    <div>
      <Login />
    </div>

  );
}
else {
return (
<div>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  
  </div>
</div>
)
}
}

export default App