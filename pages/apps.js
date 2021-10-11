import Layout from "../components/layout"
import AppEntry from "../components/appEntry";
import { motion } from "framer-motion";


const Projects = () => (
  <Layout>

    <AppEntry 
      linkUrl="http://papergarden.tay-made.com" 
      gitHub="https://github.com/taylormleigh/PaperGarden"
      imgSrc="papergarden.jpeg" 
      imgAlt="Paper & Garden"
      title="Paper & Garden"
      desc="A web app to assist storytellers with building and managing fictional worlds"
      stack="React / CSS / Node.js / Express / mySQL"
      bulletpoints={paperGardenBulletpoints}
    />

    <AppEntry 
      linkUrl="https://saskatchewanazon.herokuapp.com/"
      gitHub="https://github.com/WorkAppropriateCrew/Descriptions" 
      imgSrc="saskatch.jpeg" 
      imgAlt="Saskatchewanazon"
      title="Saskatchewan-azon"
      desc="A Canadian-themed product image site mimicking Amazon’s style"
      stack="CSS / React / Node.js / Express / mySQL / AWS / EC2 / RDS / Docker (& re-deployed to Heroku)"
      bulletpoints={saskatchBulletpoints}
    />

    <AppEntry 
      // linkUrl="http://sunflower.tay-made.com" 
      gitHub="https://github.com/taylormleigh/readingsNext"
      imgSrc="sunflower.jpeg" 
      imgAlt="Sunflower Fool"
      title="Sunflower Fool"
      desc="A journal-like web app for recording tarot reading results and personal notes"
      stack="React / CSS / Node.js / Next.js / Express / mySQL"
      bulletpoints={sunflowerFoolBulletpoints}
    /> 

  </Layout>
)


const paperGardenBulletpoints = [
  `Researched how writers develop worlds in order to understand user needs and develop user stories.`,
  `Designed this personal project using only raw CSS, raw React, and custom React Hooks.`,
  `Optimized user’s ability to create multiple worlds, multiple regions within each world, and multiple cities within each region with a scalable mySQL database.`,
  `Storybuilders can create accounts and passwords with log-in authorization, including a password hashing function, engineered using raw JavaScript (not utilized in demo.)`
]

const saskatchBulletpoints = [
  `Rendered a product image component using raw CSS and React.`,
  `Using a relational database migrated to Amazon RDS, app was deployed to AWS via Elastic Beanstalk using Docker.`,
  `Load-balanced to ensure reliable flow of traffic and protected the web server from potential attacks by implementing a reverse-proxy server.`
]

const sunflowerFoolBulletpoints = [

]


export default Projects