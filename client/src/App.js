import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

const App = () => {
  return (
    <Router>
    <ToastContainer theme="colored" position="top-center" />
    <Navbar />
        <Routes>
                <Route path="/login" element={<Login />} /> 
                <Route path="/signup" element={<Signup />} />    
            </Routes>
            <Routes>
            <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </Router>
  );
};
export default App;


