// import React, { useState } from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <div className='about_pages'>
//     <ul>
//   <li><a href="/">Home</a></li>
//   <li><a href="/courses">Courses</a></li>
//   <li><a href="/blog">Blogs</a></li>
//   <li><a href="/contact">Contact Us</a></li>
// </ul>
//     </div>
//   )
// }
// export default About;




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
