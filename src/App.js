import { extent, max } from "d3-array";
import { csv } from "d3-fetch";
import { useEffect, useState } from "react";
import ScatterPlot from "./components/ScatterPlot";


function App() {
  const [data, setData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [year, setYear] = useState(1961);
  const [minYear,maxYear] = extent(data,(d) => d["Year"])


  const maxFertilityRate = max(data, d => d["Fertility Rate"])
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
      <h1>{year}</h1>
      <ScatterPlot data={yearData} maxFertilityRate={maxFertilityRate} maxLifeExpectancy={maxLifeExpectancy} minLifeExpectancy={minLifeExpectancy} maxPopulation={maxPopulation}/>
      <input type="range" min={minYear} max={maxYear} onChange={(e) => handleYearChange(e)}/>
    </div>
  );
}

export default App;
