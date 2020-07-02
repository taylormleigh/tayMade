import React from "react";
import Layout from "../components/layout";
import Skills from "../components/skillsTable";

const linkStyle = {
  marginRight: 15,
  color: `#971500`,
  fontFamily: "Roboto",
  fontSize: `80%`,
  textDecoration: `none`,
};

const imgStyle = {
  height: `100px`,
  width: `100px`,
  borderRadius: `50%`,
}

const About = () => {
  return (
    <Layout>
      <div className="section group">
        <div className="col span_1_of_2">
            <img src="profile.jpeg" style={imgStyle}/>
        </div>
        <div className="col span_1_of_2">

          <h1>Tay Huval</h1>
          <h3><strong>Software Engineer</strong> | <i>Austin, TX</i></h3>
          <mark><a style={linkStyle} className="textLink" href="mailto:me@taylor-made.com"><i>I'm currently open to job and project opportunities</i></a></mark>
          </div>
      </div>
          <h6>
            <p/>{`I’m a front-end engineer with a full-stack background. I have experience building with anything javascript and I’ve completed projects mostly with the SERN stack. My first career was as an animator/illustrator and I’ve worked to leverage my past skills in art and design to effectively sharpen my skills as an engineer. I find that programming satisfies both my creative instincts and an inexplicable desire to sit and stare at a screen for long periods of time doing tedious amounts of work :)`}
            <p/>
            <Skills />
          </h6>
    </Layout>
  );
}

export default About;
