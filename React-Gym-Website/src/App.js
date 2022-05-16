import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Trainers from "./components/Trainers/Trainers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.css'
// import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';

const App = () => {
  const [loginUser, setLoginUser] = useState(null);

  return (<Router>
    <Switch>

      <Route path="/login">
        <Login setLoginUser={setLoginUser} />
      </Route>

      <Route path="/signup">
        <Login setLoginUser={setLoginUser} />
      </Route>


      <Route path="/register">
        <Register />
      </Route>

      <Route path="/">
        <div className="App">
          <Main user={loginUser} />
          <GymProgram user={loginUser} />
          <Member />
          <Classes />
          <Trainers />
        </div>
      </Route>

    </Switch>
  </Router>);
}


export default App;
// anaytiwarii123@gmail.com
// 123