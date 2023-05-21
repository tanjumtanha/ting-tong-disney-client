import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 mt-0" style={{backgroundColor:'lightpink'}}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="text-center text-md-left mb-4">
            <img className='w-25 h-25 rounded-circle' src="https://i.ibb.co/dfWN0KL/39b0e73a56534f51a83542cbef2b6691-1.png" alt="Website Logo" />
              <h5 className="mt-3"><span className='text-danger'>Ting Tong</span><span className='text-primary'> DisneyLand</span></h5>
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="text-center text-md-left mb-4">
              <h5>Contact Information</h5>
              <hr />
              <p>Email: info@example.com</p>
              <p>Phone: +1 123-456-7890</p>
              <p>Address: 123 Toy Street, City, Country</p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="text-center text-md-left mb-4">
              <h5>Follow Us</h5>
              <hr />
              <div className="d-flex justify-content-center justify-content-md-center">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaFacebook size={24} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p className="text-center">
              <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
