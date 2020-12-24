import Header from "./header";
import { motion, AnimatePresence } from 'framer-motion';

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
        <div className="layoutBG">
          <div className="layoutDiv">
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