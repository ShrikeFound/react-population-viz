import { extent, max } from "d3-array";
import { csv } from "d3-fetch";
import { useEffect, useRef, useState } from "react";
import ScatterPlot from "./components/ScatterPlot";
import Tooltip from "./components/Tooltip";


function App() {
  const [data, setData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [year, setYear] = useState(1961);
  const [minYear,maxYear] = extent(data,(d) => d["Year"])
  const tooltipRef = useRef();

  const [minFertilityRate,maxFertilityRate] = extent(data, d => d["Fertility Rate"])
  const [minLifeExpectancy, maxLifeExpectancy] = extent(data, d => Number(d["Life Expectancy"]))


  const maxPopulation = max(data, d => d["Population"])

  const dataURL = "https://gist.githubusercontent.com/ShrikeFound/39a8fd3db574ec9f5d10074840c098bd/raw"
  useEffect(() => {
  csv(dataURL).then(setData)    
  }, [])
  useEffect(() => {
    if (data) {
      const newYearData = data.filter(d => {
        return Number(d["Year"]) == year
      })
      setYearData(newYearData)
     }

  }, [data,year])

  const handleYearChange = (e) => {
    const newYear = e.target.value
    setYear(newYear)
  }
  return (
    <div className="App">
      <ScatterPlot data={yearData} tooltipRef={tooltipRef} minFertilityRate={minFertilityRate} maxFertilityRate={maxFertilityRate} maxLifeExpectancy={maxLifeExpectancy} minLifeExpectancy={minLifeExpectancy} maxPopulation={maxPopulation}/>
      <h2 style={{ fontWeight: "300" }}>Year {year}</h2>
      <input type="range" min={minYear} max={maxYear} onChange={(e) => handleYearChange(e)} />
      
      <Tooltip ref={tooltipRef} />
    </div>
  );
}

export default App;
