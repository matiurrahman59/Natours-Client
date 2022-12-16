import React from 'react';

const TourPictureGallery = ({ tourImg }) => {
  return (
    <section className='section-pictures'>
      {tourImg.map((img, index) => (
        <div key={index} className='picture-box'>
          <img
            className={`picture-box__img picture-box__img--${index + 1}`}
            src={`/images/tours/${img}`}
            alt={`The Park Camper Tour ${index + 1}`}
          />
        </div>
      ))}
    </section>
  );
};

export default TourPictureGallery;
