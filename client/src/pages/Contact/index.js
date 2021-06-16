import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { emailAdmin } from "../../store/adminActions";
import AlertStatus from "../../components/AlertStatus";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function Contact() {
  const dispatch = useDispatch();
  const fail = useSelector((state) => state.Store.Admin.NodeMailerError);
  const success = useSelector((state) => state.Store.Admin.NodeMailerSuccess);

  const [message, setMessage] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      message.name !== "" &&
      message.email !== "" &&
      message.message !== "" &&
      message.email.match(/\S+@\S+\.\S+/) !== null
    ) {
      dispatch(emailAdmin(message));
    } else {
      alert("Required field missing or invalid email.");
    }
  };

  return (
    <div className="contactContain">
      <br></br>
      <br></br>
      <br></br>

      <AlertStatus Success={success} Error={fail} />

      <div id="contactFormContain">
        <form onSubmit={handleSubmit} id="contactForm">
          <div className="inputItem" id="sendersName">
            <input
              onChange={handleChange}
              name="name"
              value={message.name}
              placeholder="Name (required)"
            ></input>
          </div>
          <div className="inputItem" id="sendersPhone">
            <input
              onChange={handleChange}
              name="phone"
              value={message.phone}
              placeholder="Phone (optional)"
            ></input>
          </div>
          <div className="inputItem" id="sendersEmail">
            <input
              onChange={handleChange}
              name="email"
              value={message.email}
              placeholder="Email (required)"
            ></input>
          </div>
          <div className="inputItem">
            <textarea
              onChange={handleChange}
              id="sendersMessage"
              name="message"
              value={message.message}
              placeholder="Message (required)"
            ></textarea>
          </div>
          <div className="inputItem">
            <Button variant="contained" size="small">
              <SendIcon />
            </Button>
          </div>
        </form>
        <div id="phonePosition">
          <p style={{ color: "white", margin: "0px" }}>Call: </p>
          <a id="phoneNumber" href="tel:5093934043">
            509-393-4043
          </a>
        </div>
        <div id="socialMedia">
          
          <IconButton
          className="contactIcon"
            href="https://www.facebook.com/jacob.hopkins.79"
            target="_Blank"
          >
            <FacebookIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
