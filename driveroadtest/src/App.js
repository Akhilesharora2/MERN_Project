import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {

  //Check if user is logged in?
   const [auth, setAuth]  = useState(false);
   const [auth1, setAuth1]  = useState(true);
 
   const isLoggedIn = async () =>{
     try {
       const res = await fetch('/auth', {
         method : "GET",
         headers: {
           Accept: "application/json",
           "content-type": "application/json"
         },
         credentials: "include"
       });
 
       if(res.status === 200){
         setAuth(true)
         setAuth1(false)
       }
       if(res.status === 401){
         setAuth(false)
         setAuth1(true)
       }
 
     } catch (error) {
       console.log(error);
     }
   }
 
   useEffect(() => {
     isLoggedIn();
   }, []);
   

  return (
    <>
      <Navbar auth={auth1} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoute auth={auth1} />}>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} auth={true} />
        </Route>

        <Route element={<ProtectedRoute auth={auth} />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/logout" element={<Logout />} auth={true} />
        </Route>

      </Routes>
      <Footer />
    </>
  ); 
}

export default App;
