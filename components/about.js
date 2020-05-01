import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"

const About = ({source, altern = "image"}) => {
  return (
    <Layout>
      <table><tbody>
      <tr>
        <td>
          <br/><Image source="/images/profile.jpeg" altern="profile"/>
        </td>
        <td>
          <h3><b>Software Engineer</b> | <i>Austin, TX</i></h3>
          <h6>I'm currently open to job and project opportunities
          <p/>My name is Tay and I’m a front-end engineer with a full-stack background. I have experience building with anything javascript and I’ve completed projects mostly with the SERN stack. I also enjoy spending my time actively exploring new libraries, frameworks, and tools. What I love most about this industry is that there’s always something new to learn and you’re only ever touching the tip of the iceberg with any given technology.
          <p/>I’ve worked to leverage my past skills in art and design to effectively sharpen my skills as an engineer. I find that programming satisfies both my creative instincts and an inexplicable desire to sit and stare at a screen for long periods of time doing tedious amounts of work : )</h6>
        </td>
      </tr>
      </tbody></table>
    </Layout>
    )
}

export default About;
