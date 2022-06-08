import React, { useEffect, useState } from "react";
import EditUser from "./EditUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (id) => {
    try {
      const deleteduser = await fetch(
        `http://localhost:5000/api/v1/users/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log(error);
    }

    setUsers(users.filter((user) => user.user_id !== id));
  };
  useEffect(() => {
    fetchData();
  }, [users]);

  return (
    <div className="container">
      <table className="table border mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>

            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.user_id}>
                <th scope="row">{user.fullname}</th>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <EditUser user={user} />
                  <a
                    onClick={() => deleteUser(user.user_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </a>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
