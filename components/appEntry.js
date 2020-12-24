import Image from "./image";
import { motion } from "framer-motion";

const appEntry = ({linkUrl, gitHub, imgSrc, imgAlt, title, desc, stack, bulletpoints = []}) => {

  if (linkUrl) {
    return (
      <div className="section group">
        <div className="col span_1_of_2 appPage">
          <div className="container">
            <motion.div 
              initial={{filter: `grayscale(100%)`}}
              animate={{filter: `grayscale(0%)`}} 
              transition={{delay: 1, duration: 1}}
              >
              <a href={linkUrl}>
                <Image source={imgSrc} altern={imgAlt}/>
              </a>
            </motion.div>
            <div className="middle">
              <a href={linkUrl} className="text">DEMO</a>
            </div>
          </div>
        </div>
        <div className="col span_1_of_2 appPage">
          <a href={linkUrl}>
            <h1>{title}</h1>
          </a>
          <h6>
            {desc}<a href={gitHub}><u> ▻ gitHub</u></a>
            <br/><i>{stack}</i>
          </h6>
          {bulletpoints.map((point, i) => {
            return <div className="bulletpoint" key={i}>{point}</div>;
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className="section group">
        <div className="col span_1_of_2 appPage">
          <div className="container">
            <Image source={imgSrc} altern={imgAlt}/>
            <div className="middle">
              <div className="text">DEMO COMING SOON</div>
            </div>
          </div>
        </div>
        <div className="col span_1_of_2 appPage">
            <h1>{title}</h1>
          <h6>
            {desc}
            <br/><i>{stack}</i>
            <p/>LIVE DEMO COMING SOON
          </h6>
        </div>
      </div>
    )
  }
}

export default appEntry;