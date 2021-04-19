import { csv } from "d3-fetch";
import { useEffect, useState } from "react";
import ScatterPlot from "./components/ScatterPlot";


function App() {
  const [data, setData] = useState();

  const dataURL = "https://gist.githubusercontent.com/ShrikeFound/39a8fd3db574ec9f5d10074840c098bd/raw/ad28b17d52c8e477f02502652ce551dac7c4f280/UN%2520population%2520data.csv"

  console.log(data)

  useEffect(() => {
  csv(dataURL).then(setData)    
  }, [])
  
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <div className="App">
      <header className="App-header">
        <ScatterPlot data={data}/>
      </header>
    </div>
  );
}

export default App;
