const express = require('express');
const sql = require("mssql");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("images"));

const dbConfig = {
  server: "TAGPROD002",
  user: "sa_dev",
  password: "Dev13Am",
  database: "DATA_BAVI_SAP",
  options: {
    trustServerCertificate: true
  }
};

const pool = new sql.ConnectionPool(dbConfig);

(async function () {
  try {
    await pool.connect();
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
})();


app.get("/", (req, res) => {
  res.send("DB Connected");
});

//select all employee
app.get("/employee", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query("SELECT * FROM employee");
    return res.json(result.recordset);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

//single employee
app.get("/employee/:id", async (req, res) => {
  const empID = req.params.id;
  const q = "SELECT * FROM employee WHERE id = @id";

  try {
    const request = pool.request();
    request.input("id", sql.Int, empID);
    const result = await request.query(q);
    return res.json(result.recordset[0]); // Assuming only one employee is returned
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

//saving image to db
const storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage });

// adding values to db
app.post("/employee", upload.single("image"), async (req, res) => {
  const parentID = req.body.parentID;

  try {
    if (parentID == 0) {
      const q = "INSERT INTO employee (emp_name, emp_position, image) VALUES (@emp_name, @emp_position, @image)";
      const request = pool.request();
      request.input("emp_name", sql.NVarChar, req.body.emp_name);
      request.input("emp_position", sql.NVarChar, req.body.emp_position);
      request.input("image", sql.NVarChar, req.file.filename);
      const result = await request.query(q);
      return res.json(result);
    } else {
      const q = "INSERT INTO employee (emp_name, emp_position, parentID, image) VALUES (@emp_name, @emp_position, @parentID, @image)";
      const request = pool.request();
      request.input("emp_name", sql.NVarChar, req.body.emp_name);
      request.input("emp_position", sql.NVarChar, req.body.emp_position);
      request.input("parentID", sql.Int, parentID);
      request.input("image", sql.NVarChar, req.file.filename);
      const result = await request.query(q);
      return res.json(result);
    }
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

//delete employee
app.delete("/employee/:id", async (req, res) => {
  const empID = req.params.id;
  const q = "DELETE FROM employee WHERE id = @id";

  try {
    const request = pool.request();
    request.input("id", sql.Int, empID);
    const result = await request.query(q);
    return res.json(result);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

//updating employee details
app.put("/employee/:id", upload.single("image"), async (req, res) => {
  const empID = req.params.id;
  const getImageQuery = "SELECT image, parentID FROM employee WHERE id = @id";

  try {
    const request = pool.request();
    request.input("id", sql.Int, empID);
    const result = await request.query(getImageQuery);
    const existingImage = result.recordset[0].image;
    const parentID = result.recordset[0].parentID;

    let q = "";
    let values = [];

    if (parentID == null) {
      q = "UPDATE employee SET emp_name = @emp_name, emp_position = @emp_position, image = @image WHERE id = @id";
      values = [
        { name: "emp_name", type: sql.NVarChar, value: req.body.emp_name },
        { name: "emp_position", type: sql.NVarChar, value: req.body.emp_position },
        { name: "image", type: sql.NVarChar, value: req.file ? req.file.filename : existingImage },
        { name: "id", type: sql.Int, value: empID },
      ];
    } else {
      q = "UPDATE employee SET emp_name = @emp_name, emp_position = @emp_position, parentID = @parentID, image = @image WHERE id = @id";
      values = [
        { name: "emp_name", type: sql.NVarChar, value: req.body.emp_name },
        { name: "emp_position", type: sql.NVarChar, value: req.body.emp_position },
        { name: "parentID", type: sql.Int, value: req.body.parentID },
        { name: "image", type: sql.NVarChar, value: req.file ? req.file.filename : existingImage },
        { name: "id", type: sql.Int, value: empID },
      ];
    }

    const updateRequest = pool.request();
    values.forEach((value) => {
      updateRequest.input(value.name, value.type, value.value);
    });

    const updateResult = await updateRequest.query(q);

    if (req.file && existingImage) {
      const imagePath = path.join("images", existingImage);
      fs.unlink(imagePath, (err) => {
        if (err) console.log(err);
        console.log("Image updated");
      });
    }

    return res.json(updateResult);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});


//select option values
const fetchEmployees = async (req, res) => {
  const q = "SELECT id, emp_name FROM employee";
  try {
    const request = pool.request();
    const result = await request.query(q);
    return res.json(result.recordset);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to fetch employees" });
  }
};

app.get("/employees", fetchEmployees);


//server
const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`Service is running on port ${port}`);
});


