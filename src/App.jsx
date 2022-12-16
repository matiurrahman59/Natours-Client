import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// internal import
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import SingleTour from './pages/SingleTour';
import PageNotFound from './pages/404';
import { setAllTour } from './store/tours/tour-action';

// styles
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tourData = async () => {
      try {
        const tourData = await fetch('http://127.0.0.1:3000/api/v1/tours');
        const res = await tourData.json();
        const { data } = await res.data;
        dispatch(setAllTour(data));
        return data;
      } catch (err) {
        return err;
      }
    };
    tourData();
  }, []);

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tour/:tourID' element={<SingleTour />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
