import React from 'react'

const Bars = ({data,padding, xScale, yScale,tooltipRef,barWidth,barPadding,height }) => {
  console.log("bars data: ",data)
  return (
    <g className="bars">
      {data.map((d, i) => <rect x={xScale(i * (barWidth + barPadding))} y={height-yScale(d['Population'])} width={barWidth} height={ yScale(d['Population'])} key={d["Year"]} id={d["Entity"]} />)}
    </g>
  )
}

export default Bars
