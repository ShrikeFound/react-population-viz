
import React from 'react'

const AxisX = ({ticks,xScale,padding,height}) => {

  return (
    ticks.map(val => {
      return (
        <g
          key={val}
          className="tick"
          transform={`translate (${xScale(val)} ${height})`}
        >
          <line  y2={-(height-padding)}/>
          <text dx={0} dy="1.82em" style={{textAnchor: "middle"}}>{val}</text>
        </g>
      )
    })
    // <></>
    )

}

export default AxisX
