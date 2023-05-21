import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2>All Toys:{data.length}</h2>
        </div>
    );
};

export default AllToys;