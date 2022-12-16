import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <img src='../assets/images/tours/tour-1-1.jpg' alt='' />
      To see content go to <Link to='/'>Home page</Link>{' '}
    </div>
  );
};

export default PageNotFound;
