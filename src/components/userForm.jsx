import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const UserForm = () => {
  const [formData, setFormData] = useState({
    id: Math.random().toString(36).substring(2, 9),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addUser(formData));
    alert("User data saved!");
  };

  return (
    <Box sx={{ p: 3, border: "1px solid gray", borderRadius: "8px" }}>
      <Typography variant="h5">User Form</Typography>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
      <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
      <TextField label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth />
      <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default UserForm;
