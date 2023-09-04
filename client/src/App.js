import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Course from './components/Course/Course';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CourseDescription from './components/CourseDescription/CourseDescription';
import Cart from './components/Cart/Cart';
import {createContext, useReducer} from 'react';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [courses, setCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Failed to fetch course data:', error);
    }
  };

  const handleLogin = (name) => {
    setLoggedIn(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  const handleSearch = (query) => {
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  const initialState = 0;
  const reducer = (state, action) =>{
    switch(action){
      case 'increment':
        return state+1
      case 'decrement':
        return state-1;
      case 'reset':
        return initialState
      default:
        return state
    }
  }
  const [productCount, dispatch] = useReducer(reducer,initialState);

  return (
    <Router>
      <ToastContainer theme="colored" position="top-center" />
      <CartContext.Provider value={{countstate: productCount, countDispatch: dispatch }}>
      <Navbar loggedIn={loggedIn} username={username} onLogout={handleLogout} onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Course searchResults={searchResults} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courseDes/:id" element={<CourseDescription />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartContext.Provider>
      <Footer />
    </Router>
  );
};
export const CartContext = createContext();
export default App;