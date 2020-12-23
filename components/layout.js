import Header from "./header";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundColor: `#ffffff`,
  margin: `0 auto`,
  maxWidth: 800,
  minHeight: `70vh`,
  maxHeight: `90vh`,
  overflow: `auto`,
  padding: `10px`,
  // borderTop: `1px`,
  // borderBottom: `0px`,
  // borderLeft: `0px`,
  // borderRight: `0px`,
  // borderStyle: `solid`,
  // borderColor: `#d7bd3c`,
};

const divStyle = {
  padding: `8px`,
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
  duration: 1
}


const Layout = ({children}) => {
  return (
    <>
    <Header />

    <motion.div
    initial={{x:200, opacity: 0}}
    animate={{x:0, opacity: 1}}
    exit={{x: -200, opacity: 0}}
    transition={spring}
    >
      
      <div style={bgStyle}>
        <div style={divStyle}>
            <main>{children}</main>
        </div>
      </div>
    </motion.div>

        <a href="mailto:me@taylor-made.com" className="contactButton">CONTACT</a>
      
        <a href="mailto:me@taylor-made.com" className="contactButtonMobile">contact</a>
    
    </>
  )
}

export default Layout
