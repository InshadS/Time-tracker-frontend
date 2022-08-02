import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function Home({ user }) {
  return (
    <div className='Home'>
      <Navbar user={user} />
      <Outlet />
    </div>
  );
}

export default Home;
