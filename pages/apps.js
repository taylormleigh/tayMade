import React from "react"
import Layout from "../components/layout"
import Image from "../components/image";

const container = {
  display: `flex`, 
  flexFlow: `row wrap`,
  marginLeft: `20px`, 
};

const tableStyle = {
  display: `flex`, 
  flexFlow: `column no-wrap`, 
}

const Projects = () => (
  <Layout>
    {/* <h1 style={container}>Live App Demos Coming Soon</h1> */}
    <div style={container}>
      <table><tbody>
        <tr>
          <td>
            {/* <a href="http://papergarden.tay-made.com"> */}
              <Image source="papergarden.jpeg" altern="Paper & Garden"/>
            {/* </a> */}
          </td>
          <td>
            <h1>Paper & Garden</h1>
            <h6>
              A web app which assists storytellers with world-building
              <br/><i>React / CSS / Node.js / Express / mySQL</i>
              <br/> LIVE DEMO COMING SOON
            </h6>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://saskatchewanazon.herokuapp.com/">
              <Image source="saskatch.jpeg" altern="Saskatchewanazon"/>
            </a>
          </td>
          <td>
            <h1>Saskatchewanazon</h1>
            <h6>A Canadian-themed product image site mimicking Amazon’s style
            <br/><i>CSS / React / Node.js / Express / mySQL / AWS / EC2 / RDS / Docker
            <br/>(& re-deployed to Heroku)</i>

          </h6></td>
        </tr>
        <tr>
          <td>
            {/* <a href="http://sunflower.tay-made.com"> */}
              <Image source="sunflower.jpeg" altern="Sunflower Fool"/>
            {/* </a> */}
          </td>
          <td>
          <h1>Sunflower Fool</h1>
            <h6>
              A journal-like web app for recording tarot reading results and personal notes
              <br/><i>React / CSS / Node.js / Next.js / Express / mySQL</i>
              <br/> LIVE DEMO COMING SOON
            </h6>
          </td>
        </tr>
      </tbody></table>
    </div>
  </Layout>
)

export default Projects