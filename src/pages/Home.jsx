import React from 'react';
import { useSelector } from 'react-redux';

// internal import
import { selectAllTours } from '../store/tours/tour-selector';
import Tours from '../components/TourOverview/Tours';

const Home = () => {
  const tours = useSelector(selectAllTours);

  return <Tours tours={tours} />;
};

export default Home;
