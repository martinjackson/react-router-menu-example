
import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';
import { Grid, Row, Col } from 'react-flexbox-grid';

import DisplayObjAsTable from './DisplayObjAsTable';

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
    this.loadInfo()
  }

  loadInfo() {
      const name = 'Martin'
      const url = `/api/echo/${name}`
      axios.get(url)
        .then((response) => { this.setState({'data': response.data, 'loaded':true, url}); this.loaded(); })
        .catch((error) => {   this.setState({'error': error.message}); });
  }

  loaded() {
    console.log(this.state.url, 'loaded.');
  }

  columns(prompt, data=<span></span>) {
    const right={textAlign:'right'}

    return  <Row>
              <Col xs={6} md={3} style={right}>
                <strong>{prompt}</strong>
              </Col>
              <Col xs={6} md={3}>
                {data}
              </Col>
            </Row>
  }

  render() {

    const err = this.state.error ? <Row><hr />{this.state.error}</Row> : null
    const reload = <button onClick={this.loadInfo}>Update</button>

    return (
      <Grid fluid>
         { this.columns('API request:', <span>{this.state.url}</span>) }
         { this.columns('returned:', <DisplayObjAsTable obj={this.state.data} />) }
         { this.columns(reload) }
         {err}
      </Grid>
    );
  }

  }
