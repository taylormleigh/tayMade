import Layout from "../components/layout";
import Skills from "../components/skillsTable";

const linkStyle = {
  marginRight: 15,
  color: `#971500`,
  fontFamily: "Roboto",
  fontSize: `0.7rem`,
  textDecoration: `none`,
};

const imgStyle = {
  minHeight: `30vh`,
  maxHeight: `40vh`,
  minWidth: `10vw`,
  maxWidth: `20vw`,
  borderRadius: `100%`,
  marginLeft: 0,
  marginBottom: 0,
}

const About = () => {
  return (
    <Layout>
      <div className="section group">
        <div className="col span_1_of_2">
            <img src="photo.jpeg" style={imgStyle}/>
        </div>
        <div className="col span_1_of_2">
          <h1>Tay Huval</h1>
          <h3><strong>Software Engineer</strong> | <i>Austin, TX</i></h3>
          <mark><a style={linkStyle} className="textLink" href="mailto:me@taylor-made.com"><i>Currently open to job and project opportunities</i></a></mark>
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
