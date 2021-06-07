import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
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
              onClick={() => console.log("test")}
              isFlipped={isFlipped}
              flipDirection="horizontal"
            >
              {/* fron */}
              <div onClick={handleFlip} className="hover">
                <img
                  src={img.image}
                  loading="lazy"
                  className={img.layout}
                  alt={img.title}
                ></img>
              </div>
  
              {/* back */}
  
              <div className="hover">
                <div
                  className="hover"
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
