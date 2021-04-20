import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import React from 'react'
import CountryDots from './CountryDots';

const ScatterPlot = ({ data }) => {


  const height = 600;
  const width = 600;
  const padding = 50;
  const [minFertilityRate, maxFertilityRate] = extent(data, d => {
    return d["Fertility Rate"]
  })
  const [minLifeExpectancy, maxLifeExpectancy] = extent(data, d => {
    return Number(d["Life Expectancy"])
  })
  const xScale = scaleLinear().domain([minFertilityRate, maxFertilityRate]).range([0, width-padding])
  const yScale = scaleLinear().domain([minLifeExpectancy,maxLifeExpectancy]).range([height-padding,padding])


  if (!data) {
    return <p>Loading...</p>
  }
  console.log(data.length)
  return (
    <svg className="population-scatter-plot" viewBox={`0 0 ${width} ${height}`}>

      <CountryDots data={data} xScale={xScale} yScale={yScale}/>

    </svg>
  )
}

export default ScatterPlot
