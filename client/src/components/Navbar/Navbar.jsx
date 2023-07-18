import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Logo from '../../assets/logo-min.JPG';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Navigation() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`#=${searchTerm}`);
      const data = await response.json();
      setShows(data.map(item => item.show));
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href='#'>
      <img
         src={Logo}
        height='50'
        width='70'
        alt='Logo'
        id="img"
       loading='lazy'
      />
     </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">App Development</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                IT Software
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>


<form className="search-bar" onSubmit={handleSearch}>
<div className="search-box">
      <MDBIcon className="search-icon ml-2" icon="search" />
       <input type="text" placeholder="Search for anything" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <button type="submit">Search</button>
     </div>
</form>




  <Nav>
          <Nav.Link as={Link} to='/login' className='login'><h4 className='linkText1'>Log in</h4></Nav.Link>
          <Nav.Link as={Link} to='/signup' className='signup'><h4 className='linkText2'>Sign up</h4></Nav.Link>
          <Nav.Link href="#action3" className='cart'><h4 className='linkText3'><MDBIcon icon="shopping-cart" size="x"/></h4></Nav.Link>
  </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;