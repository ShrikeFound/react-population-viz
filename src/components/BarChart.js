import React from 'react'

const BarChart = ({ country }) => {
  const height = 400;
  const width = 600;
  const padding = 20;

  // const xScale = scaleLinear().domain([minFertilityRate, maxFertilityRate]).range([0, width - padding])
  // const xTicks = xScale.ticks()
  // const yScale = scaleLinear().domain([minLifeExpectancy,maxLifeExpectancy]).range([height-padding,padding])
  // const yTicks = yScale.ticks()

  return (
    <svg className="population-bar-chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">

    </svg>
    )
}

export default BarChart
