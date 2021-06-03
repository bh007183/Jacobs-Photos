import React, { useEffect, useState } from "react";
import "./style.css";
import PhotoDrawer from "../../components/PhotoDrawer"
import axios from "axios";
import {getAllPhotos} from "../../store/photoActions"
import {useDispatch, useSelector} from "react-redux"
import ReactCardFlip from 'react-card-flip';
import Front from "../../components/ImageCard/Front"
import Back from "../../components/ImageCard/Back"

export default function Photos() {

  const dispatch = useDispatch()
  const allImages = useSelector(state => state.Store.Photo.All)
  

  useEffect(() => {
    dispatch(getAllPhotos)
  }, []);


  const [state, setState] = React.useState(false);

    const handleOpen = () => {
      setState(true);
    };
    const handleDrawerClose = () => {
      setState(false);
    };


    const [isFlipped, setIsFlipped] = useState(false)

const handleFlip = (event) => {
    event.preventDefault()
    if(isFlipped === false){
        setIsFlipped(true)
    }
    if(isFlipped === true){
        setIsFlipped(false)
    }
}



  return (
    < div id="photobackground">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleOpen} id="categoryButton"><p id="vertical">Open</p></button>
      <PhotoDrawer open={state} handleClose={handleDrawerClose} />
    <div id="PhotoContain">
     
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Front  handleFlip={handleFlip} />
            <Back handleFlip={handleFlip}/>
    </ReactCardFlip>

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
