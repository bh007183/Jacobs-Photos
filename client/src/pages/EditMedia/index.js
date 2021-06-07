import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getEditPhotosAdmin, resetSuccessFail, submitEdit, deletePhoto } from "../../store/photoActions";
import { Alert } from "@material-ui/lab";
import SimpleModal from "./modal.js"
import Authentication from "../../Functions/Authentication"


export default function EditMedia() {
  const dispatch = useDispatch();
  const Error = useSelector((state) => state.Store.Photo.Error);
  const results = useSelector((state) => state.Store.Photo.EditPhotos);

  const [search, setSearch] = useState({
    title: "",
  });

  useEffect(() => {
   Authentication()
  }, [])
  
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
    setSearch(
      {title: ""}
    )
    setTimeout(() => {
      dispatch(resetSuccessFail());
    }, 4000);
  };

//   modal logic  //

const [open, setOpen] = useState(false);
const [modal, setModal] = useState({});

  const handleOpen = (event) => {
    
   setModal(JSON.parse(event.target.getAttribute("data-obj")))
   setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setModal({
      ...modal, [name]: value
    })
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    dispatch(submitEdit(modal))
    setTimeout(() => {
      dispatch(resetSuccessFail());
    }, 4000);
  }

  const handleDelete = (event) => {
    event.preventDefault()
    dispatch(deletePhoto({_id:modal._id, publicId: modal.publicId}))
    setTimeout(() => {
      dispatch(resetSuccessFail());
      
    }, 4000);

    if(Error !== ""){

    }else{
     
      setOpen(false)
    }
    
   
  }

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
          <button style={{marginLeft: "8px"}} type="submit">Search</button>
        </form>
    </div>
    <br></br>
    <br></br>
    <SimpleModal obj={modal} open={open} handleClose={handleClose} handleChange={handleEditChange} handleSubmit={handleEditSubmit} handleDelete={handleDelete} />
    <br></br>
        {results.map((photo, index) => (
          <>
            <div key={index} className="EditMediaFlex">
                <div data-id={photo} className="editImgContain" >
                
                <div   onClick={handleOpen}  className="editImgItem">
                <h1 style={{zIndex: "99"}} data-obj={JSON.stringify(photo)} className="imgText">Edit</h1>
                <img data-obj={JSON.stringify(photo)} src={photo.image} style={{maxWidth: "100%", cursor: "pointer"}}></img>
                </div>
                </div>
                
            </div>
            
            </>

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
