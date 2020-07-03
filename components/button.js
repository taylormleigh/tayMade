import React from "react"
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
  fontSize: `1.2em`,
  fontFamily: "Yeseva One",
  textDecoration: `none`,
  textTransform: `uppercase`,
};

const Button = ({text, link, sitePage}) => {
  if (sitePage) {
    return <Link href={link}><a className="headerLink hvr-shrink hvr-overline-from-center" style={linkStyle}>{text}</a></Link>
    
  } else if (!sitePage) {
  return <a className="headerLink hvr-shrink hvr-overline-from-center" href={link} style={linkStyle}>{text}</a>
  }
}

export default Button;