import Link from 'next/link';
import React from "react"


const linkStyle = {
  marginRight: 15,
  color: `white`,
  fontFamily: "Cabin",
  textDecoration: `none`,
  textTransform: `uppercase`,
};

const alignStyle = {
  margin: `0 auto`,
  maxWidth: 920,
  padding: `20px`,
}

const titleStyle = {
  color: `white`,
  marginBottom: `2px`,
}

const Header = () => (
    <div style={alignStyle}>
      <h1 style={titleStyle}>Tay Huval
      </h1>
      <Link href="/"><a style={linkStyle}>About</a></Link>  
      <Link href="/projects"><a style={linkStyle}>Apps</a></Link>  
      <Link href="https://github.com/taylormleigh"><a style={linkStyle}>GitHub</a></Link>
    </div>
)

export default Header;
