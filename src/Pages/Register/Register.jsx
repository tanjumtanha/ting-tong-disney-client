import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    // page wise title show
    useTitle('Register')

    //setError('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name,email,photo,password)
        if (password.length < 6) {
            setError('Your password need to have at-least 6 character!');
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                toast.success('Account created successfully!!', {
                    position: toast.POSITION.TOP_CENTER
                });
                form.reset();
                updateUserData(createdUser, name, photo);
                navigate('/login');
            })
            .catch(error => {
                setError(error.message)
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
                    <h3 className='text-danger text-center'>Please Register</h3>
                    <Form className='border border-danger p-3' onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter Your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Button className='border border-danger' variant="light" type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text className='text-secondary'>
                            Already have an account? Please <Link to='/login' className='text-danger'>Login</Link>
                        </Form.Text>
                        <br />
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;