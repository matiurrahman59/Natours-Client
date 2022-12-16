import React from 'react';
import { Link } from 'react-router-dom';

const Tours = ({ tours }) => {
  return (
    <div className='main'>
      <div className='card-container'>
        {tours.length === 0 && <h2>Data loading</h2>}
        {tours &&
          tours.map((tour) => (
            <div className='card' key={tour.id}>
              <div className='card__header'>
                <div className='card__picture'>
                  <div className='card__picture-overlay'>&nbsp;</div>
                  <img
                    src={`images/tours/${tour.imageCover}`}
                    alt={tour.name}
                    className='card__picture-img'
                  />
                </div>

                <h3 className='heading-tertirary'>
                  <span>{tour.name}</span>
                </h3>
              </div>

              <div className='card__details'>
                <h4 className='card__sub-heading'>{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
                <p className='card__text'>{tour.summary}</p>
                <div className='card__data'>
                  {/* map icon */}
                  <span>{tour.startLocation.description}</span>
                </div>
                <div className='card__data'>
                  {/* calender icon */}
                  <span>
                    {new Date(tour.startDates[0]).toLocaleString('en-us', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className='card__data'>
                  {/* flag icon */}
                  <span>{tour.locations.length} stops</span>
                </div>
                <div className='card__data'>
                  {/* user icon */}
                  <span>{tour.maxGroupSize} people</span>
                </div>
              </div>

              <div className='card__footer'>
                <p>
                  <span className='card__footer-value'>${tour.price}</span>
                  <span className='card__footer-text'>&nbsp;per person</span>
                </p>
                <p className='card__ratings'>
                  <span className='card__footer-value'>
                    {tour.ratingsAverage}
                  </span>
                  <span className='card__footer-text'>
                    &nbsp;rating ({tour.ratingsQuantity})
                  </span>
                </p>
                <Link
                  to={`/tour/${tour.id}`}
                  className='btn btn--green btn--small'
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tours;
