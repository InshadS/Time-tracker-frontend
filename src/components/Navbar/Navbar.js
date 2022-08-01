import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SidebarData from '../Sidebar/SidebarData';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

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
                <img
                  src=' https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                  alt=''
                  className='avatar'
                />
              </li>
              <li className='listItem'>Inshad</li>
              <li className='listItem'>Logout</li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
