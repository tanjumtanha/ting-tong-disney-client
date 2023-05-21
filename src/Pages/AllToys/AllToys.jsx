import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        fetch(`http://localhost:5000/allToys?search=${encodeURIComponent(search)}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
            .catch(error => {
                console.error('Error searching toys:', error);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:5000/allToys`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
            .catch(error => {
                console.error('Error fetching toys:', error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-center text-danger mb-4">ALL THE TOYS</h2>
            <div className="w-75 mx-auto table-responsive">
                <div className="search-box p-2 text-center mb-3">
                    <input
                        type="text"
                        className="p-2 me-2"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className="btn btn-outline-danger" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr className="text-center">
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
                        {toys?.map((toy, index) => (
                            <tr key={toy._id}>
                                <td>{index + 1}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/details/${toy._id}`} className="btn btn-danger">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllToys;
