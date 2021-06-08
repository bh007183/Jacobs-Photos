import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {useDispatch, useSelector} from "react-redux" 
import {getFeatured} from "../../store/photoActions"





export default function Home() {
    const dispatch = useDispatch()
    let images = useSelector(state => state.Store.Photo.All)
    useEffect(() => {
      dispatch(getFeatured())
    }, [])



  return (
    <div className="headerPhoto">
      
        <div id="CardContain">

           <div id="background">
            <div id="carousel" >
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>

                {images.map(img => 
                   
                            <div >
                        <img   src={img.image}  ></img>

                          </div>
                       )

                    
                    
                }
            </Carousel>
            </div>
            </div>





          {/* <div id="photoCard">
            <Link className="ImgLink" to="/photos">
              <br></br>
              <div className="imgContain">
                <div id="photoImg" alt="Photo Link">
                  <h1 className="cardText">Photos</h1>
                </div>
              </div>
              <br></br>
            </Link>
          </div>

          <div type="button" id="videoCard">
            <Link className="ImgLink" to="/videos">
              <br></br>
              <div className="imgContain">
                <div id="videoImg" alt="Video Link">
                  <h1 className="cardText">Video</h1>
                </div>
              </div>

              <br></br>
            </Link>
          </div> */}





          <div id="ownerLinkContain">
          <Link id="ownerAccess" to="/AdminLogin">
            <p >Owner</p>
          </Link>
          </div>

         
        </div>
       
      
    </div>
  );
}
