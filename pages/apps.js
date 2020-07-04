import Layout from "../components/layout"
import AppEntry from "../components/appEntry";


const Projects = () => (
  <Layout>

    <AppEntry 
      linkUrl="http://papergarden.tay-made.com" 
      imgSrc="papergarden.jpeg" 
      imgAlt="Paper & Garden"
      title="Paper & Garden"
      desc="A web app which assists storytellers with world-building"
      stack="React / CSS / Node.js / Express / mySQL"
    />

    <AppEntry 
      linkUrl="https://saskatchewanazon.herokuapp.com/" 
      imgSrc="saskatch.jpeg" 
      imgAlt="Saskatchewanazon"
      title="Saskatchewan-azon"
      desc="A Canadian-themed product image site mimicking Amazon’s style"
      stack="CSS / React / Node.js / Express / mySQL / AWS / EC2 / RDS / Docker (& re-deployed to Heroku)"
    />

    <AppEntry 
      // linkUrl="http://sunflower.tay-made.com" 
      imgSrc="sunflower.jpeg" 
      imgAlt="Sunflower Fool"
      title="Sunflower Fool"
      desc="A journal-like web app for recording tarot reading results and personal notes"
      stack="React / CSS / Node.js / Next.js / Express / mySQL"
    />

  </Layout>
)

export default Projects