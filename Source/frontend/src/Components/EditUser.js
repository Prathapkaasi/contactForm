import React, { useState } from "react";

const EditUser = ({ user }) => {
  const [fullName, setFullname] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      const body = {
        fullName,
        email,
        phone,
      };
      const response = await fetch(
        `http://localhost:5000/api/v1/users/${user.user_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-warning mr-4"
        data-bs-toggle="modal"
        data-bs-target={`#id${user.user_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${user.user_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit the user</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <div className="form-group  ">
                <label htmlFor="exampleInputfullname">FullName: </label>
                <input
                  className="form-control position-inline-block"
                  type="text"
                  id="exampleInputfullname"
                  aria-describedby="emailHelp"
                  placeholder="userName"
                  required
                  value={fullName}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputemail">Email</label>
                <input
                  className="form-control position-inline-block"
                  type="text"
                  id="exampleInputemail"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputphone">Phone</label>
                <input
                  className="form-control position-inline-block"
                  type="text"
                  id="exampleInputphone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={updateUser}
              >
                saveChanges
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditUser;
