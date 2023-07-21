import React from 'react';
import './Contact.css';
import { MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Contact = () => {
  return (
    <div class="contact_us_green">
  <div class="responsive-container-block big-container">
    <div class="responsive-container-block container">
      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
        <form class="form-box">
          <div class="container-block form-wrapper">
            <div class="head-text-box">
              <p class="text-blk contactus-head">
                Contact Us
              </p>
            </div>
            <div class="responsive-container-block">
              <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                <p class="text-blk input-title">
                  First Name
                </p>
                <input class="input" id="ijowk-6" name="FirstName" placeholder="First Name" />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p class="text-blk input-title">
                  Last Name
                </p>
                <input class="input" id="indfi-4" name="Last Name" placeholder="Last Name" />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p class="text-blk input-title">
                  Email
                </p>
                <input class="input" id="ipmgh-6" name="Email" placeholder="Email" />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                <p class="text-blk input-title">
                  Mobile Number
                </p>
                <input class="input" id="imgis-5" name="PhoneNumber" placeholder="Mobile Number" />
              </div>
              <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                <p class="text-blk input-title">
                  Message
                </p>
                <textarea class="textinput" id="i5vyy-6" placeholder="Please enter query..."></textarea>
              </div>
            </div>
            <div class="btn-wrapper">
              <button class="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10" id="ifgi">
        <div class="container-box">
          <div class="text-content">
            <p class="text-blk contactus-head">
              Contact Us
            </p>
          </div>
          <div class="workik-contact-bigbox">
            <div class="workik-contact-box">
              <div class="phone text-box">
              <p class="icon"><MDBIcon icon="phone" size="2x" /> </p>
                <p class="contact-text">
                  +91 xxxxx yyyyy
                </p>
              </div>
              <div class="address text-box">
              <p class="icon"><MDBIcon icon="envelope" size="2x" /> </p>
                <p class="contact-text">
                  example@gmail.com
                </p>
              </div>
              <div class="mail text-box">
              <p class="icon"><MDBIcon icon="map-marker-alt" size="2x" /> </p>
                <p class="contact-text">
                  xxxx, yyyyy, zzzzz
                </p>
              </div>
            </div>
            <h3>Follow Us</h3>
            <div class="social-media-links">
              <a href="#linkedin">
              <MDBIcon fab icon="linkedin" size="2x" />
              </a>
              <a href="https://www.facebook.com/geneus.solutions">
              <MDBIcon fab icon="facebook" size="2x" />
              </a>
              <a href="https://www.instagram.com/geneus.solutions/">
              <MDBIcon fab icon="instagram" size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Contact;

