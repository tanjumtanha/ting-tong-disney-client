import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './ReviewPage.css';
import { FaStarHalf } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewPage = () => {
  const { id } = useParams();

  const reviews = [
    {
      id: 1,
      title: 'Prince Eric',
      content: 'I bought a toy from their website. This toy was good and received it in a good condition. I loved it.',
      user: {
        name: 'John Doe',
        image: 'https://i.ibb.co/cJz3cFx/P3-OLGJ1-copy-1.png'
      },
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Elsa',
      content: 'I bought a toy from their website. This toy was good and received it in a good condition. I loved it.',
      user: {
        name: 'Jane Smith',
        image: 'https://i.ibb.co/ctMxJJf/images.jpg'
      },
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Aladdin',
      content: 'I bought a toy from their website. This toy was good and received it in a good condition. I loved it.',
      user: {
        name: 'Mike Johnson',
        image: 'https://i.ibb.co/cJz3cFx/P3-OLGJ1-copy-1.png'
      },
      rating: 4.5,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='p-4'>
      <h2 className="text-center mt-5">WHAT PEOPLE SAY ABOUT US</h2>
      <hr className='w-75 mx-auto border border-2 border-danger' />
      <div className="container">
        <div className="row">
          {reviews.map((review, index) => (
            <div className="col-md-4" key={index} data-aos="fade-up">
              <div className="card mt-4">
                <div className="card-body" style={{ backgroundColor: "lightpink" }}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={review.user.image} alt={review.user.name} className="review-user-image" />
                    <div className="ms-3">
                      <h5 className="card-title">Review for:{review.title}</h5>
                      <p className="card-subtitle text-muted">By {review.user.name}</p>
                      <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((i) => {
                          if (i <= review.rating) {
                            return <AiFillStar key={i} className="star-filled" />;
                          } else if (i - 0.5 === review.rating) {
                            return <FaStarHalf key={i} className="star-half" />;
                          } else {
                            return <AiOutlineStar key={i} className="star-empty" />;
                          }
                        })}
                        <span className="star-rating-value">{review.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="card-text">{review.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
