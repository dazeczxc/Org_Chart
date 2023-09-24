import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchAllEmployee = async () => {
      try {
        const res = await axios.get("http://localhost:8800/employee");
        setEmployee(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllEmployee();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/employee/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const getParentName = (parentId) => {
    const parentEmployee = employee.find((emp) => emp.id === parentId);
    return parentEmployee ? parentEmployee.emp_name : "Top";
  };

  return (
    <div className="employee_table">
      <h4>List of Employees</h4>
      <table className="table">
        <thead>
          <tr>
             <th>Name</th>
            <th>Position</th>
            <th>Parent</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
               <td>{emp.emp_name}</td>
              <td>{emp.emp_position}</td>
              <td>{getParentName(emp.parentID)}</td>
              <td><img src={`http://localhost:8800/${emp.image}`} /></td>
              <td>
                <button className="deletebtn" onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
                <Link to={`/update/${emp.id}`} className="updatebtn">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      <div>
        <Link to="/add" className="addbtn">
          Add
        </Link>
 
         <Link to="/" className="linkbtn">
          Chart
        </Link>
      </div>
         
     </div>
  );
};

export default Employee;
