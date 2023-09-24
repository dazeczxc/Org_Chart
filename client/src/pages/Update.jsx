import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [employee, setEmployee] = useState({
    emp_name: "",
    emp_position: "",
    parentID: 0,
    image: null,
  });
  const [error, setError] = useState(false);
  const [options, setOptions] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const employeeId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [employeeResponse, optionsResponse] = await Promise.all([
          axios.get(`http://localhost:8800/employee/${employeeId}`),
          axios.get("http://localhost:8800/employees"),
        ]);

        setEmployee(employeeResponse.data);
        setOptions(optionsResponse.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchData();
  }, [employeeId]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setEmployee((prev) => ({
        ...prev,
        [e.target.name]: e.target.files[0],
      }));
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

      await axios.put(
        `http://localhost:8800/employee/${employeeId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/employee");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="updateform">
      <div className="form">
        <h2>Update Form</h2>

        <div className="input">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            name="emp_name"
            value={employee.emp_name}
            onChange={handleChange}
          />
        </div>
        
        <div className="input">
          <label>Position</label>
          <input
            type="text"
            placeholder="position"
            name="emp_position"
            value={employee.emp_position}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label>Parent</label>
          <select
            name="parentID"
            value={employee.parentID}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.emp_name}
              </option>
            ))}
          </select>
        </div>



        {employee.image && (
          
          <img
            src={`http://localhost:8800/${employee.image}`}
            alt="Current Employee"
            style={{ maxWidth: "200px" }}
          />

        )}
        <div className="input">
          <input type="file" name="image" onChange={handleChange} />
        </div>

        <button className="updatebtn" onClick={handleClick}>Update</button>
        {error && "Something went wrong!"}
      </div>
      <Link to="/employee">See all employees</Link>

    </div>
  );
};

export default Update;
