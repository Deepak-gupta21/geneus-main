import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// import About from './components/About/About';
import Course from './components/Course/Course';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CourseDescription from './components/CourseDescription/CourseDescription';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setLoggedIn(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <ToastContainer theme="colored" position="top-center" />
      <Navbar loggedIn={loggedIn} username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      {/*   <Route
          path="/about"
          element={<About loggedIn={loggedIn} username={username} />} 
        />
        */}
        <Route path="/courses" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courseDes/:id" element={<CourseDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;