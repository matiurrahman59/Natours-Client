import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// internal import
import { selectAllTours } from '../../store/tours/tour-selector';
import OverviewBoxDetails from './OverviewBoxDetails';
import BookTour from './BookTour';
import TourReview from './TourReview';
import TourPictureGallery from './TourPictureGallery';
import Error from '../Error/Error';
import axios from 'axios';

const TourDetails = () => {
  const [reviews, setReviews] = useState(null);
  const { tourID } = useParams();

  const tours = useSelector(selectAllTours);
  const filteredTour = tours.filter((tour) => tour.id === tourID);

  useEffect(() => {
    const getSingleTour = async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: `http://127.0.0.1:3000/api/v1/tours/${tourID}/reviews`,
        });
        console.log(res);
        setReviews(res.data.data.data);
      } catch (err) {
        if (err.data.data.data.length === 0) console.log(err);
      }
    };
    getSingleTour();
  }, []);

  // if (filteredTour.length === 0 || !reviews) {
  //   // return <h1>Loading Data...</h1>;
  //   return <Error />;
  // }

  if (filteredTour.length === 0) {
    return <Error />;
  }

  // if (filteredTour.length === 0 || !reviews) {
  //   return <Error />;
  // }

  const tour = filteredTour[0];
  const tourDescription = tour.description.split('\n');

  return (
    <>
      <section className='section-header'>
        <div className='header__hero'>
          <div className='header__hero-overlay'>&nbsp;</div>
          <img
            className='header__hero-img'
            src={`/images/tours/${tour.imageCover}`}
            alt={tour.name}
          />
        </div>

        <div className='heading-box'>
          <h1 className='heading-primary'>
            <span>{tour.name} tour</span>
          </h1>
          <div className='heading-box__group'>
            <div className='heading-box__detail'>
              <span className='heading-box__text'>{tour.duration} days</span>
            </div>
            <div className='heading-box__detail'>
              <span className='heading-box__text'>
                {tour.startLocation.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='section-description'>
        <div className='overview-box'>
          <div>
            <div className='overview-box__group'>
              <h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>
              <OverviewBoxDetails title='NEXT DATE' value='August 2021' />
              <OverviewBoxDetails title='DIFFICULTY' value={tour.difficulty} />
              <OverviewBoxDetails
                title='Participants'
                value={`${tour.maxGroupSize} people`}
              />
              <OverviewBoxDetails
                title='Rating'
                value={`${tour.ratingsAverage} / 5`}
              />
            </div>

            <div className='overview-box__group'>
              <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

              {tour.guides.map((guide, index) => (
                <div key={index} className='overview-box__detail'>
                  <img
                    src={`/images/users/${guide.photo}`}
                    alt={guide.name}
                    className='overview-box__img'
                  />

                  <span className='overview-box__label'>
                    {guide.role === 'lead-guide' ? 'Lead guide' : 'Tour guide'}
                  </span>
                  <span className='overview-box__text'>{guide.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='description-box'>
          <h2 className='heading-secondary ma-bt-lg'>About {tour.name} tour</h2>

          {tourDescription?.map((description, index) => (
            <p key={index} className='description__text'>
              {description}
            </p>
          ))}
        </div>
      </section>

      <TourPictureGallery tourImg={tour.images} />
      <TourReview reviews={reviews} />
      <BookTour tour={tour} />
    </>
  );
};

export default TourDetails;
