import Layout from "../components/layout";
import Skills from "../components/skillsTable";



const About = () => {
  return (
    <Layout>
      <div className="section group">
        <div className="col span_1_of_2">
            <img src="photo.jpeg" className="aboutPic"/>
        </div>
        <div className="col span_1_of_2">
          <h1>Tay Huval</h1>
          <h3><strong>Software Engineer</strong> | <i>Austin, TX</i></h3>
          <mark><a className="contactLink, textLink" href="mailto:me@taylor-made.com"><i>CONTACT</i></a></mark>
          <br/><br/>
          <h6>
            <Skills />
          </h6>
          </div>
      </div>
            {`Tay is a front-end engineer with a full-stack background. She is experienced building apps and has completed projects primarily using the SERN stack. Her first career as an animator/illustrator nurtured instincts in art and design which she leverages to effectively sharpen her skills as an engineer. Whether working on small personal projects from scratch or jumping onto a bigger project to help support a team, she approaches programming with energy, excitement, and an eye for detail.`}
    </Layout>
  );
}

export default About;
