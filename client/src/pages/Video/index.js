import React, {useEffect} from "react";
import "./style.css";
import {useDispatch, useSelector} from "react-redux"
import {getVideo} from "../../store/videoActions"


export default function Video() {
const dispatch = useDispatch()
const videos = useSelector(state => state.Store.Video.Featured)
    useEffect(() => {
      dispatch(getVideo())
    }, [dispatch])







  return (
    <div className="videoBackground">
      <br></br>
      <br></br>
      <br></br>
      {videos.map(video => 
      <div key={video._id} className="videoRow">
        <div className="videoColumn">
          <iframe
            src={video.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      )}
      
      
    </div>
  );
}
