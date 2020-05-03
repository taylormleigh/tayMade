import Link from 'next/link';
import React from "react"


const flex = {
  marginTop: `50px`,
  display: `flex`,
  flexDirection: `row`,
  justifyContent: `center`,
  width: `100%`,
  padding: `4px`
}

const linkStyle = {
  marginRight: 15,
  color: `black`,
  fontFamily: "Yeseva One",
  textDecoration: `none`,
  textTransform: `uppercase`,
};

const buttons = {
  display: `flex`,
  height: `50px`,
  alignItems: `center`,
  justifyContent: `center`,
}

const Header = () => (
    <div style={flex}>
      <div style={buttons}>
        <Link href="/"><a style={linkStyle}>About</a></Link>  
        <Link href="/apps"><a style={linkStyle}>Apps</a></Link>  
        <a href={'https://github.com/taylormleigh'} style={linkStyle}>GitHub</a>
        <a href={'https://www.linkedin.com/in/tay-huval/'} style={linkStyle}>LinkedIn</a>
      </div>
    </div>
)

export default Header;
