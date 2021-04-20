import React from 'react'

const Label = ({ x = 0, y = 0, labelText = "", rotate = false, title = false }) => {
  return (
    <text
      className={`label ${title ? "title" : ""}`}
      x={rotate ? 0 : x}
      y={rotate ? 0 : y}
      textAnchor="middle"
      transform = {rotate ? `translate(${x},${y}) rotate(${rotate ? -90 : 0})` : ""}
    >
      {labelText}
    </text>
  )
}

export default Label
