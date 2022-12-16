import React from 'react';

// internal import
import logo from '/images/logo-white.png';

const BookTour = ({ tour }) => {
  return (
    <section className='section-cta'>
      <div className='cta'>
        <div className='cta__img cta__img--logo'>
          <img src={logo} alt='Natours logo' />
        </div>
        <img
          src={`/images/tours/${tour.images[0]}`}
          alt='Tour picture'
          className={`cta__img cta__img--1`}
        />
        <img
          src={`/images/tours/${tour.images[1]}`}
          alt='Tour picture'
          className={`cta__img cta__img--2`}
        />

        <div className='cta__content'>
          <h2 className='heading-secondary'>What are you waiting for?</h2>
          <p className='cta__text'>
            {tour.duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          <button className='btn btn--green span-all-rows'>
            Book tour now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookTour;
