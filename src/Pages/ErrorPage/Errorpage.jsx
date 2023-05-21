import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} sm={6} md={6}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png"
            alt="Error"
            className="img-fluid mb-4"
          />
        </Col>
        <Col xs={12} sm={6} md={6}>
          <h1 className="text-center mb-3">Oops! Something went wrong.</h1>
          <p className="text-center mb-4">
            We apologize for the inconvenience. The page you are looking for
            does not exist.
          </p>
          <div className="text-center">
            <Button as={Link} to="/" variant="danger">
              Go to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
