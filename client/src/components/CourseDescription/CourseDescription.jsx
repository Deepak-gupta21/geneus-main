import React from 'react';
import {
  MDBContainer, 
  MDBRow, 
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import './CourseDescription.css';
import { useState, useEffect } from 'react';

const CourseDescription = () => {
  
  const [courseDetails, setCourseDetails] = useState({});
  const [discount, setDiscount] = useState(0);

  useEffect(()=> {
    const fetchCourseDetails = async () => {
    const segments = window.location.pathname.split('/');
    const Id= segments[segments.length - 1];
    
    const url="http://localhost:8000/courseDes/"+Id;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCourseDetails(data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
 
  }
  fetchCourseDetails();
  },[]);

  // Calculating the discount percentage dynamically
  useEffect(()=>{
    if(courseDetails){
      const calculateDiscount = () => {
        const p = courseDetails && courseDetails?.price;
        const dp = courseDetails && courseDetails?.discount_price;
        setDiscount(((p-dp)/p)*100);
      }
      calculateDiscount();
    }
  },[courseDetails])

  return (
    <MDBContainer>
      <MDBRow md='2'>
      
      <hr className='hr'/>
      
      <MDBCard style={{ maxwidth: '1000px' }}>
        <MDBRow className='g-8'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href='/about'>Home</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href="/courses">Courses</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>
              {courseDetails && courseDetails?.title}
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBRow>
      </MDBCard>

      <hr className='hr'/>

      <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-8'>
        <MDBCol md="6">
          <MDBCardImage src={courseDetails &&  courseDetails?.img} alt='...' id="img1" fluid className='my-3 pr-3'/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody className='pb-2'>
            <MDBCardTitle className="mt-2 text-dark fs-2 fw-bold">{courseDetails && courseDetails?.title}</MDBCardTitle>
            <div className='pt-3'>
              <h6 className='validity'>Validity Period: Lifetime</h6>
              <div className="mb-1">
                  <h6 className='mb-1'><s>&#8377;{courseDetails && courseDetails?.price}</s>&ensp;{discount && discount}% OFF</h6>
                  <strong className="ms-2 text-danger fs-3">&#8377;{courseDetails && courseDetails?.discount_price}</strong>
              </div>
              <div>
                  <MDBBtn size='md' href='#'>Add to Cart</MDBBtn>
              </div>
            </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <hr className='hr'/>

      <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='10'>
          <MDBCardBody>
            <MDBCardTitle className="mt-2 text-dark fs-4 fw-bold">What you'll learn</MDBCardTitle>
            
            <MDBCardText className="fs-6 fw-normal">
            <div className='div-margin'>
            <div className='div1'> 
            <ul className='ticks'>
              {courseDetails && courseDetails?.learnings?.slice(0,3).map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
 
            </ul>
            </div> 
            <div className='div2'>
            <ul className='ticks'>
              {courseDetails && courseDetails?.learnings?.slice(3).map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
            </div>
            </div>
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <hr className='hr'/>

    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-8'>
        <MDBCol md='10'>
          <MDBCardBody>
            <MDBCardTitle className="mt-2 text-dark fs-4 fw-bold">Requirements</MDBCardTitle>
          </MDBCardBody>
          <MDBCardText className="fs-6 fw-normal">
            <div className='div-margin'>
              <ul>
                {courseDetails && courseDetails?.requirements?.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <hr className='hr'/>

    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-8'>
        <MDBCol md='10'>
          <MDBCardBody>
            <MDBCardTitle className=" mt-2 text-dark fs-4 fw-bold">Description</MDBCardTitle>
          </MDBCardBody>
          <MDBCardText className="fs-6 fw-normal">
          <div style={{margin: "3px"}}>
            <div className='div-margin'>
              <h5><b>What's this course about?</b></h5>
              <p>
              {courseDetails && courseDetails?.aboutCourse?.intro}
              </p>
            </div>
            <div className='div-margin'>
              <ul> 
                {courseDetails && courseDetails?.aboutCourse?.details?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul> 
            </div>
          </div>
          
          <br/>
          <div>
            <div className='div-margin'>
              <h5><b>Why {courseDetails && courseDetails?.whythisCourse?.title}?</b></h5>
              <p>
              {courseDetails && courseDetails?.whythisCourse?.intro}
              </p>
            </div>
            <div className='div-margin'>
              <ul>
              {courseDetails && courseDetails?.whythisCourse?.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
              </ul>
            </div>
            <div className='div-margin'>
              <p>
              {courseDetails && courseDetails?.whythisCourse?.outro}
              <br/>
              <b>Enroll now!! see you in class.
                <br/>
                Happy Learning
                <br/>
                Team Geneus
              </b>
              </p>
            </div>
          </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <hr className='hr'/>

    <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-8'>
        <MDBCol md='10'>
          <MDBCardBody>
            <MDBCardTitle className="mt-2 text-dark fs-4 fw-bold">Who this course is for:</MDBCardTitle>
          </MDBCardBody>
          <MDBCardText className="fs-6 fw-normal">
            <div className='div-margin'>
              <ul>
                {courseDetails && courseDetails?.whoitsfor?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <hr className='hr'/>
        
      </MDBRow>
    </MDBContainer>
  );
}

export default CourseDescription;