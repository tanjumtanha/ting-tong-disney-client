import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';



const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelGoogleSignIn = () => {
        // call googl sign in from auth provider
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleSignIn = event => {
        event.preventDefault();
        // get value from input field
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <Container className="w-75 mx-auto mt-3">
            <Row>
                <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
                    <div>
                        <img
                            src="https://i.ibb.co/PzYKFMR/istockphoto-1281150061-612x612.jpg"
                            alt="Login"
                            className="img-fluid mb-4 rounded"
                        />
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    <h3 className='text-danger text-center mt-5'>Please Login</h3>
                    <Form className='border border-danger p-3' onSubmit={handleSignIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button className='border border-danger' variant="light" type="submit">
                            Login
                        </Button>
                        <div className='mt-2'>
                            <Button className='me-3 border border-danger' variant="light" onClick={handelGoogleSignIn}><FaGoogle className='me-2 text-danger'></FaGoogle>Google</Button>
                        </div>
                        <Form.Text>Don't have an account? Please <Link to='/register' className='text-danger'>Register</Link></Form.Text>
                        <br />
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
};

export default Login;