import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    })
      .then(() => navigate("/")); // return to main page
  };

  return (



    <div style={{ height: 400, width: "100%" }}>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5, ml:56,height: 500, width: "30%",backgroundColor:"skyblue",borderRadius:4}}>
        <TextField
          type="text"
          name="name"
          placeholder="Name"
          sx={{ ml: 10, mt: 5, mb: 2, width: "60%" }}
          onChange={handleChange}
          required
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          sx={{  ml: 10, mt: 2, mb: 2, width: "60%" }}
          required
        />
        <TextField
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
          sx={{  ml: 10, mt: 2, mb: 2, width: "60%" }}
          required
        />
        <TextField
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          sx={{ ml: 10, mt: 2, mb: 2, width: "60%" }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 , ml: 11,width:"50%"}}
        >
          Submit
        </Button>


      </Box>
    </div>
    // <div>
    //   <h2>Add Student</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
    //     <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
    //     <input type="text" name="course" placeholder="Course" onChange={handleChange} /><br />
    //     <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br />

    //     <button type="submit">Save</button>
    //   </form>
    // </div>
  );
}
