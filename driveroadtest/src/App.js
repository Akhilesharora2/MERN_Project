import './App.css';
import './Box.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookARoadTest from './components/BookARoadTest';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Resetpassword from './components/Resetpassword';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import G1 from './components/G1';
import G2 from './components/G2';
import G from './components/G';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import AdminProtectedRoute from './AdminProtectedRoute';
import React from 'react';
import ReactDOM from 'react-dom';

import ScrollButton from './components/ScrollButton'; //This func is to create scroll top button
import { Content, Heading } from './components/Styles';  //ScrollTop CSS and Functionality
function App() {

  //Check if user is logged in?
  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);
  const [authA, setAuthA] = useState(false);
  const [authA2, setAuthA2] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        credentials: "include"
      });
      if (res.status === 200) {
        setAuth(true)
        setAuth1(false)
      }
      if (res.status === 401) {
        setAuth(false)
        setAuth1(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const isAdmin = async () => {
    try {
      const res = await fetch('/adminAuth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-type": "application/json"
        },
        credentials: "include"
      });
      if (res.status === 200) {
        setAuthA(true)
        setAuthA2(false)
        setAuth(true)
        setAuth1(false)
      }
      if (res.status === 401) {
        setAuthA(false)
        setAuthA2(true)
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
     isAdmin();
  }, []);

  //I saw authA/auth is not setting instantly which results in home page shows login
  //while user is logged in so I had to use a callback function which makes sure 
  //SetState is in place.
  useEffect(() =>{
console.log(authA,auth);
  },[authA , auth])

  return (
    <React.Fragment>
      <Navbar auth={auth1} admin={authA} />
      <Routes>
        <Route exact path="/" element={<Home auth={auth1} />}  />
        <Route exact path="/bookARoadTest" element={<BookARoadTest />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/G1" element={<G1 auth={auth1}/>} />
        <Route exact path="/G2" element={<G2 auth={auth1}/>} />
        <Route exact path="/G" element={<G auth={auth1}/>} />
        <Route element={<AdminProtectedRoute adminAuth={authA2} />} >
          <Route exact path="/Admin" element={<Admin />} />
        </Route>
        <Route element={<AdminProtectedRoute adminAuth={authA} />} >
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoute auth={auth1} />}>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} auth={true} />
        </Route>

        <Route element={<ProtectedRoute auth={auth} />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/logout" element={<Logout />} auth={true} />
        </Route>
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/Resetpassword/Resetpassword/:token" element={<Resetpassword />} />
      </Routes>
      <Footer />
      <ScrollButton /> 
    </React.Fragment>
  );
}

export default App;
