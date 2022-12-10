import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

// components
import Layout from './components/Layout/Layout';

// styles
import './App.scss';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
