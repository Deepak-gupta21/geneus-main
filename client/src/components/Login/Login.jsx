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
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <MDBContainer fluid className='box'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-4 mx-auto' style={{borderRadius: '1rem', maxWidth: '450px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h6 className="fw-bold mb-2 text-center text-dark">Log in to your Geneus Solutions account</h6>
              <MDBBtn className="mb-4 w-150 text-capitalize" size="lg" style={{backgroundColor: '#dd4b39'}}>
              <MDBIcon fab icon="google" className="mx-2"/>
              Continue with google
            </MDBBtn>

        {/*      <MDBBtn className="mb-4 w-150 text-capitalize" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>
 */}

              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
  
              <div className="d-flex justify-content-between text-dark mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>


              <MDBBtn className="mb-2 w-150 fw-bold text-capitalize" size='lg' >
                Log in
              </MDBBtn>

              <hr className="my-4 text-muted" />
              <p className="text-center text-body pb-0">Don't have an account?<Link as={Link} to='/signup' className='sign_up'>Sign up</Link></p>
              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;


