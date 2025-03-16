import React from 'react'
import './Reviews.css'

const reviews = [
    {
      id: 1,
      name: "John Deo",
      role: "Happy Customer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sit corporis voluptate non error obcaecati adipisci.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Happy Customer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sit corporis voluptate non error obcaecati adipisci.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Happy Customer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sit corporis voluptate non error obcaecati adipisci.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
    },
  ];
  
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
  
    return (
      <div className="review-stars">
        {[...Array(fullStars)].map((_, index) => (
          <span key={index}>★</span>
        ))}
        {halfStar && <span>★</span>}
      </div>
    );
  };

const Reviews = () => {
    return (
        <div className="review-section">
          <h2 className="review-title">
            Customer's <span>Review</span>
          </h2>
    
          <div className="review-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <StarRating rating={review.rating} />
                <p className="review-text">{review.review}</p>
    
                <div className="review-footer">
                  <img src={review.image} alt={review.name} className="review-img" />
                  <div className="review-details">
                    <h3 className="review-name">{review.name}</h3>
                    <p className="review-role">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Reviews
