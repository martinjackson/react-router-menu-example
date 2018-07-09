
import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';
const ReactMarkdown = require('react-markdown')


class Status extends Component {

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

      return <table border="1">
                 <thead><tr><th>Key</th><th>Value</th></tr></thead>
                 <tbody>{keys.map( k => this.row(k, obj[k]) )}</tbody>
             </table>
  }


  loaded() {
    console.log(this.state.url, 'loaded.');
  }

  render() {

    const err = this.state.error ? <div><hr />{this.state.error}</div> : null
    const lf = {width: '100%', alignItems: 'flex-end'}
    const st = {width: '100%'}
    const dv = {display: 'flex',  justifyContent: 'center'}
    return (
       <div>
           <div style={dv}>
             <strong style={lf}>API request:</strong>
             <span style={st}>{this.state.url}</span>
           </div>
           <div style={dv}>
             <strong style={lf}>returned:</strong>
             <span style={st}>{this.table(this.state.data)}</span>
           </div>
          {err}
       </div>
    );
  }

  }
export default Status;
