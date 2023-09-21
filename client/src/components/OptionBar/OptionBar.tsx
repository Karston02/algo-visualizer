import React from 'react'
import './optionBarStyles.css';
function OptionBar(graph: any) {
  return (
    <div className="container">
        <button className="merge-type-button">Merge Sort</button>
        <button className="merge-type-button">Quick Sort</button>
        <button className="merge-type-button">Insertion Sort</button>
        <button className="merge-type-button">Bubble Sort</button>
    </div>
  )
}

export default OptionBar