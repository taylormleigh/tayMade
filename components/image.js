import React from "react"

const Image = ({source, altern = "image", width="300px"}) => {
  var widthStyle = {
    maxWidth: width
  }
  return <img src={source} alt={altern} style={widthStyle}/>
}

export default Image;
