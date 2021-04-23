import { extent } from 'd3-array';
import { format } from 'd3-format';
import { scaleLinear, tickFormat } from 'd3-scale';
import React from 'react'
import AxisY from './AxisY';
import Bars from './Bars';
import Label from './Label';

const BarChart = ({ country,data,tooltipRef }) => {
  const height = 700;
  const width = 1000;
  const padding = 70;

  const innerHeight = height - padding;
  const innerWidth = width - padding;
  const barPadding = 0
  const barWidth = innerWidth/data.length - barPadding

  const [minCountryPopulation, maxCountryPopulation] = extent(data, d => +d['Population'])
  

  const xScale = scaleLinear().domain([0, width]).nice().range([padding, width])
  const yScale = scaleLinear().domain([minCountryPopulation, maxCountryPopulation]).nice().range([innerHeight, padding])
  
  const xTicks = xScale.ticks()
  const formatValue = format(".2s");
  const yTicks = yScale.ticks(5)
  const yFormat = (d) => {
    return `${d/1000000} M`
  }


  if (data.length < 1) {
    return (
      <svg className="population-bar-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <text className="loading-text label"  text-anchor="middle"transform={`translate( ${innerWidth/2} ${innerHeight/2-40})`}>Click on a country's dot</text>
        <text className="loading-text label" text-anchor="middle" transform={`translate( ${innerWidth/2} ${innerHeight/2})`}>to view their population growth </text>
        <text className="loading-text label" text-anchor="middle" transform={`translate( ${innerWidth/2} ${innerHeight/2+40})`}>throughout the years</text>
    </svg>
    )
  }
  return (
    <svg className="population-bar-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      <g className="ticks">
        <AxisY ticks={yTicks} format={yFormat} yScale={yScale} padding={padding} width={innerWidth-padding} />
      </g>

      <Bars data={data} height={innerHeight} xScale={xScale} yScale={yScale} barWidth={barWidth} barPadding={barPadding} padding={padding} tooltipRef={tooltipRef} />
      <Label
        x={width / 2}
        title={true}
        y={padding -15}
        labelText={ `${country} | Population Growth`}
      />




    </svg>
    )
}

export default BarChart
