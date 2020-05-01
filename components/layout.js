import React from "react"
import Header from "./header"

const bgStyle = {
  backgroundColor: `#ffffff`,
  margin: `0 auto`,
  maxWidth: 920,
  minHeight: `70vh`,
  maxHeight: `70vh`,
  overflow: `auto`,
  padding: `40px`,
  boxShadow: `0px 0px 40px 20px #000000`,
};

const divStyle = {
  padding: `8px`,
}


const Layout = ({children}) => {
  return (
    <div className="container">
      <Header />
      <div
        style={bgStyle}
      >
        <div 
          style={divStyle}>

            <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
