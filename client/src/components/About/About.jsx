import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = ({ loggedIn, username }) => {
  return (
    <div className="about_pages">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};
export default About;
