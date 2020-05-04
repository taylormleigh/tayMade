import React from "react"
import Header from "./header";

const bgStyle = {
  backgroundColor: `#ffffff`,
  margin: `0 auto`,
  maxWidth: 800,
  minHeight: `70vh`,
  maxHeight: `75vh`,
  overflow: `auto`,
  padding: `10px`,
  borderTop: `2px`,
  borderBottom: `0px`,
  borderLeft: `0px`,
  borderRight: `0px`,
  borderStyle: `solid`,
  borderColor: `##aaa3c0`,
  // borderRadius: `10px`,
  // boxShadow: `0px 0px 30px 2px #aaa3c0`,
};

const divStyle = {
  padding: `8px`,
}


const Layout = ({children}) => {
  return (
    <div className="container">
      <Header />
      <div style={bgStyle}>
        <div style={divStyle}>
            <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
