import { extent, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import React from 'react'
import AxisX from './AxisX';
import CountryDots from './CountryDots';

const ScatterPlot = ({ data,maxFertilityRate,minLifeExpectancy,maxLifeExpectancy }) => {

  if (!data) {
    return <p>Loading...</p>
  }


  const height = 600;
  const width = 600;
  const padding = 50;

  const xScale = scaleLinear().domain([0, maxFertilityRate]).range([0, width - padding])
  const ticks = xScale.ticks()
  const yScale = scaleLinear().domain([minLifeExpectancy,maxLifeExpectancy]).range([height-padding,padding])
  return (
    <svg className="population-scatter-plot" viewBox={`0 0 ${width} ${height}`}>

      <CountryDots data={data} xScale={xScale} yScale={yScale} />
      <g class="ticks">
        <AxisX ticks={ticks} xScale={xScale} padding={padding} height={height} />
      </g>

    </svg>
  )
}

export default ScatterPlot
