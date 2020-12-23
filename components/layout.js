import Header from "./header";
import { motion, AnimatePresence } from 'framer-motion';
import Router from "next/dist/next-server/server/router";

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


const Layout = ({children}) => {
  return (
    <>
    <Header />

    <AnimatePresence>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
      transition={{duration: 1.1}}
      >
        
        <div style={bgStyle}>
          <div style={divStyle}>
              <main>{children}</main>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

        <a href="mailto:me@taylor-made.com" className="contactButton">CONTACT</a>
      
        <a href="mailto:me@taylor-made.com" className="contactButtonMobile">contact</a>
    
    </>
  )
}

export default Layout
