import { scaleLinear, scaleSqrt } from 'd3-scale';
import React from 'react'
import AxisX from './AxisX';
import AxisY from './AxisY';
import CountryDots from './CountryDots';
import Label from './Label';

const ScatterPlot = ({ data,minFertilityRate, maxFertilityRate,minLifeExpectancy,maxLifeExpectancy,maxPopulation,tooltipRef,handleCountryChange,country}) => {

  if (!data) {
    return <p>Loading...</p>
  }


  const height = 1200;
  const width = 1600;
  const padding = 130;
  const innerHeight = height - padding;
  const innerWidth = width - padding;

  const xScale = scaleLinear().domain([minFertilityRate, maxFertilityRate]).nice().range([padding, innerWidth])
  const xTicks = xScale.ticks()
  const yScale = scaleLinear().domain([minLifeExpectancy,maxLifeExpectancy]).nice().range([innerHeight,padding])
  const yTicks = yScale.ticks()

  const rScale = scaleSqrt().domain([0,maxPopulation]).range([5,18])
  

  return (
    <svg className="population-scatter-plot" viewBox={`0 0 ${width} ${height}`}>

      <g className="ticks">
        <AxisX ticks={xTicks} xScale={xScale} padding={padding} height={innerHeight} />
      </g>
      <Label
        x={width / 2}
        y={innerHeight+padding/3}
        dy="1.2em"
        labelText="Fertility Rate"
      />

      <g className="ticks">
        <AxisY ticks={yTicks} yScale={yScale} padding={padding} width={innerWidth} />
      </g>
      <Label
        x={padding/3}
        y={height / 2}
        dy=".82em"
        rotate={true}
        labelText="Life Expectancy at Birth"
      />
      

      <CountryDots country={country} data={data} xScale={xScale} yScale={yScale} rScale={rScale} tooltipRef={tooltipRef} handleCountryChange={(e) =>handleCountryChange(e)}/>

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
