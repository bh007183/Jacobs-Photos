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
    < >
    <br></br>
      <br></br>
      <br></br>
      <br></br>
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
        <img className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img className="portrate" alt="test"></img>
      </div>
      <div className="hover" >
        <img className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img className="landscape" alt="test"></img>
      </div>
      <div className="hover" >
        <img className="portrate" alt="test"></img>
      </div>
      <div className="hover" >
        <img className="landscape" alt="test"></img>
      </div>
    </div>
    </>
  );
}
