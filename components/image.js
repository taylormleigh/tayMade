const Image = ({source, altern = "image", width="250px"}) => {
  let widthStyle = {
    maxWidth: width,
    borderRadius: `5px`
  }

  return <img className={"image"} src={source} alt={altern} style={widthStyle}/>
}

export default Image;