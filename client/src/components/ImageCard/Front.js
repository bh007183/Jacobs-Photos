import React from 'react'

export default function Front(props) {
    return (
        <div  onClick={props.handleFlip}className="hover">
        <img onClick={props.handleFlip} loading="lazy" className="portrate" alt="test"></img>
      </div>
    )
}
