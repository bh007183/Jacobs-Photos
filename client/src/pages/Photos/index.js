import React, { useEffect, useState } from "react";
import "./style.css";
import PhotoDrawer from "../../components/PhotoDrawer"
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
    < div id="photobackground">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button id="categoryButton"><p id="vertical">Open</p></button>
    <div id="PhotoContain">
     
      
      <div className="hover">
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="portrate" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="portrate" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="portrate" alt="test"></img>
      </div>
      <div className="hover" >
        <img loading="lazy" className="landscape" alt="test"></img>
      </div>
    </div>
    </div>
  );
}
