import { 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
 } from "mdb-react-ui-kit";
import React from "react";

const Cart = () => {
  return (
    <MDBContainer>

      <hr className='hr'/>

      <MDBRow>
        <MDBCol md="12">
          <div className="text-start fs-1 fw-bold">Shopping Cart</div>
          <div className="fst-normal fs-6 mt-2 ml-2"><h6>2 Courses</h6></div>
        </MDBCol>
      </MDBRow>

      <hr className='hr'/>
      <MDBRow>
        <MDBCol md='9'>
          
          {/* 1st course */}
          <MDBRow>
          <div className="d-flex flex-start mt-2">
          <MDBCol md="2">
          <img fluid className="shadow-1-strong me-3" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGUn0ZFXgxFotbsNqDHWdDKGv3GnrIVAD-9BRUhEQ2RPf4Dm5m8dV0RThNsVnwGnQ1-k&usqp=CAU" 
                alt="avatar" 
                width="150"
                height="120" />{/** Adjust image height */}
          </MDBCol>
          <MDBCol md="6">
            <div className="ml-2 mt-2 mb-2">
                <h5 class="fw-bold mb-1">Course Title</h5>
                <div class="d-flex align-items-center mb-3">

                </div>
                <p class="mb-0">
                  Course Description
                </p>
            </div>
          </MDBCol>
          <MDBCol md="2">
            <div className="ml-1 mt-2 text-end fs-6">
              <a href="#">Remove</a><br/>
              <a href="#">Move to wishlist</a>
            </div>
          </MDBCol>
          <MDBCol md="2">
            <div className="ml-1 mt-2">
              <div className="mb-1">
                <strong className="text-danger fs-5">&#8377;1000</strong>
                <h6 className='mb-1'><s>&#8377;5000</s></h6>  
              </div>
            </div>
          </MDBCol>   
          </div>
          </MDBRow>
        
          {/* 2nd course */}
          <MDBRow>
          <div className="d-flex flex-start mt-2">
          <MDBCol md="2">
          <img fluid className="shadow-1-strong me-3" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGUn0ZFXgxFotbsNqDHWdDKGv3GnrIVAD-9BRUhEQ2RPf4Dm5m8dV0RThNsVnwGnQ1-k&usqp=CAU" 
                alt="avatar" 
                width="150"
                height="120" />{/** Adjust image height */}
          </MDBCol>
          <MDBCol md="6">
            <div className="ml-2 mt-2 mb-2">
                <h5 class="fw-bold mb-1">Course Title</h5>
                <div class="d-flex align-items-center mb-3">

                </div>
                <p class="mb-0">
                  Course Description
                </p>
            </div>
          </MDBCol>
          <MDBCol md="2">
            <div className="ml-1 mt-2 text-end fs-6">
              <a href="#">Remove</a><br/>
              <a href="#">Move to wishlist</a>
            </div>
          </MDBCol>
          <MDBCol md="2">
            <div className="ml-1 mt-2">
              <div className="mb-1">
                <strong className="text-danger fs-5">&#8377;1000</strong>
                <h6 className='mb-1'><s>&#8377;5000</s></h6>  
              </div>
            </div>
          </MDBCol>   
          </div>
          </MDBRow>

          {/* next courses */}

        </MDBCol>

        <MDBCol md='3'>

          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-start fs-6 fw-normal text-muted">total:</MDBCardTitle>
              <MDBCardText>
                <div className="mb-1">
                  <strong className="text-danger fs-4">&#8377;2000</strong>
                  <h6 className='fs-6'><s>&#8377;10,000</s></h6>
                  <h6 className='fs-6'>80% off</h6>  
                </div>
              </MDBCardText>
              <MDBBtn className="text-center btn-block"  size='lg' style={{ backgroundColor: '#333333' }}>Checkout</MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

      <hr className='hr'/>

      <MDBRow>
        <MDBCol md="12">
          <div className="text-start fs-3 fw-bold">You might also like</div>
          <div className="fst-normal fs-6 mt-2 ml-2"><h6>Carousal of Courses</h6></div>
        </MDBCol>
      </MDBRow>

      <hr className='hr'/>
    </MDBContainer> 
  );
};

export default Cart;