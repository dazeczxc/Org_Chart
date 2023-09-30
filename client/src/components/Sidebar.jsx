import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen">
      {/* Sidebar content */}
      <div className='mt-40'></div>
      <Link className='text-white' to="/admin/EmployeeList">Employee List</Link>
      <Link className='text-white' to="/admin/Employee">Test</Link>

    </div>

    // <div className="bg-gray-800 text-white h-screen w-16">
    //   <div className="flex flex-col items-center p-4">
    //     <div className="mb-8">
    //       <FaHome size={24} />
    //     </div>
    //     <div className="mb-8">
    //       <FaUser size={24} />
    //     </div>
    //     <div className="mb-8">
    //       <FaCog size={24} />
    //     </div>
    //     <div>
    //       <FaSignOutAlt size={24} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
