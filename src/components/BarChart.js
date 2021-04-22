import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import React from 'react'
import Bars from './Bars';

const BarChart = ({ country,data }) => {
  const height = 400;
  const width = 600;
  const padding = 20;

  const innerHeight = height - padding;
  const innerWidth = width - padding;
  const barPadding = 5
  const barWidth = innerWidth/data.length - barPadding

  const [minCountryPopulation, maxCountryPopulation] = extent(data, d => +d['Population'])
  

  // const xScale = scaleLinear().domain([minFertilityRate, maxFertilityRate]).range([0, width - padding])
  // const xTicks = xScale.ticks()
  // const yScale = scaleLinear().domain([minLifeExpectancy,maxLifeExpectancy]).range([height-padding,padding])
  // const yTicks = yScale.ticks()
  const xScale = scaleLinear().domain([0, width]).nice().range([padding, innerWidth])
  const yScale = scaleLinear().domain([minCountryPopulation, maxCountryPopulation]).nice().range([padding,innerHeight])

  return (
    <svg className="population-bar-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      <Bars data={data} height={innerHeight} xScale={xScale} yScale={yScale} barWidth={barWidth} barPadding={barPadding} padding={padding}/>
    </svg>
    )
}

export default BarChart
