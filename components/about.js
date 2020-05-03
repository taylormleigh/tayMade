import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";

var summary = {
  marginLeft: `20px`,
  float: `right`,
  overflow: `auto`,
};

var photo = {
  // float: `left`
};

var container = {
  display: `flex`, 
  flexWrap: `nowrap`,
  flexDirection: `row`, 
  justifyContent: `flex-start`, 
  overflow: `auto`
};

const About = ({source, altern = "image"}) => {
  return (
    <Layout>
      <div style={container}>
        <div style={photo}>
          <br/><Image source="profile.jpeg" altern="profile"/>
        </div>
        <div style={summary}>
          <h1>Tay Huval</h1>
          <h3><b>Software Engineer</b> | <i>Austin, TX</i></h3>
          <h6><mark>I'm currently open to job and project opportunities</mark>
            <p/>{`I’m a front-end engineer with a full-stack background. I have experience building with anything javascript and I’ve completed projects mostly with the SERN stack. I also enjoy spending my time actively exploring new libraries, frameworks, and tools. What I love most about this industry is that there’s always something new to learn and you’re only ever touching the tip of the iceberg with any given technology.`}
            <p/>{``}
          </h6>
        </div>
      </div>
    </Layout>
  );
}

export default About;
