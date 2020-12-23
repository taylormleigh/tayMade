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
            {`Hello! I'm Tay, a front-end engineer with experience building full-stack apps. I have completed projects primarily using the SERN stack. My background is in animation and illustration, which nurtured instincts in art and design that I leverage to effectively sharpen my skills as a designer and engineer. Whether working on small personal projects from scratch or jumping onto bigger projects to help support a team, I like to approach programming with energy, excitement, and an eye for detail. Feel free to contact me for inquiries and opportunities!`}
      </div>
    </Layout>
  );
}

export default About;
