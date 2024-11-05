import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUserAlt, FaDonate, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#5f1515] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-64 w-60`}
      >
        {/* Sidebar header */}
        <div className="p-4 text-white font-bold text-xl border-b border-gray-200">
          Admin Dashboard
        </div>
        
        {/* Sidebar items */}
        <ul className="mt-4 text-white">
          <li className="flex items-center px-4 py-2 hover:bg-[#910b0b] cursor-pointer">
            <FaHome className="mr-2" />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-[#910b0b] cursor-pointer">
            <FaProjectDiagram className="mr-2" />
            <Link to="/projects">Projects</Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-[#910b0b] cursor-pointer">
            <FaUserAlt className="mr-2" />
            <Link to="/users">Users</Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-[#910b0b] cursor-pointer">
            <FaDonate className="mr-2" />
            <Link to="/donations">Donations</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:ml-64">
        {/* Mobile menu button */}
        <button
          className="text-2xl text-[#5f1515] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
