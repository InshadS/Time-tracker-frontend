import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
