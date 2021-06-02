import React, { useEffect, useState } from "react";
import "./style.css";
import UploadPhoto from "../../components/UploadMedia/UploadPhoto"
import UploadVideo from "../../components/UploadMedia/UploadVideo"
import Fab from "@material-ui/core/Fab"
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DuoIcon from '@material-ui/icons/Duo';



import ReactCardFlip from 'react-card-flip';


export default function MediaUpload() {
//setting state of photo upload
  

// setting status of flip

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

  //   const [age, setAge] =useState('');
  

  return (
    <div id="managePhotoContain">
        {isFlipped === true ? 
        
        <Fab
              
              color="primary"
              size="small"
              className="cloudinary"
              type="click"
              id="manageFlip"
              onClick={handleFlip}
            >
              <DuoIcon />
            </Fab>  : <Fab
              
              color="primary"
              size="small"
              className="cloudinary"
              type="click"
              id="manageFlip"
              onClick={handleFlip}
            >
              <AddAPhotoIcon />
            </Fab> }
        
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <UploadPhoto/>
            <UploadVideo/>
     
      </ReactCardFlip>
      </div>
      
    
  );
}
