import { scaleLinear, scaleSqrt } from 'd3-scale';
import React from 'react'
import AxisX from './AxisX';
import AxisY from './AxisY';
import CountryDots from './CountryDots';

const ScatterPlot = ({ data,maxFertilityRate,minLifeExpectancy,maxLifeExpectancy,maxPopulation}) => {

  if (!data) {
    return <p>Loading...</p>
  }


  const height = 1200;
  const width = 1600;
  const padding = 50;

  const xScale = scaleLinear().domain([0, maxFertilityRate]).range([0, width - padding])
  const xTicks = xScale.ticks()
  const yScale = scaleLinear().domain([0,100]).range([height-padding,padding])
  const yTicks = yScale.ticks()

  const rScale = scaleSqrt().domain([0,maxPopulation]).range([2,20])
  
  
  return (
    <svg className="population-scatter-plot" viewBox={`0 0 ${width} ${height}`}>

      <g className="ticks">
        <AxisX ticks={xTicks} xScale={xScale} padding={padding} height={height} />
      </g>

      <g class="ticks">
        <AxisY ticks={yTicks} yScale={yScale} padding={padding} width={width} />
      </g>
      

      <CountryDots data={data} xScale={xScale} yScale={yScale} rScale={rScale}/>
    </svg>
  )
}

export default ScatterPlot
