import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Table, Button } from 'react-bootstrap';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = (sort = null) => {
        let url = `http://localhost:5000/myToys/${user?.email}`;

        if (sort) {
            url += `?sort=${sort}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
            .catch(error => {
                console.error('Error fetching toys:', error);
            });
    };

    const handleSortAscending = () => {
        const sortedToys = [...toys].sort((a, b) => a.price - b.price);
        setToys(sortedToys);
    };

    const handleSortDescending = () => {
        const sortedToys = [...toys].sort((a, b) => b.price - a.price);
        setToys(sortedToys);
    };

    return (
        <div>
            <h2 className='text-center text-danger mb-4'>SEE THE TOYS YOU HAVE ADDED SO FAR</h2>
            <div className='w-75 mx-auto table-responsive'>
                <div className="d-flex justify-content-end mb-3">
                    <Button variant="danger" className="me-2" onClick={handleSortAscending}>
                        Sort Ascending
                    </Button>
                    <Button variant="secondary" onClick={handleSortDescending}>
                        Sort Descending
                    </Button>
                </div>
                <hr className='border border-2 border-danger' />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys?.map((toy, index) => (
                            <tr key={toy._id}>
                                <td>{index + 1}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Button variant="secondary" size="sm">
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" size="sm">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyToys;
