
import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';
const ReactMarkdown = require('react-markdown')

import { Grid, Row, Col } from 'react-flexbox-grid';


export default class Status extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'data': '##Loading',
      'error': '',
      'url': ''
    };

    autoBind(this);
  }

  componentDidMount() {
      const name = 'Martin'
      const url = `/api/echo/${name}`
      axios.get(url)
        .then((response) => { this.setState({'data': response.data, 'loaded':true, url}); this.loaded(); })
        .catch((error) => {   this.setState({'error': error.message}); });
  }

  pretty(obj) {
    return (typeof obj === 'string' || obj instanceof String) ? obj : JSON.stringify(obj, undefined, 2)
  }

  row(k, val) {
      return <tr key={k}><td>{k}</td><td>{this.pretty(val)}</td></tr>
  }

  table(obj) {
      var keys = Object.keys(obj);
      const head={background: 'green', color: 'white'}

      return <table border="1">
                 <thead style={head}><tr><th>Key</th><th>Value</th></tr></thead>
                 <tbody>{keys.map( k => this.row(k, obj[k]) )}</tbody>
             </table>
  }


  loaded() {
    console.log(this.state.url, 'loaded.');
  }

  render() {

    const err = this.state.error ? <div><hr />{this.state.error}</div> : null
    const right={textAlign:'right'}

    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3} style={right}>
            <strong>API request:</strong>
          </Col>
          <Col xs={6} md={3}>
            <span>{this.state.url}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3} style={right}>
            <strong>returned:</strong>
          </Col>
          <Col xs={6} md={3}>
            <span>{this.table(this.state.data)}</span>
          </Col>
        </Row>
        <Row>
          {err}
        </Row>
      </Grid>
    );
  }

  }
