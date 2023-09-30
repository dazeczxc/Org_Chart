import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";
import Update from "./pages/Update";
import Tree from "./pages/Tree";
import Navbar from "./components/Navbar";
import EmployeeList from "./pages/EmployeeList";

import './css/Tailwind.css';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="">

          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Tree />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
            
            {/* side bar */}
            <Route path="/admin/EmployeeList" element={<EmployeeList />} />
            <Route path="/admin/Employee" element={<Employee />} />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
