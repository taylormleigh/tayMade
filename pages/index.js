import React from "react"
import Layout from "../components/layout"
import axios from 'axios';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readings: [],
      eachCard: [],
      allCards: []
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <Layout>
        <h2>Title</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

        </div>
      </Layout>
    );
  }
}
