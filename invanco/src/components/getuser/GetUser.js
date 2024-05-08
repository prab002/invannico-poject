import React, { useEffect, useState } from "react";
import {
  AddUserLink,
  MainContainer,
  UserBox,
  UserData,
  UserDetailsBar,
} from "./Getuser.styled";
import axios from "axios";

function GetUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://invannico-poject.onrender.com/api/getall");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  const deletuser = async (userId) => {
    try {
      await axios.delete(`https://invannico-poject.onrender.com/api/delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <>
      <MainContainer>
        <div>
          <h2>User name With Email</h2>
          <AddUserLink to={"/add"}>+ add</AddUserLink>
          {users &&
            users.map((user, index) => {
              return (
                <UserData key={user._id}>
                  <UserBox>
                    <UserDetailsBar>
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                    </UserDetailsBar>
                    <div>
                      <AddUserLink to={`/edit/${user._id}`}>📝</AddUserLink>
                      <button onClick={() => deletuser(user._id)}>☠️</button>
                    </div>
                  </UserBox>
                </UserData>
              );
            })}
        </div>
      </MainContainer>
    </>
  );
}

export default GetUser;
