import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CategoryWiseToy = ({ toy }) => {
  const { _id, picture, name, price, rating } = toy || {};
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageVariants = {
    hover: { scale: 1.1 },
  };

  const renderRating = () => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} color="gold" />);
      } else if (hasHalfStar && i === filledStars) {
        stars.push(<FaStarHalfAlt key={i} color="gold" />);
      } else {
        stars.push(<FaStar key={i} color="lightgray" />);
      }
    }

    return stars;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="col-lg-4 col-md-6 col-sm-12"
    >
      <Card className="mb-4" style={{ backgroundColor: "lightpink" }}>
        <motion.img
          src={picture}
          alt={name}
          variants={imageVariants}
          className="card-img-top img-fluid"
          style={{ height: "350px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${price}
            <br />
            <div className='d-flex align-items-center'>
              {renderRating()}
              <span className='ms-1'>{rating}</span>
            </div>
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
