import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Authorisation")}`,
          },
        });
        setUsers(response.data);
      } catch {
        console.log("Token expired .... logging out");
        navigate("/login");
      }
    };
    fetchData();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserInfo;
