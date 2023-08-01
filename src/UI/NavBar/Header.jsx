import React from 'react';
import Search from './Search';

import { FiSettings, FiLogIn, FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const Hover =
    'm-5 hover:text-gray-300 hover:scale-110 transition duration-600 ease-in-out';
    
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 bg-head border-b border-gray-600 flex items-center justify-center z-10 ">
        <div className="container   text-md flex items-center justify-center">
          <div className="relative flex items-center">
            <Search />
          </div>
          {/* <div className="container font-medium   justify-between items-center flex">
            <NavLink to="/home" className={Hover}>
              <button className="bg-gray-500 h-10 w-32 ml-10 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-400 transition duration-300 ease-in-out">
                Search
              </button>
            </NavLink>
          </div> */}
          <div className="w-full  flex justify-center items-center">
            <NavLink to="/profile" className={`w-24 text-white ${Hover}`}>
              My Profile
            </NavLink>
            <NavLink to="/heroes" className={`w-24 text-white ${Hover}`}>
              Heroes
            </NavLink>
            <NavLink to="/items" className={`w-24 text-white ${Hover}`}>
              Items
            </NavLink>
            <NavLink to="/matches" className={`w-24 text-white ${Hover}`}>
              Matches
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <FiLogIn className="text-2xl ml-4" />
            </NavLink>
            <NavLink to="/logout" className={Hover}>
              <FiLogOut className=" text-2xl ml-4" />
            </NavLink>
            <NavLink to="/settings" className={Hover}>
              <FiSettings className="text-2xl ml-4" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
