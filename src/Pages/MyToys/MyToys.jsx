import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Table, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditToys from '../../EditToys/EditToys';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedToy, setSelectedToy] = useState(null);
    const [control, setControl] = useState(false);

    useTitle('My Toys')

    useEffect(() => {
        fetchToys();
    }, [user, control]);

    const fetchToys = (sort = null) => {
        let url = `https://ting-tong-disneyland-server.vercel.app/myToys/${user?.email}`;

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

    const handleEdit = (data) => {
        fetch(`https://ting-tong-disneyland-server.vercel.app/updateToys/${data?._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    setControl(!control);
                    toast.success('Toy updated successfully!');
                }
                setModalShow(false);
            })
            .catch((error) => {
                console.error('Error updating toy:', error);
                toast.error('Failed to update toy.');
                setModalShow(false);
            });
    };

    const handleEditClick = (toy) => {
        setSelectedToy(toy);
        setModalShow(true);
    };

    const handleDeleteClick = (toyId) => {
        if (window.confirm('Are you sure you want to delete this toy?')) {
            deleteToy(toyId);
        }
    };

    const deleteToy = (toyId) => {
        fetch(`https://ting-tong-disneyland-server.vercel.app/deleteToy/${toyId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount > 0) {
                    setControl(!control);
                    toast.success('Toy deleted successfully!');
                }
            })
            .catch((error) => {
                console.error('Error deleting toy:', error);
                toast.error('Failed to delete toy.');
            });
    };

    return (
        <div>
            <h2 className='text-center text-danger mb-4'>SEE THE TOYS YOU HAVE ADDED SO FAR</h2>
            <div className='w-75 mx-auto table-responsive'>
                <div className='d-flex justify-content-end mb-3'>
                    <Button variant='danger' className='me-2' onClick={handleSortAscending}>
                        Sort Ascending
                    </Button>
                    <Button variant='secondary' onClick={handleSortDescending}>
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
                                    <Button variant='danger' onClick={() => handleEditClick(toy)}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button className='p-2' variant='danger' onClick={() => handleDeleteClick(toy._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <EditToys show={modalShow} onHide={() => setModalShow(false)} toy={selectedToy} handelEdit={handleEdit} />
            <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
        </div>
    );
};

export default MyToys;
