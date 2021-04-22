import React from 'react'

const AxisY = ({yScale,ticks,width,padding}) => {
  return (
    ticks.map(tickValue => {
            return (
              <g className="tick" key={tickValue} transform = {`translate(${padding},${yScale(tickValue)})`}>
                <line x2={width-padding} />              
                <text dx={-15} dy={7} style={{textAnchor: "end"}}>{tickValue}</text>
              </g>
            )
          })
  )
}

export default AxisY
