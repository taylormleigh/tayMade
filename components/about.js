import Layout from "../components/layout";
import Skills from "../components/skillsTable";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div className="section group">
        <div className="col span_1_of_2">
        <motion.div 
          initial={{filter: `grayscale(100%)`}}
          animate={{filter: `grayscale(0%)`}} 
          transition={{delay: 1, duration: 1.2}}
          >
            <img src="photo.jpeg" className="aboutPic"/>
          </motion.div>
        </div>

        <div className="col span_1_of_2 aboutPage">
          <h1>Tay Huval</h1>
          <h3><strong>Software Engineer</strong> | <i>Austin, TX</i></h3>
          <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay: 1.6, duration: 1}}
          >
            <mark><a className="contactLink textLink" href="mailto:me@taylor-made.com">▻<i> currently open to jobs and projects</i></a></mark>
          </motion.div>
          <br/><br/>
          <h6>
            <Skills />
          </h6>
        </div>
      </div>
      <div className="aboutText">
            {`Hello! I'm Tay and I am a software engineer proficient in building full-stack apps, with a strong focus toward front-end engineering. I have completed projects primarily using the SERN stack. My background is in animation and illustration, which nurtured instincts in art and design that I leverage to effectively sharpen my skills as a designer and engineer. Many of my personal hobbies involve an element of creative problem solving and working through puzzles, which initially led me to programming and has kept me passionate about what I do.`}
            <p/>
            {`Whether working on small personal projects from scratch, teaching myself new tools and frameworks, or jumping onto bigger projects to help support a team, I like to approach my work with energy, creativity, and an eye for detail. I am currently seeking engineering roles at a solid company that I can grow in, though I am open to contract work depending on the project.`}
            <p/>
            {`Feel free to contact me for inquiries and opportunities!`}
      </div>
    </Layout>
  );
}

export default About;
