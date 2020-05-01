import React from "react"

const Image = ({source, altern = "image"}) => {
  return <img src={source} alt={altern}/>
}

export default Image;
