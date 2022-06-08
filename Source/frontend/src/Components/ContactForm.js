import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const ContactForm = ({ updateUser }) => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = {
        fullName,
        email,
        phone,
      };

      fetch("http://localhost:5000/api/v1/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit} className=" container text-center">
      <h2>Contact us:</h2>
      <div className="container border d-flex p-4 justify-content-between  ">
        <div className="form-group  ">
          <label htmlFor="exampleInputfullname">fullName: </label>
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
        <button type="submit" className="btn btn-primary mt-3 mr-3 ">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
