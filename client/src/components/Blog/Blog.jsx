import React from 'react'
import './Blog.css';
import Banner from '../../assets/blog_banner.jpg';
import blog_1 from '../../assets/blog_1.png';
import blog_2 from '../../assets/blog_2.jpg';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol, 
  MDBIcon
} from 'mdb-react-ui-kit';

const Blog = () => {
  return (
   <div>
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage:`url(${Banner})`, height: 300 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>BLOG</h1>
              <h4 className='mb-3'>Latest updates and stats in tech</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="cards">
   <MDBCard style={{ maxWidth: '1000px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='7'>
          <MDBCardBody>
            <MDBCardTitle className="text-center mt-2 text-dark fs-4 fw-bold">What is the Hiring Cost of Fullstack Developer in 2023?</MDBCardTitle>
            <MDBCardText className='ml-5 my-2'><MDBIcon fas icon="calendar" />
              <small className='text-muted ml-2'>26 July, 2023</small>
            </MDBCardText>
            <MDBCardText className="text-center text-dark fs-6 fw-normal">
            Factors like Expertise, Experience, Geography, and Market Considerations affect the Fullstack Development Cost in 2023. However, they influence the hiring cost of fullstack developers for your preferred web app development; the prices can also vary depending on the country or region you choose. The technical stack affects the hiring cost of fullstack developers. The cost of hiring fullstack developer varies depending on the technical stack you choose and how much experience the developer has. However, the average cost stays between $20-$25 hourly.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='5'>
          <MDBCardImage src={blog_1} alt='...' id="img1" fluid className='my-2 pr-2'/>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</div>
<div class="cards">
    <MDBCard style={{ maxWidth: '1000px' }}>
    <MDBRow className='g-0'>
      <MDBCol md='7'>
        <MDBCardBody>
          <MDBCardTitle className="text-center mt-2 text-dark fs-4 fw-bold">Difference between Front-End, Back-End, and Full-Stack Development</MDBCardTitle>
          <MDBCardText className='ml-5 my-2'><MDBIcon fas icon="calendar" />
            <small className='text-muted ml-2'>30 July, 2023</small>
          </MDBCardText>
          <MDBCardText className="text-center text-dark fs-6 fw-normal">
          Whatever you see in a website/mobile application, i.e fonts, styles, user-interface, etc falls under frontend development. The background functioning, managing database, handling queries, and fetching data comes in the backend development. If you combine the previous two and the wholesome development is full-stack development.
          Frontend: essential knowledge of JS + Node, Vue, React and Angular.
          Backend: exceptional knowledge of PHP, Phyton, JAVA, Laravel, and Symfony.
          Fullstack: Both frontend as well as backend.
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md='5'>
        <MDBCardImage src={blog_2} id="img2" alt='...' fluid className='my-2 pr-2'/>
      </MDBCol>
    </MDBRow>
  </MDBCard>
    </div>
    </div>
  );
}

export default Blog;

