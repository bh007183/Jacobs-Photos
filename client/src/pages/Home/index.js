import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import {useDispatch, useSelector} from "react-redux" 
import {getFeatured} from "../../store/photoActions"





export default function Home() {
    const dispatch = useDispatch()
    let images = useSelector(state => state.Store.Photo.All)
    useEffect(() => {
      // dispatch(getFeatured())
    }, [])



  return (
    <div className="headerPhoto">
      
        <div id="CardContain">






          





          <div id="ownerLinkContain">
          <Link id="ownerAccess" to="/AdminLogin">
            <p >Owner</p>
          </Link>
          </div>

         
        </div>
       
      
    </div>
  );
}
