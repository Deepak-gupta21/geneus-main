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
import { MDBCol } from "mdbreact";


function Navigation() {
  

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

    { /*   <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for anything"
              className="my-2 bg-light"
              aria-label="Search"
  />     
            <Button variant="info" className='btn btn-info'><MDBIcon icon="search" size="x"/></Button>   
  </Form>   
  */ }
  <MDBCol md="6">
  <div className="input-group md-form form-sm form-1">
    <div className="input-group-prepend">
      <span className="input-group-text blue lighten-3" id="basic-text1">
        <MDBIcon className="text-muted" icon="search" />
      </span>
    </div>
    <input
      className="form-control my-0 py-2"
      type="text"
      placeholder="Search for anything"
      aria-label="Search"
    />
  </div>
</MDBCol>



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