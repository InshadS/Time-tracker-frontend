import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

const SidebarData = [
  {
    title: 'Timer',
    path: '/',
    icon: <BiIcons.BiTimer />,
    cName: 'nav-text',
  },
  {
    title: 'Calender',
    path: '/calender',
    icon: <BsIcons.BsFillCalendarDateFill />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiOutlineProject />,
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'User',
    path: '/user',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text',
  },
];

export default SidebarData;
