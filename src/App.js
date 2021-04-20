import { extent } from "d3-array";
import { csv } from "d3-fetch";
import { useEffect, useState } from "react";
import ScatterPlot from "./components/ScatterPlot";


function App() {
  const [data, setData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [year, setYear] = useState(1970);
  const [minYear,maxYear] = extent(data,(d) => d["Year"])

  const dataURL = "https://gist.githubusercontent.com/ShrikeFound/39a8fd3db574ec9f5d10074840c098bd/raw/UN%2520population%2520data.csv"
  useEffect(() => {
  csv(dataURL).then(setData)    
  }, [])
  useEffect(() => {
    console.log("checking data again")
    if (data) {
      console.log("in here")
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
  console.log(yearData.length)
  return (
    <div className="App">
      <h1>{year}</h1>
      <ScatterPlot data={yearData} />
      <input type="range" min={minYear} max={maxYear} onChange={(e) => handleYearChange(e)}/>
    </div>
  );
}

export default App;
