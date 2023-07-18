import React, { useState } from 'react';
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
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup=() => {
const[name, setName]=useState("");
const[email, setEmail]=useState("");
const[password, setPassword]=useState("");

const handleSubmit=async(e) =>{
  e.preventDefault();
  try{
  const {data}=await axios.post("http://localhost:8000/signup", {name, email, password});
  toast.success("Registration success, please login")
}
catch(err){
  toast.error(err.response.data);
}
}
  return (
    <MDBContainer fluid className='box'>
    <form onSubmit={handleSubmit}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-4 mx-auto' style={{borderRadius: '1rem', maxWidth: '450px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h6 className="fw-bold mb-4 text-center text-dark">Sign up and start learning</h6>
 <MDBInput wrapperClass='mb-4 w-100' onChange={(e) => setName(e.target.value)} name='name' label='Full name' id='name' type='text' size="lg"/>
 <MDBInput wrapperClass='mb-4 w-100' onChange={(e) => setEmail(e.target.value)} name='email' label='Email' id='email' type='email' size="lg"/>
 <MDBInput wrapperClass='mb-4 w-100' onChange={(e) => setPassword(e.target.value)} name='password' label='Password' id='pwd' type='password' size="lg"/>

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
      </form>
    </MDBContainer>
  );
}

export default Signup;


