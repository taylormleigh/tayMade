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
<>
  
  <div className="section group">
    <div className="col span_1_of_2">
        <a href="http://papergarden.tay-made.com">
              <Image source="papergarden.jpeg" altern="Paper & Garden"/>
            </a>
    </div>
    <div className="col span_1_of_2">
      <a href="http://papergarden.tay-made.com">
        <h1>Paper & Garden</h1>
      </a>
      <h6>
        A web app which assists storytellers with world-building
        <br/><i>React / CSS / Node.js / Express / mySQL</i>
      </h6>
    </div>
  </div>

    <div className="section group">
      <div className="col span_1_of_2">
        <a href="https://saskatchewanazon.herokuapp.com/">
          <Image source="saskatch.jpeg" altern="Saskatchewanazon"/>
        </a>
      </div>
      <div className="col span_1_of_2">
          <a href="https://saskatchewanazon.herokuapp.com/">
            <h1>Saskatchewan-azon</h1>
          </a>
          <h6>A Canadian-themed product image site mimicking Amazon’s style
          <br/><i>CSS / React / Node.js / Express / mySQL / AWS / EC2 / RDS / Docker
          <br/>(& re-deployed to Heroku)</i>

        </h6>
      </div>
    </div>
    <div className="section group">
      <div className="col span_1_of_2">   
        {/* <a href="http://sunflower.tay-made.com"> */}
          <Image source="sunflower.jpeg" altern="Sunflower Fool"/>
        {/* </a> */}
      </div>
      <div className="col span_1_of_2"> 
          <h1>Sunflower Fool</h1>
            <h6>
              A journal-like web app for recording tarot reading results and personal notes
              <br/><i>React / CSS / Node.js / Next.js / Express / mySQL</i>
              <br/> LIVE DEMO COMING SOON
            </h6>
      </div>
    </div>

    
</>
  </Layout>
)

export default Projects