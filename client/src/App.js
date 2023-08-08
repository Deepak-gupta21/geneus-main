import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Course from './components/Course/Course';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {

  const [islogged, setIslogged] = useState(false);
  const handleLogout = () => {
    setIslogged(false);
  };
  const handleLogin = () =>{
    setIslogged(true);
  }

  return (
    <Router>
    <ToastContainer theme="colored" position="top-center" />
    <Navbar islogged={islogged} handleLogin={handleLogin} handleLogout={handleLogout}/>
        <Routes>
                <Route path="/login" element={<Login handleLogin={handleLogin} /> } /> 
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Routes>
           <Route path="/about" element={<About />} />
           <Route path="/courses" element={<Course />} />
           <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
};
export default App;


