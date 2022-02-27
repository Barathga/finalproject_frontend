import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signinpage from './Signinpage';
import About from './About';
import Contact from './Contact';
import Signin from './Signin';
import Signup from './Signup';
import Studentspage from './Studentspage';
import Home from './Subrouting.js/Home';
import Task from './Subrouting.js/Task';
import Assignment from './Subrouting.js/Assignment';
import Courses from './Subrouting.js/Courses';
import Timetable from './Subrouting.js/Timetable';
import Department from './Subrouting.js/Department';

function RouterComponent() {
  return (
    <div>
        <BrowserRouter>
            <Routes>

            <Route path = "/" element = {<Signinpage/>}></Route>
            <Route path="/contactus" element={<Contact/>}></Route> 
            <Route path="/aboutus" element={<About/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/Studentspage" element={<Studentspage/>}>
              <Route path="" element={<Home/>}></Route>
              <Route path="/Studentspage/task" element={<Task/>}></Route>
              <Route path="/Studentspage/assignment" element={<Assignment/>}></Route>
              <Route path="/Studentspage/courses" element={<Courses/>}></Route>
              <Route path="/Studentspage/timetable" element={<Timetable/>}></Route>
              <Route path="/Studentspage/department" element={<Department/>}></Route>
            </Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterComponent