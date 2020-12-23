import Layout from "../components/layout";
import Skills from "../components/skillsTable";



const About = () => {
  return (
    <Layout>
      <div className="section group">
        <div className="col span_1_of_2">
            <img src="photo.jpeg" className="aboutPic"/>
        </div>
        <div className="col span_1_of_2 aboutPage">
          <h1>Tay Huval</h1>
          <h3><strong>Software Engineer</strong> | <i>Austin, TX</i></h3>
          <mark><a className="contactLink textLink" href="mailto:me@taylor-made.com">▻<i> currently open to jobs and projects</i></a></mark>
          <br/><br/>
          <h6>
            <Skills />
          </h6>
          </div>
      </div>
      <div className="aboutText">
            {`Hello! I'm Tay and I am a front-end engineer, though I'm proficient in building full-stack apps. I have completed projects primarily using the SERN stack. My background is in animation and illustration, which nurtured instincts in art and design that I leverage to effectively sharpen my skills as a designer and engineer. Many of my personal hobbies involve an element of creative problem solving and working through puzzles, which led me to programming initially and has kept me passionate about what I do.`}
            <p/>
            {`Whether working on small personal projects from scratch, teaching myself new tools and frameworks, or jumping onto bigger projects to help support a team, I like to approach my work with energy, excitement, and an eye for detail. I am currently seeking either Engineer I or II roles at a solid company that I can grow in, though I am open to contract work depending on the project.`}
            <p/>
            {`Feel free to contact me for inquiries and opportunities!`}
      </div>
    </Layout>
  );
}

export default About;
