import React from 'react';

const TourReview = ({ reviews }) => {
  return (
    <section className='section-reviews'>
      <div className='reviews'>
        {reviews?.map((review) => (
          <div key={review.id} className='reviews__card'>
            <div className='reviews__avatar'>
              <img
                src={`/images/users/${review.user[0].photo}`}
                alt={review.user[0].name}
                className='reviews__avatar-img'
              />
              <h6 className='reviews__user'>{review.user[0].name}</h6>
            </div>
            <p className='reviews__text'>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourReview;
