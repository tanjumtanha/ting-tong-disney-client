import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://ting-tong-disneyland-server.vercel.app/allToys')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mb-3" data-aos="fade-up">
      <h2 className="text-center text-danger fs-1 bold mb-2">Gallery</h2>
      <div className="w-75 mx-auto">
        <hr className='border border-2 border-danger'/>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d._id} data-aos="zoom-in">
              <div className="col-md-4 mb-4">
                <img
                  src={d.picture}
                  className="img-fluid rounded-circle animated fadeIn"
                  style={{ height: '250px', width: '100%' }}
                  alt={d.title}
                />
              </div>
            </div>
          ))}
        </Slider>
        <hr className='border border-2 border-danger mt-4'/>
      </div>
    </div>
  );
};

export default Gallery;
