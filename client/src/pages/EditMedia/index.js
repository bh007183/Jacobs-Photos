import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getEditPhotosAdmin, resetSuccessFail } from "../../store/photoActions";
import { Alert } from "@material-ui/lab";


export default function EditMedia() {
  const dispatch = useDispatch();
  const Error = useSelector((state) => state.Store.Photo.Error);
  const results = useSelector((state) => state.Store.Photo.EditPhotos);

  const [search, setSearch] = useState({
    title: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getEditPhotosAdmin(search.title));

    setTimeout(() => {
      dispatch(resetSuccessFail());
    }, 4000);
  };

  return (
    <div id="EditMediaContain">
      <div className="EditMediaFlex">
        <form onSubmit={handleSubmit} id="searchForm">
          <input
            onChange={handleChange}
            name="title"
            value={search.title}
            placeholder="Search Title"
          ></input>
          <button type="submit">Search</button>
        </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
        {results.map((photo, index) => (
            <div key={index} className="EditMediaFlex">
                <div className="editImgContain" >
                <h1 style={{zIndex: "99"}} className="imgText">Edit</h1>
                <div className="editImgItem">
                
                <img  src={photo.image} style={{maxWidth: "100%", cursor: "pointer"}}></img>
               
                </div>
                </div>
            </div>
  
        ))}

        {Error ? (
          <Alert  severity="error">
            {Error}
          </Alert>
        ) : (
          <></>
        )}
      </div>
   
    
  );
}
