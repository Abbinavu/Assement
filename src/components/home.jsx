import React from "react";
import Counter from "./counter";
import UserForm from "./userForm";
import RichTextEditor from "./rich";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <Counter />
      <UserForm />
      <RichTextEditor />
    </div>
  );
};

export default Home;
