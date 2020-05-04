import React from "react"

const Image = ({source, altern = "image", width="200px"}) => {
  var widthStyle = {
    maxWidth: width,
    // borderRadius: `6px`
  }
  return <img src={source} alt={altern} style={widthStyle}/>
}

export default Image;