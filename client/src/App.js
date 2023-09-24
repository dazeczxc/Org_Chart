import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Employee from "./pages/Employee";
import Update from "./pages/Update";
import Tree from "./pages/Tree";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/employee" element={<Employee />} />
          <Route path="/" element={<Tree />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
