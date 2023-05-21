import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaRegGrinStars } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    // data load from database
    const toy = useLoaderData();
    console.log(toy)
    // destructure data
    const { picture, name, category, description, sellerEmail, sellerName, price, rating, quantity } = toy || {};
    return (
        <div className='p-4' style={{ backgroundColor: 'lightcyan' }}>
            <div className='w-75 mx-auto mb-4'>
                <div className='mb-4'>
                    <Row className='p-4 mt-3 border border-2 border-primary'>
                        <Col md={6} className="text-center">
                            <img className='rounded mt-4 w-100' style={{ height: '300px' }} src={picture} alt="" />
                        </Col>
                        <Col md={6}>
                            <div className="card-body mt-3">
                                <h4 className="card-title fs-4 mb-2">Name: {name}</h4>
                                <h6>Category : {category}</h6>
                                <h6>Seller Name : {sellerName}</h6>
                                <h6>Seller Email : {sellerEmail}</h6>
                                <h6>Price : {price}</h6>
                                <h6>Quantity : {quantity}</h6>
                                <p><span className='fs-5'>Description : </span>{description}</p>
                                <div className='mb-2 fs-5'>
                                    <FaRegGrinStars className='text-danger'></FaRegGrinStars> <span>{rating}</span>
                                </div>
                                <Link to='/'><Button className='btn-danger'>Go To Home</Button></Link>
                            </div>
                        </Col>

                    </Row>
                </div>

            </div>
        </div>
    );
};

export default ViewDetails;