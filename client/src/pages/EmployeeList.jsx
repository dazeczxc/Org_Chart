import React from 'react';
import Sidebar from '../components/Sidebar';
import BottomInput from '../components/BottomInput';
import EmployeeTable from '../components/EmployeeTable';

function EmployeeList() {
  return (
    <div className=" flex h-screen"> {/* Adjust left margin to accommodate the sidebar */}
        <Sidebar />
        <div className='flex-grow'>            
            <EmployeeTable />
            <BottomInput />
        </div>

    </div>
  );
}

export default EmployeeList;
