import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2 className='text-center text-danger mb-4'>ALL THE TOYS</h2>
            <div className='w-75 mx-auto table-responsive'>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((toy, index) => (
                            <tr key={toy._id}>
                                <td>{index + 1}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td><Link to={`/details/${toy._id}`} className="btn btn-danger">
                                    View Details
                                </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllToys;