import React, { useEffect, useState } from "react";
import { AddForm, AddUserMainCOnatiner, BackButton } from "../Adduser.styled";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
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
      await axios.put(`http://localhost:9000/api/update/${id}`, userData);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/getOne/${id}`
        );
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <AddUserMainCOnatiner>
        <BackButton to={"/"}>👈 back</BackButton>
        <h2>Update 📝</h2>
        <AddForm onSubmit={submitForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Name"
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

          <button type="submit">Update</button>
        </AddForm>
      </AddUserMainCOnatiner>
    </div>
  );
}

export default Update;
