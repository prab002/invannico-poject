import React, { useState } from "react";
import axios from "axios";
import { AddForm, AddUserMainCOnatiner, BackButton } from "./Adduser.styled";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
    };

    try {
      const response = await axios.post(
        "https://invannico-poject.onrender.com/api/create",
        userData
      );
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AddUserMainCOnatiner>
      <BackButton to={"/"}>👈 back</BackButton>
      <h2>Add name and email</h2>
      <AddForm onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">add user</button>
      </AddForm>
    </AddUserMainCOnatiner>
  );
}

export default Adduser;
