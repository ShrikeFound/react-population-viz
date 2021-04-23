import { extent, max } from "d3-array";
import { csv } from "d3-fetch";
import { useEffect, useRef, useState } from "react";
import BarChart from "./components/BarChart";
import Map from "./components/Map";
import ScatterPlot from "./components/ScatterPlot";
import Tooltip from "./components/Tooltip";
import countryMap from './countries.json'

function App() {
  const [data, setData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [year, setYear] = useState(1961);
  const [country, setCountry] = useState("USA");
  const [minYear,maxYear] = extent(data,(d) => d["Year"])
  const tooltipRef = useRef();


  const [minFertilityRate,maxFertilityRate] = extent(data, d => +d["Fertility Rate"])
  const [minLifeExpectancy, maxLifeExpectancy] = extent(data, d => +d["Life Expectancy"])

  const maxPopulation = max(data, d => d["Population"])

  const dataURL = "https://gist.githubusercontent.com/ShrikeFound/39a8fd3db574ec9f5d10074840c098bd/raw"
  useEffect(() => {
    csv(dataURL).then(data => setData(data.sort((a, b) => {
      return  +b['Population'] - +a['Population']

    })))
  }, [])
  //get yearly data for scatter plot
  useEffect(() => {
    if (data) {
      const newYearData = data.filter(d => {
        return Number(d["Year"]) == year
      })
      setYearData(newYearData)
     }

  }, [data, year])
  
  //get country data for bar chart
  useEffect(() => {
    if (data) {
      const newCountryData = data.filter(d => {
        return d["Entity"] == country
      })
      setCountryData(newCountryData.sort((a, b) => {
        return +a['Year'] - +b['Year']
      }))
     }

  }, [data,country])

  const handleYearChange = (e) => {
    const newYear = e.target.value
    setYear(newYear)
  }


  const handleCountryChange = (e) => {
    const newCountry = e.target.id
    setCountry(newCountry)
  }

  return (
    <div className="App">
      <h1 className="title">Country Metric Dashboard</h1>
      <div className="dashboard">
        
        <div className="scatterplot-container">
          <ScatterPlot data={yearData} country={country} tooltipRef={tooltipRef} minFertilityRate={minFertilityRate} maxFertilityRate={maxFertilityRate} handleCountryChange={(e) => handleCountryChange(e)} maxLifeExpectancy={maxLifeExpectancy} minLifeExpectancy={minLifeExpectancy} maxPopulation={maxPopulation} />
        </div>
        
        <div className="year-input">
          <p>This dashboard is inspired Hans Rosling's first TED talk and explores many of the same areas using modern data: Country population growth, life expectancy, and fertility rates (Short life Big family vs. Long life Small family). </p>
          <p> Take a look at the UN's most recent data on history country growth and explore the relationship between these metrics yourself. Use the slider below to travel through time and click on a country's dot to view their data on the chart below.</p>
          <h2 style={{ fontWeight: "400" }}>Year: {year}</h2>
          <input type="range" min={minYear} max={maxYear} onChange={(e) => handleYearChange(e)} />
        </div>
        
        <div className="barchart-container">
          <BarChart country={country} data={countryData} />
        </div>
        
      </div>
      <Tooltip ref={tooltipRef} />



    </div>
  );
}

export default App;
