import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import BottomInput from '../components/BottomInput';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeList from '../pages/EmployeeList';

function Admin() {
  return (
    <EmployeeList />

  );
}

export default Admin;
