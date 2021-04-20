import React from 'react'

const AxisY = ({yScale,ticks,width,padding}) => {
  return (
    ticks.map(tickValue => {
            return (
              <g className="tick" key={tickValue} transform = {`translate(${0},${yScale(tickValue)})`}>
                <line x2={width-padding} />              
                <text x={-10}  style={{textAnchor: "end"}}>{tickValue}</text>
              </g>
            )
          })
  )
}

export default AxisY
