import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const CategoryWiseToy = ({ toy }) => {
  const { _id, picture, name, price, rating } = toy || {};
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageVariants = {
    hover: { scale: 1.1 },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="col-lg-4 col-md-6 col-sm-12"
    >
      <Card className="mb-4" style={{backgroundColor:"lightpink"}}>
        <motion.img
          src={picture}
          alt={name}
          variants={imageVariants}
          className="card-img-top img-fluid"
          style={{height:"300px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${price}
            <br />
            <strong>Rating:</strong> {rating}
          </Card.Text>
          <Link to={`/products/${_id}`} className="btn btn-danger">
            View Details
          </Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CategoryWiseToy;
