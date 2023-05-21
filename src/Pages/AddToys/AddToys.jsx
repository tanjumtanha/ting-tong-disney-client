import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        toast.error('Toys added to server successfully!!', {
            position: toast.POSITION.TOP_CENTER
        });
        fetch('http://localhost:5000/addToys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data)
    };

    return (
        <div>
            <Container className='w-50 mx-auto mt-3'>
                <h3 className='text-danger text-center'>Add Toys</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <select className="form-control mb-3" {...register("category")}>
                        <option value="Disney Princes">Disney Princes</option>
                        <option value="Frozen Dolls">Frozen Dolls</option>
                        <option value="Animation Characters">Animation Characters</option>
                        <option value="Donald Duck">Donald Duck</option>
                    </select>
                    <input
                        className="form-control mb-3"
                        {...register("name")}
                        placeholder="Toys Name"
                    />
                    <input
                        className="form-control mb-3"
                        {...register("picture")}
                        placeholder="Image URL"
                        type="url"
                    />
                    <input
                        className="form-control mb-3"
                        {...register("price")}
                        placeholder="Price"
                        type="number"
                    />
                    <input
                        className="form-control mb-3"
                        {...register("quantity")}
                        placeholder="Quantity"
                        type="number"
                    />
                    <input
                        className="form-control mb-3"
                        {...register("rating", { pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })}
                        placeholder="Rating"
                        type="number"
                        step="0.01"
                    />
                    <input
                        className="form-control mb-3"
                        {...register("seller-name")}
                        placeholder="Seller Name"
                    />
                    <textarea
                        className="form-control mb-3"
                        {...register("description")}
                        placeholder="Description"
                    />
                    <input
                        className="form-control mb-3"
                        defaultValue={user?.email}
                        {...register("seller-email")}
                        placeholder="Your Email"
                        type="email"
                    />
                    <input className="btn btn-danger w-100 mb-2" value="Add Toys" type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddToys;
