import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SidebarData from '../Sidebar/SidebarData';
import * as CgIcons from 'react-icons/cg';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar({ user }) {
  const [sidebar, setSidebar] = useState(false);

  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  return (
    <>
      <nav className={sidebar ? 'nav-menu active d-flex' : 'nav-menu d-flex'}>
        <ul className='nav-menu-items' onClick={() => setSidebar(!sidebar)}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span> {item.title}</span>
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
          <span>time tracker</span>
        </div>

        <Dropdown className='logout-dropdown'>
          <Dropdown.Toggle>
            <img src={user.photos[0].value} alt='' className='avatar' />{' '}
            {user.displayName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <img src={user.photos[0].value} alt='' className='avatar' />{' '}
              {user.displayName}
            </Dropdown.Item>
            <Dropdown.Item onClick={logout}>
              <CgIcons.CgLogOut /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default Navbar;
