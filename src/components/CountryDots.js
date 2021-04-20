import React from 'react'

const CountryDots = ({ data,xScale,yScale,rScale}) => {
  return (
    <g className="country-dots">
      {data.map(d => <circle key={d["Entity"]} cx={xScale(d["Fertility Rate"])} cy={yScale(d["Life Expectancy"])} pop={d["Population"]}r={rScale(d["Population"])} id={`dot-${d["Entity"]}`}/>)}
    </g>
  )
}

export default CountryDots
