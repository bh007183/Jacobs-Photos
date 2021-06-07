import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdmin,
  onAdminChange,
  UpdateAdmin,
  Reset,
} from "../../store/adminActions";
import AlertStatus from "../../components/AlertStatus";
import "./style.css";
import Authentication from "../../Functions/Authentication"

export default function AdminEdit() {
  const dispatch = useDispatch();

  const Admin = useSelector((state) => state.Store.Admin.AdminUser);
  const Error = useSelector((state) => state.Store.Admin.Error);
  const Success = useSelector((state) => state.Store.Admin.Success);

  const [checked, setChecked] = useState(true);

  useEffect(() => {
    Authentication()
    dispatch(getAdmin());
  }, []);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch(onAdminChange({ name: name, value: value }));
  };

  const handleCheckbox = (event) => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Admin.oldPassword !== "") {
      dispatch(UpdateAdmin(Admin));
      setTimeout(() => {
        dispatch(Reset());
      }, 4000);
    } else {
      alert("Current Password Required");
    }
  };

  return (
    <div className="EditAdminContain">
      
      <form onSubmit={handleSubmit} id="EditAdminForm">
      <div className="EditInputContain">
      <AlertStatus Success={Success} Error={Error} />
      </div>
        <div className="EditInputContain">
          <input
            onChange={handleChange}
            name="username"
            placeholder="Username"
            value={Admin.username}
            id="editUsername"
          ></input>
        </div>

        <div className="EditInputContain">
          <input
            onChange={handleChange}
            name="email"
            placeholder="Email"
            value={Admin.email}
            id="editEmail"
          ></input>
        </div>

        <div className="EditInputContain">
          <input
            onChange={handleChange}
            name="oldPassword"
            placeholder="Current Password"
            value={Admin.oldPassword}
            id="oldPassword"
          ></input>
        </div>

        <div className="EditInputContain">
          <p style={{ color: "white" }}>Edit Password?</p>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="oldPassword"
            placeholder="Enter Old Password"
            value={checked}
            id="oldPassword"
          ></input>
        </div>

        <div className="EditInputContain">
          {" "}
          <input
            onChange={handleChange}
            name="newPassword"
            placeholder="Enter New Password"
            value={Admin.newPassword}
            id="newPassword"
            disabled={checked}
          ></input>
        </div>

        <div className="EditInputContain">
          <input
            onChange={handleChange}
            name="verifyPassword"
            placeholder="Verify New Password"
            value={Admin.verifyPassword}
            id="verifyPassword"
            disabled={checked}
          ></input>
        </div>
        <div className="EditInputContain">
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
}
