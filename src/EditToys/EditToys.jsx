import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EditToys = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        EDIT TOYS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input
                            className="form-control mb-3"
                            {...register("price")}
                            placeholder="Price"
                            defaultValue={props?.toy?.price}
                            type="number"
                        />
                        <input
                            className="form-control mb-3"
                            {...register("quantity")}
                            placeholder="Quantity"
                            defaultValue={props?.toy?.quantity}
                            type="number"
                        />

                        <textarea
                            className="form-control mb-3"
                            {...register("description")}
                            placeholder="Description"
                        />
                        <input className="btn btn-danger w-100 mb-2" value="Edit Toys" type="submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default EditToys;