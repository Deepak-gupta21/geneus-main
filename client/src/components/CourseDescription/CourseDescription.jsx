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
import { useState, useEffect, useContext } from 'react';
import reactStringReplace from 'react-string-replace';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

const CourseDescription = () => {
  
  const [courseDetails, setCourseDetails] = useState({});
  const [discount, setDiscount] = useState(0);
  const [len, setLen] = useState(0);
 
  const [formattedCourseIntro, setFormattedCourseIntro] = useState("");
  const [formattedCourseIntro2, setFormattedCourseIntro2] = useState("");
  const [formattedCourseOutro, setFormattedCourseOutro] = useState("");
  const [formattedAboutCourse, setFormattedAboutCourse] = useState([]);
  const [formattedWhyCourse, setFormattedWhyCourse] = useState([]);

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
      const calculateLength = () => {
        const lenth = courseDetails && courseDetails?.learnings?.length;
        let halfLen = Math.ceil(lenth/2);
        setLen(halfLen);
        console.log(len);
      }
      calculateDiscount();
      calculateLength();
    }
  },[courseDetails,len])

  useEffect(() => {
    const formatText = (text) => {
      const formattedText = reactStringReplace(text, /\*\*(.*?)\*\*/g, (match, i) => (
        <span key={i} className='bold'>{match}</span>
      ));
      return formattedText;
    };

    if(courseDetails && courseDetails?.aboutCourse?.intro){
    setFormattedCourseIntro(formatText(courseDetails && courseDetails?.aboutCourse?.intro));
    }
    if(courseDetails && courseDetails?.whythisCourse?.intro){
    setFormattedCourseIntro2(formatText(courseDetails && courseDetails?.whythisCourse?.intro));
    }
    if(courseDetails && courseDetails?.whythisCourse?.outro){
    setFormattedCourseOutro(formatText(courseDetails && courseDetails?.whythisCourse?.outro));
    }
    if(courseDetails && courseDetails?.aboutCourse?.details){
      setFormattedAboutCourse(courseDetails && courseDetails.aboutCourse.details.map(detail => formatText(detail)));
    }
    if(courseDetails && courseDetails?.whythisCourse?.details){
      setFormattedWhyCourse(courseDetails && courseDetails.whythisCourse.details.map(detail => formatText(detail)));
    }
  },[courseDetails]);

  const cartProductCount = useContext(CartContext);

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
                <Link to="#">
                  <MDBBtn size='md' onClick={() => cartProductCount.countDispatch('increment')}>Add to Cart</MDBBtn>
                </Link>
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
              {courseDetails && courseDetails?.learnings?.slice(0,len && len).map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
 
            </ul>
            </div> 
            <div className='div2'>
            <ul className='ticks'>
              {courseDetails && courseDetails?.learnings?.slice(len && len).map((learning, index) => (
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
              {formattedCourseIntro && formattedCourseIntro}
              </p>
            </div>
            <div className='div-margin'>
              <ul> 
                {formattedAboutCourse && formattedAboutCourse?.map((detail,index) => (
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
              {formattedCourseIntro2 && formattedCourseIntro2}
              </p>
            </div>
            <div className='div-margin'>
              <ul>
              {formattedWhyCourse && formattedWhyCourse.map((detail,index) => (
                <li key={index}>{detail}</li>
              ))}
              </ul>
            </div>
            <div className='div-margin'>
              <p>
              {formattedCourseOutro && formattedCourseOutro} 
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