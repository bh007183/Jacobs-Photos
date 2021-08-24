import React, { useEffect} from "react";
import "./style.css";
import PhotoDrawer from "../../components/PhotoDrawer";
import { getAllPhotos } from "../../store/photoActions";
import { useDispatch, useSelector } from "react-redux";

// import Front from "../../components/ImageCard/Front";
import Card from "../../components/ImageCard/Card";

export default function Photos() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.Store.Photo.All);

  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch]);

  const [state, setState] = React.useState(false);

  const handleOpen = () => {
    setState(true);
  };
  const handleDrawerClose = () => {
    setState(false);
  };

    
  return (
    <div id="photobackground">
      <br></br>
      <br></br>
      <br></br>
     
      <button onClick={handleOpen} id="categoryButton">
        <p id="vertical">Open</p>
      </button>
      
      <PhotoDrawer open={state} handleClose={handleDrawerClose} />
      <div id="PhotoContain">
       {images.map((img, index) => <Card key={index} img={img} />)}
      </div>
    </div>
  );

 
}
