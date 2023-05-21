import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner p-3">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <img
              className="img-fluid rounded-circle img-animation"
              src="https://i.ibb.co/FW4zgcT/ting4.jpg"
              alt="Banner Image"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="banner-content">
              <h1 className="website-name">
                <span className="text-danger">Ting Tong</span>
                <span className="text-primary"> DisneyLand</span>
              </h1>
              <p className="website-description">
                Explore a magical world of Disney toys and create memorable moments of joy and imagination.
              </p>
              <div className="button-group">
                <Button variant="danger" className="about-button">
                  About
                </Button>
                <Button variant="danger" className="shop-now-button">
                  Shop Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
