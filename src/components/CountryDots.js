import React from 'react'

const CountryDots = ({ data, xScale, yScale, rScale,tooltipRef,handleCountryChange}) => {
  const tooltip = document.getElementById("tooltip")
  const showTooltip = (e,el) => {
    tooltip.classList.add("show")
    tooltip.style.left = `${e.pageX}px`
    tooltip.style.top = `${e.pageY}px`
    tooltip.innerHTML = `
    <p class="country-title">${e.target.id}<p/><p>Population: ${Number(e.target.getAttribute("data-population")).toLocaleString()}</p><p>Life Expectancy: ${Number(e.target.getAttribute("data-life-expectancy")).toLocaleString()}</p><p>Fertility Rate: ${Number(e.target.getAttribute("data-fertility-rate")).toLocaleString()}</p>`
  }

  const hideTooltip = (e) => {
    tooltip.classList.remove('show')
  }
  return (
    <g className="country-dots">
      {data.map(d => <circle key={d["Entity"]} id={d["Entity"]} data-fertility-rate={d['Fertility Rate']} data-life-expectancy={d["Life Expectancy"]} data-population={d['Population']} onMouseMove={(e, el) => showTooltip(e, el)} onMouseLeave={(e) => hideTooltip(e)} cx={xScale(d["Fertility Rate"])} cy={yScale(d["Life Expectancy"])} pop={d["Population"]} r={rScale(d["Population"])} onClick={(e) => handleCountryChange(e)}/>)}
    </g>
  )
}

export default CountryDots
