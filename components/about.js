import React from "react";
import Layout from "../components/layout";
import Skills from "../components/skillsTable";

const container = {
  display: `flex`, 
  flexFlow: `row no-wrap`, 
};

const summary = {
  marginLeft: `20px`,
  order: `2`,
  overflow: `auto`,
  float: `right`
};

const linkStyle = {
  marginRight: 15,
  color: `#971500`,
  fontFamily: "Roboto",
  textDecoration: `none`,
};

const About = () => {
  return (
    <Layout>
      <div style={container}>
        {/* <div style={photo}>
            <Image source="profile.jpeg" altern="profile"/>
        </div> */}
        <div style={summary}>
          <h1>Tay Huval</h1>
          <h3><strong>Software Engineer</strong> | <i>Austin, TX</i></h3>
          <mark><a style={linkStyle} className="headerLink" href="mailto:me@taylor-made.com"><i>I'm currently open to job and project opportunities</i></a></mark>
          <h6>
            <p/>{`Hello, I'm Tay! I’m a front-end engineer with a full-stack background. I have experience building with anything javascript and I’ve completed projects mostly using the SERN stack. I also enjoy spending my time actively exploring new libraries, frameworks, and tools. What I love most about this industry is that there’s always something new to learn and you’re only ever touching the tip of the iceberg with any given technology. My first career was as an animator/illustrator and I’ve worked to leverage my past skills in art and design to effectively sharpen my skills as an engineer.`}
            <p/>
            <Skills />
          </h6>
        </div>
      </div>
    </Layout>
  );
}

export default About;
