
import React from 'react'

const AxisX = ({ticks,xScale,padding,height}) => {

  return (
    ticks.map(val => {
      return (
        <g
          key={val}
          className="tick"
          transform={`translate (${xScale(val)} ${height-padding})`}
        >
          <line  y2={-(height-padding*2)}/>
           <text y={5} dy=".82em" style={{textAnchor: "middle"}}>{val}</text>
        </g>
      )
    })
    // <></>
    )

}

export default AxisX
