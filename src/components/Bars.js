import React from 'react'

const Bars = ({data,padding, xScale, yScale,tooltipRef,barWidth,barPadding,height }) => {
  const tooltip = document.getElementById("tooltip")
  const showTooltip = (e,el) => {
    tooltip.classList.add("show")
    tooltip.style.left = `${e.pageX}px`
    tooltip.style.top = `${e.pageY}px`
    tooltip.innerHTML = `
    <p class="country-title">${e.target.id}<p/><p>Population: ${Number(e.target.getAttribute("data-value")).toLocaleString()}</p>`
  }

  const hideTooltip = (e) => {
    tooltip.classList.remove('show')
  }

  return (
    <g className="bars">
      {data.map((d, i) => <rect x={xScale(i * (barWidth + barPadding))} y={yScale(d['Population'])} width={barWidth} height={height-yScale(d['Population'])} key={d["Year"]} data-value={ d["Population"]} id={d["Year"]} onMouseMove={(e, el) => showTooltip(e, el)} onMouseLeave={(e) => hideTooltip(e)} />)}
    </g>
  )
}

export default Bars
