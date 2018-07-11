
import React, { Component } from 'react';
import autoBind from 'react-autobind';


export default class DisplayObjAsTable extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    autoBind(this);
  }

  pretty(obj) {
    return (typeof obj === 'string' || obj instanceof String) ? obj : JSON.stringify(obj, undefined, 2)
  }

  row(k, val) {
      return <tr key={k}><td>{k}</td><td>{this.pretty(val)}</td></tr>
  }

  table(obj, style={background: 'green', color: 'white'}) {
      var keys = Object.keys(obj);

      return <table border="1">
                 <thead style={style}><tr><th>Key</th><th>Value</th></tr></thead>
                 <tbody>{keys.map( k => this.row(k, obj[k]) )}</tbody>
             </table>
  }


  render() {
    return this.table(this.props.obj)
  }

  }
