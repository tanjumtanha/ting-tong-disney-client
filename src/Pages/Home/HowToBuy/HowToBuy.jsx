import React from 'react';
import { Link } from 'react-router-dom';
import './HowToBuy.css';

const HowToBuy = () => {
  const cardColors = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info"];

  return (
    <div className="container">
      <h3 className="text-danger text-center">HOW TO BUY?</h3>
      <hr className="border border-2 border-danger" />
      <div className="row mt-4 p-4 mb-0">
        <div className="col-md-4">
          <div className={`card animate__animated animate__fadeInLeft h-100 p-3 ${cardColors[0]}`}>
            <img
              src="https://i.ibb.co/y0zKsLk/9b49edd2ac192453b1c9f70c639c7f95-w5000-h5000.png"
              className="card-img-top img-fluid h-50 rounded-circle mx-auto d-block"
              alt="Choose a Toy"
              width="200"
              height="200"
            />
            <div className="card-body d-flex flex-column align-items-stretch">
              <h5 className="card-title">Choose a Toy</h5>
              <p className="card-text">
                Explore a diverse collection of toys that cater to your child's interests and age group. Find the perfect
                toy to spark their imagination and create lasting memories.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card animate__animated animate__fadeInUp h-100 p-3 ${cardColors[1]}`}>
            <img
              src="https://i.ibb.co/RCm9xMD/a-children-playing-board-game-on-white-background-free-vector.webp"
              className="card-img-top img-fluid rounded-circle h-50 mx-auto d-block"
              alt="Make Plans and Learn"
              width="200"
              height="200"
            />
            <div className="card-body d-flex flex-column align-items-stretch">
              <h5 className="card-title">Make Plans and Learn</h5>
              <p className="card-text">
                Create an engaging playtime routine by planning activities and incorporating educational resources.
                Discover interactive ways to learn and have fun with your child.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card animate__animated animate__fadeInRight h-100 p-3 ${cardColors[2]}`}>
            <img
              src="https://i.ibb.co/0mzqsTZ/exchange-sign-replace-symbol-isolated-swap-business-logo-red-grin-circle-arrow-83995019.jpg"
              className="card-img-top img-fluid h-50 rounded-circle mx-auto d-block"
              alt="Swap and Repeat"
              width="200"
              height="200"
            />
            <div className="card-body d-flex flex-column align-items-stretch">
              <h5 className="card-title">Swap and Repeat</h5>
              <p className="card-text">
                Join a vibrant community of toy enthusiasts and experience the joy of toy swapping. Connect with fellow
                parents to exchange toys, broaden your child's playtime horizons, and create a sustainable toy ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
