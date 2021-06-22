import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
import LazyLoad from 'react-lazy-load';
export default function Card({img}) {
    const handleFlip = (event) => {
    
        if (isFlipped === false) {
          setIsFlipped(true);
        }
        if (isFlipped === true) {
          setIsFlipped(false);
        }
      };

  
    const [isFlipped, setIsFlipped] = useState(false);
    return (
       
            <ReactCardFlip
              
              isFlipped={isFlipped}
              flipDirection="horizontal"
            >
              {/* front */}
              <div onClick={handleFlip} className="hover">
                <LazyLoad>
                <img
                  src={img.image}
                  loading="lazy"
                  className={img.layout}
                  alt={img.title}
                ></img>
                </LazyLoad>
              </div>
  
              {/* back */}
  
              <div className="hover">
                <div
                  
                  onClick={handleFlip}
                  className={img.layout + "Back"}
                >
                  <h4>Title</h4>
                  <p>{img.title}</p>
  
                  <p>{img.about}</p>
                </div>
              </div>
            </ReactCardFlip>
          
        
    )
}
