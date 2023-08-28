import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Logo from '../../assets/g.png';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

function NavbarComponent({ loggedIn, username, onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} height="60" width="150" alt="Logo" id="img" loading="lazy" />   
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
    
          <form className="search-bar">
            <div className="search-box">
              <MDBIcon className="search-icon ml-2" icon="search" />
              <input type="text" placeholder="Search for anything" />
              <button type="submit">Search</button>
            </div>
          </form>

          <Nav>
            {loggedIn ? (
              <>
                <Nav.Link className="text-primary fw-bold">Hello {username}</Nav.Link>
                <Nav.Link onClick={handleLogout} className="logout">
                  <h4 className="linkText">Logout</h4>
                </Nav.Link>
                <Nav.Link href="#action3" className='cart'><h4 className='linkText3'><MDBIcon icon="shopping-cart" size="x"/></h4></Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="login">
                  <h4 className="linkText1">Log in</h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="signup">
                  <h4 className="linkText2">Sign up</h4>
                </Nav.Link>
                <Nav.Link href="#action3" className='cart'><h4 className='linkText3'><MDBIcon icon="shopping-cart" size="x"/></h4></Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div className="about_pages">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    </>
  );
}

export default NavbarComponent;
