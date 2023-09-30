import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Employee from "./pages/Employee";
import EmployeeList from "./pages/EmployeeList";
import Update from "./pages/Update";
import Tree from "./pages/Tree";
import Navbar from "./components/Navbar";

import './css/Tailwind.css';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="">

          <Routes>
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/" element={<Tree />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
