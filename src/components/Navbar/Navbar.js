import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SidebarData from '../Sidebar/SidebarData';
import { IconContext } from 'react-icons';

function Navbar({ user }) {
  const [sidebar, setSidebar] = useState(false);
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={() => setSidebar(!sidebar)}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className='navbar '>
          <div className='logo'>
            <Link to='#' className='menu-bar'>
              <FaIcons.FaBars
                className='bar'
                onClick={() => setSidebar(!sidebar)}
              />
            </Link>
            <div> Time Tracker</div>
          </div>
          <div>
            <ul className='list'>
              <li className='listItem'>
                <img src={user.photos[0].value} alt='' className='avatar' />
              </li>
              <li className='listItem'>{user.displayName}</li>
              <li className='listItem' onClick={logout}>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
