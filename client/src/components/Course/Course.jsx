import React, { useState } from 'react';
import './Course.css';
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

const Course = () => {
  const courses = [
    { id: 1, name: 'React Beginner Course', level: 'beginner' },
    { id: 2, name: 'React Intermediate Course', level: 'intermediate' },
    { id: 3, name: 'React Advanced Course', level: 'advanced' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    if (selectedOption === 'beginner') {
      return course.level === 'beginner';
    } else if (selectedOption === 'intermediate') {
      return course.level === 'intermediate';
    } else if (selectedOption === 'advanced') {
      return course.level === 'advanced';
    }
    return true; 
  });
  const beginnerCourses = filteredCourses.filter((course) => course.level === 'beginner');
  const intermediateCourses = filteredCourses.filter((course) => course.level === 'intermediate');
  const advancedCourses = filteredCourses.filter((course) => course.level === 'advanced');

  return (
    <div>
    <div class="dropdown">
      <MDBDropdown>
      <MDBDropdownToggle color="info">{selectedOption || 'Categories'}</MDBDropdownToggle>
      <MDBDropdownMenu>
            
            <MDBDropdownItem link childTag='button' onClick={() => handleDropdownChange({ target: { value: 'beginner' } })}>
              Beginner
            </MDBDropdownItem>
            <MDBDropdownItem link childTag='button' onClick={() => handleDropdownChange({ target: { value: 'intermediate' } })}>
              Intermediate
            </MDBDropdownItem>
            <MDBDropdownItem link childTag='button' onClick={() => handleDropdownChange({ target: { value: 'advanced' } })}>
              Advanced
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
</div>

      <MDBRow className="row-cols-1 row-cols-md-4 g-4 mx-5 mb-4 mt-1">
        {beginnerCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Learn Java from Scratch</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
        {beginnerCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Learn HTML/CSS/Javascript</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      
        {intermediateCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Master ReactJS</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
        {intermediateCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Master Angular</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}

        {intermediateCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Master Springboot and RESTFUL Web Services</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}

        {intermediateCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>How to become Frontend Developer</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}

        {intermediateCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>How to become Backend Developer</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}

        {advancedCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>How to become Full Stack Developer</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
        {advancedCourses.map((course) => (
          <MDBCol key={course.id}>
            <MDBCard className="h-100">
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Become Web Developer in 3 months</MDBCardTitle>
                <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                    </div>
                <h6 className="mb-1">
                <s>&#8377;5000</s>
                <strong className="ms-2 text-danger">&#8377;1000</strong>
              </h6>
              <div className="text-center">
            <MDBBtn href='#'>Buy Now</MDBBtn>
            </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
        </MDBRow>
    </div>
  )
}
export default Course;
