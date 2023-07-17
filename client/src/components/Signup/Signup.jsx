import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Signup.css';
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <MDBContainer fluid className='box'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-4 mx-auto' style={{borderRadius: '1rem', maxWidth: '450px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h6 className="fw-bold mb-4 text-center text-dark">Sign up and start learning</h6>

      
 <MDBInput wrapperClass='mb-4 w-100' label='Full name' id='formControlLg' type='text' size="lg"/>
 <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
 <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <div className="d-flex justify-content-between text-dark mb-2 fs-500 fw-lighter">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Send me special offers, personalized recommendations, and learning tips' />
            </div>


              <MDBBtn className="mb-4 w-120 fw-bold text-capitalize" size='lg' >
                Sign up
              </MDBBtn>

              <hr className="my-4 text-muted" />
              <p className="text-center text-body">Already have an account? <Link as={Link} to='/login' className='log_in'> Log in</Link></p>
              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;


