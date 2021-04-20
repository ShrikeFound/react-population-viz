import { scaleLinear, scaleSqrt } from 'd3-scale';
import React from 'react'
import AxisX from './AxisX';
import AxisY from './AxisY';
import CountryDots from './CountryDots';
import Label from './Label';

const ScatterPlot = ({ data,minFertilityRate, maxFertilityRate,minLifeExpectancy,maxLifeExpectancy,maxPopulation,tooltipRef}) => {

  if (!data) {
    return <p>Loading...</p>
  }


  const height = 1200;
  const width = 1600;
  const padding = 100;

  const xScale = scaleLinear().domain([minFertilityRate, maxFertilityRate]).range([0, width - padding])
  const xTicks = xScale.ticks()
  const yScale = scaleLinear().domain([minLifeExpectancy,maxLifeExpectancy]).range([height-padding,padding])
  const yTicks = yScale.ticks()

  const rScale = scaleSqrt().domain([0,maxPopulation]).range([2,13])
  
  
  return (
    <svg className="population-scatter-plot" viewBox={`0 0 ${width} ${height}`}>

      <g className="ticks">
        <AxisX ticks={xTicks} xScale={xScale} padding={padding} height={height} />
      </g>
      <Label
        x={width / 2}
        y={height-30}
        labelText="Fertility Rate"
      />

      <g class="ticks">
        <AxisY ticks={yTicks} yScale={yScale} padding={padding} width={width} />
      </g>
      <Label
        x={-padding}
        y={height / 2}
        rotate={true}
        labelText="Life Expectancy at Birth"
      />
      

      <CountryDots data={data} xScale={xScale} yScale={yScale} rScale={rScale} tooltipRef={tooltipRef} />

      <Label
        x={width / 2}
        title={true}
        y={padding/2}
        labelText="Country Population, Life Expectancy, and Fertility Rate throughout the Years"
      />
    </svg>
  )
}

export default ScatterPlot
