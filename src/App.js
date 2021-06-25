import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Incubator from './components/Incubator/Incubator';
import Learn from './components/Learn/Learn';
import TopMenu from "./components/TopMenu/TopMenu"
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import StartupInfo from './components/StartupInfo/StartupInfo';
import SIngleCourse from './components/SIngleCourse/SIngleCourse';
import CourseStream from './components/CourseStream/CourseStream';
import { useState } from 'react';
import Content from "./components/Content/Content"
import CourseStream2 from "./components/CourseStream2/CourseStream2"

export const UserContext=createContext()

function App() {
  const [userData,setUserData]=useState({
    course:"",
    week:"",
    name:"",
    activity:""
  })

  // console.log("This is Main APP",userData)
  
  return (
   <div className="App">   
   <UserContext.Provider value={[userData,setUserData]}>
      <Router>
        <TopMenu></TopMenu>       
        <Switch>         
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/incubator">
            <Incubator></Incubator>           
          </Route>

            <Route path="/startup/:startupID">
           <StartupInfo></StartupInfo>
          </Route>

          <Route path="/learnmore">
            <Learn></Learn>
          </Route>

          <Route path="/course/:id">
            <SIngleCourse></SIngleCourse>
          </Route>

          <Route path="/week/:id">
           <CourseStream></CourseStream>
          </Route>

            <Route path="/content/:id">
              <Content></Content>
            </Route>

            <Route path="/contents/details/:id">
              <CourseStream2></CourseStream2>
            </Route>

          <Route path="*">
           <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
      
      </div>
  );
}

export default App;
