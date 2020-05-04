import React from "react"
import Layout from "../components/layout"
import Image from "../components/image";

const container = {
  display: `flex`, 
  flexFlow: `row no-wrap`,
  marginLeft: `20px`, 
};

const Projects = () => (
  <Layout>
    <h1 style={container}>Live App Demos Coming Soon</h1>
    <ul>
      <li>
        {/* <a href="http://papergarden.tay-made.com"> */}
          <Image source="papergarden.jpeg" altern="Paper & Garden"/>
        {/* </a> */}
      </li>
      <li>
        {/* <a href="http://sunflower.tay-made.com"> */}
          <Image source="sunflower.jpeg" altern="Sunflower Fool"/>
        {/* </a> */}
      </li>
      <li>
        <a href="https://saskatchewanazon.herokuapp.com/">
          <Image source="saskatch.jpeg" altern="Saskatchewanazon"/>
        </a>
      </li>
      <li></li>
    </ul>
  </Layout>
)

export default Projects