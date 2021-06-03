import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";


export default function Photos() {
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getImages")
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, []);

  return (
    <div id="PhotoContain">
      <div className="imageContain">
        <img src={images} alt="test"></img>
      </div>
    </div>
  );
}
