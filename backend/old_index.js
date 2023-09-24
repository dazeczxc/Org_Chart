import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("images"));

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  // password: "root",
  password: "032918",
  // database: "dev_test",
  database: "test101",

});


app.get("/", (req, res) => {
  res.json("Welcome");
});

//select all
app.get("/employee", (req, res) => {
  const q = "SELECT * FROM employee";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//select single
app.get("/employee/:id", (req, res) => {
  const empID = req.params.id;
  const q = "SELECT * FROM employee WHERE id = ?";

  db.query(q, [empID], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data[0]); // Assuming only one employee is returned
  });
});



//add -- old version
// app.post("/employee", (req, res) => {
//   const q = "INSERT INTO employee(`emp_name`, `emp_position`, `parentID`, `image`) VALUES (?)";

//   const values = [
//     req.body.emp_name,
//     req.body.emp_position,
//     req.body.parentID,
//     req.body.image,

//   ];

//   db.query(q, [values], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });

// Create a storage configuration for multer
 const storage = multer.diskStorage({
  destination: "images", // Destination folder to store the uploaded images
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded image
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

// Create a multer instance with the storage configuration
const upload = multer({ storage });

//add
app.post("/employee", upload.single("image"), (req, res) => {
 
  let parentID = req.body.parentID;

  if (parentID == 0) {
    const q =
    "INSERT INTO employee(`emp_name`, `emp_position`, `image`) VALUES (?, ?, ?)";

    const values = [
      req.body.emp_name,
      req.body.emp_position,
      req.file.filename, // Use the generated filename for the image column
    ];

    console.log("Added Values: "+values);
    
    db.query(q, values, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  }else{
    const q =
    "INSERT INTO employee(`emp_name`, `emp_position`, `parentID`, `image`) VALUES (?, ?, ?, ?)";

    const values = [
      req.body.emp_name,
      req.body.emp_position,
      parentID,
      req.file.filename, // Use the generated filename for the image column
    ];

    console.log("Added Values: "+values);
    
    db.query(q, values, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  }
  
});




//delete  --old version
// app.delete("/employee/:id", (req, res) => {
//   const empID = req.params.id;
//   const q = " DELETE FROM employee WHERE id = ? ";

//   db.query(q, [empID], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });

//delete
app.delete("/employee/:id", (req, res) => {
  const empID = req.params.id;
  const q = "DELETE FROM employee WHERE id = ?";

  // Fetch the image filename from the database before deleting the employee
  const getFilenameQuery = "SELECT image FROM employee WHERE id = ?";
  db.query(getFilenameQuery, [empID], (err, result) => {
    if (err) return res.send(err);

    const filename = result[0].image;

    db.query(q, [empID], (err, data) => {
      if (err) return res.send(err);

      // Delete the image file from the file system
      fs.unlink(`images/${filename}`, (err) => {
        if (err) console.log(err);
        console.log("Image deleted");
      });

      return res.json(data);
    });
  });
});



//update  --old version
// app.put("/employee/:id", (req, res) => {
//   const empID = req.params.id;
//   const q = "UPDATE employee SET `emp_name`= ?, `emp_position`= ?, `parentID`= ?, `image`= ? WHERE id = ?";

//   const values = [
//     req.body.emp_name,
//     req.body.emp_position,
//     req.body.parentID,
//     req.body.image,
//   ];

//   db.query(q, [...values,empID], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });

//update
app.put("/employee/:id", upload.single("image"), (req, res) => {
  const empID = req.params.id;

  // Retrieve the existing image filename from the database
  const getImageQuery = "SELECT `image`, `parentID` FROM employee WHERE id = ?";
  db.query(getImageQuery, [empID], (err, result) => {
    if (err) return res.send(err);

    const existingImage = result[0].image;
    const parentID = result[0].parentID;

    var q = "";
    var values = [];

    if (parentID == null) {
      console.log("Top Value");
      q = "UPDATE employee SET `emp_name`= ?, `emp_position`= ?, `image`= ? WHERE id = ?";
      values = [
        req.body.emp_name,
        req.body.emp_position,
        req.file ? req.file.filename : existingImage, // Use the new image if available, otherwise use the existing image
        empID,
      ];
    }else{
      console.log("Has Value");
      q = "UPDATE employee SET `emp_name`= ?, `emp_position`= ?, `parentID`= ?, `image`= ? WHERE id = ?";
      values = [
        req.body.emp_name,
        req.body.emp_position,
        req.body.parentID,
        req.file ? req.file.filename : existingImage, // Use the new image if available, otherwise use the existing image
        empID,
      ];
    }

    db.query(q, values, (err, data) => {
      if (err) return res.send(err);

      // Remove the old image file if a new image was uploaded
      if (req.file && existingImage) {
        const imagePath = path.join("images", existingImage);
        fs.unlink(imagePath, (err) => {
          if (err) console.log(err);
          console.log("Image updated");
        });
      }

      return res.json(data);
    });
  });
}); 


//select option values
const fetchEmployees = (req, res) => {
  const q = "SELECT id, emp_name FROM employee";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to fetch employees" });
    }
    return res.json(data);
  });
};

// Route handler
app.get("/employees", fetchEmployees);

app.listen(8800, () => {
  console.log("Connected to backend.");
});
