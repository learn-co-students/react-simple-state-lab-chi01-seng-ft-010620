import React, { Component } from 'react';
import { pattern2 } from './data.js'
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)// replace me and render a cell component instead!
  }
  // <div className="cell"></div>
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()} {/* genMatricx (def above) maps this.props.values to a JSX array*/}
      </div>
    )
  }
  
}


Matrix.defaultProps = {
  values: pattern2
}