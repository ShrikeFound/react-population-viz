import React from 'react'

const CountryDots = ({ data,xScale,yScale}) => {


  return (
    <g className="country-dots">
      {data.map(d => <circle cx={xScale(d["Fertility Rate"])} cy={yScale(d["Life Expectancy"])} r={5} id={`dot-${d["Entity"]}`}/>)}
    </g>
  )
}

export default CountryDots
