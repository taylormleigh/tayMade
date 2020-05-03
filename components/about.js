import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";

const container = {
  display: `flex`, 
  flexFlow: `row no-wrap`, 
  // justifyContent: `flex-start`, 
  // overflow: `auto`
};

const container2 = {
  display: `flex`, 
  flexFlow: `row wrap`, 
  // justifyContent: `flex-start`, 
  // overflow: `auto`
};

const summary = {
  marginLeft: `20px`,
  order: `2`,
  overflow: `auto`,
  float: `right`
};

const photo = {
  order: `1`,
  // flexGrow: `1`,
  // maxHeight: `100%`,
  // minWidth: `100%`,
  // objectFit: `cover`,
  // verticalAlign: `bottom`,
};


const About = ({source, altern = "image"}) => {
  return (
    <Layout>
      <div style={container}>
        {/* <div style={photo}>
            <Image source="profile.jpeg" altern="profile"/>
        </div> */}
        <div style={summary}>
          <h1>Tay Huval</h1>
          <h3><b>Software Engineer</b> | <i>Austin, TX</i></h3>
          <h6><mark>I'm currently open to job and project opportunities</mark>
            <p/>{`I’m a front-end engineer with a full-stack background. I have experience building with anything javascript and I’ve completed projects mostly with the SERN stack. I also enjoy spending my time actively exploring new libraries, frameworks, and tools. What I love most about this industry is that there’s always something new to learn and you’re only ever touching the tip of the iceberg with any given technology.`}
            <p/>{`Languages:  JavaScript /CSS/ HTML`}
            <br/>{`Frameworks:  React / JQuery / Express / Redux`}
            <br/>{`Databases: 	mySQL`}
            <br/>{`Testing: 	Mocha / Chai / Jasmine`}
            <br/>{`Deployment: 	AWS / Elastic Beanstalk / Docker`}
            <br/>{`Other:	 	Node.js / Git / Webpack / Babel / Agile / TDD / RESTful API / NextJS / GatsbyJS`}
          </h6>
        </div>
      </div>
    </Layout>
  );
}

export default About;
