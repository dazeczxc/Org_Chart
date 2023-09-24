import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [employee, setEmployee] = useState({
    emp_name: "",
    emp_position: "",
    parentID: 0,
    image: null,
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setEmployee((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("emp_name", employee.emp_name);
      formData.append("emp_position", employee.emp_position);
      formData.append("parentID", employee.parentID);
      formData.append("image", employee.image);

      await axios.post("http://localhost:8800/employee", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/employee");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/employees");
        setOptions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="addform">
      <div className="form">
        <h2>Add Form</h2>

        <div className="input">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            name="emp_name"
            onChange={handleChange}
          />
        </div>
        
        <div className="input">
          <label>Position</label>
          <input
            type="text"
            placeholder="position"
            name="emp_position"
            onChange={handleChange}
          />
        </div>

        <div className="input">
        <label>Parent</label>
          <select name="parentID" onChange={handleChange}>
            <option value="">Select</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.emp_name}
              </option>
            ))}
          </select>
        </div>

        <div className="input">
          <label>Image</label>
          <input type="file" name="image" onChange={handleChange} />
        </div>

        
        <button className="updatebtn" onClick={handleClick}>Add</button>
        {error && "Something went wrong!"}
        <Link to="/employee">See all Employees</Link>
      </div>
    </div>
  );
};

export default Add;
