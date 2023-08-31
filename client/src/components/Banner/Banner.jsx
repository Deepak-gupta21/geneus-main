import React from 'react';
import './Banner.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Banner_1 from '../../assets/banner_1.jpg';
import Banner_2 from '../../assets/banner_2.jpg';
import Banner_3 from '../../assets/banner_3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <MDBCarousel showIndicators showControls dark >
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={Banner_1}
        height='400'
        alt='...'
      >
      <div class="text">
        <p>Unlock the doors of your mind through the key of your knowledge.</p>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={Banner_2}
        height='400'
        alt='...'
      >
      <div class="text">
       <p className='pb-0'>Every click is a step toward expanding your horizons.</p>
       <Link to='/courses' className='btn btn-outline-dark btn-md mb-3' role='button'>
            Go To Course
        </Link>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={Banner_3}
        height='400'
        alt='...'
      >
      <div class="text">
        <p>Empowering minds to write the code that shapes a world wired with possibilities.</p>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  
  );
}

export default Banner;
