import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Counter from "./components/counter";
import UserForm from "./components/userForm";
import RichTextEditor from "./components/rich";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>React Vite App</Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/counter">Counter</Button>
          <Button color="inherit" component={Link} to="/user-form">User Form</Button>
          <Button color="inherit" component={Link} to="/editor">Editor</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<h2>Welcome to the React Vite App</h2>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
