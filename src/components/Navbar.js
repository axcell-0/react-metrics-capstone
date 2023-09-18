import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaGear, FaMicrophone, FaLessThan } from 'react-icons/fa6';

const Navbar = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === '/') {
      return 'Most views';
    }
    return 'More Details';
  };

  return (
    <nav className="flex justify-between items-center p-2 md:pr-20 md:pl-20 bg-sky-700 text-white text-lg">
      <div className="flex gap-1 items-center">
        <NavLink to="/">
          <FaLessThan />
        </NavLink>
        <span className="font-semibold">2023</span>
      </div>
      <span className="font-light">{getTitle()}</span>
      <div className="flex gap-4 items-center">
        <FaMicrophone />
        <FaGear />
      </div>
    </nav>
  );
};

export default Navbar;
