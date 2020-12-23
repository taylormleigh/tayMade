import Header from "./header";

const bgStyle = {
  backgroundColor: `#ffffff`,
  margin: `0 auto`,
  maxWidth: 800,
  minHeight: `70vh`,
  maxHeight: `90vh`,
  overflow: `auto`,
  padding: `10px`,
  borderTop: `1px`,
  borderBottom: `0px`,
  borderLeft: `0px`,
  borderRight: `0px`,
  borderStyle: `solid`,
  borderColor: `#d7bd3c`,
};

const divStyle = {
  padding: `8px`,
}


const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div style={bgStyle}>
        <div style={divStyle}>
            <main>{children}</main>
        </div>
      </div>
      <a href="mailto:me@taylor-made.com" className="contactButton">CONTACT</a>
      <div>
        <a href="mailto:me@taylor-made.com" className="contactButtonMobile">@</a>
      </div>
    </>
  )
}

export default Layout
