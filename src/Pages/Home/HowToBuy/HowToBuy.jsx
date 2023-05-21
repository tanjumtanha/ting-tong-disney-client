import React from 'react';
import { Link } from 'react-router-dom';
import './HowToBuy.css';

const HowToBuy = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card animate__animated animate__fadeInLeft">
            <img src="path_to_image" className="card-img-top" alt="Choose a Toy" />
            <div className="card-body">
              <h5 className="card-title">Choose a Toy</h5>
              <p className="card-text">Select from a wide range of toys available on our website.</p>
              <Link to="/choose-toy" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card animate__animated animate__fadeInUp">
            <img src="path_to_image" className="card-img-top" alt="Make Plans and Learn" />
            <div className="card-body">
              <h5 className="card-title">Make Plans and Learn</h5>
              <p className="card-text">Create a plan to purchase the toy and explore learning resources related to it.</p>
              <Link to="/make-plans" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card animate__animated animate__fadeInRight">
            <img src="path_to_image" className="card-img-top" alt="Swap and Repeat" />
            <div className="card-body">
              <h5 className="card-title">Swap and Repeat</h5>
              <p className="card-text">Join our toy swapping community and keep exploring new toys.</p>
              <Link to="/swap-repeat" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
