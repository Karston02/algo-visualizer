import React from 'react'
import './optionBarStyles.css';
function OptionBar({ 
  startBubbleSortAnimation,
  startMergeSortAnimation,
  startQuickSortAnimation,
  startInsertionSortAnimation
}: {
  startBubbleSortAnimation: () => void;
  startMergeSortAnimation: () => void;
  startQuickSortAnimation: () => void;
  startInsertionSortAnimation: () => void; }) {
  return (
    <div className="container">
        <button className="merge-type-button" onClick={startMergeSortAnimation}>Merge Sort</button>
        <button className="merge-type-button" onClick={startQuickSortAnimation}>Quick Sort</button>
        <button className="merge-type-button" onClick={startInsertionSortAnimation}>Insertion Sort</button>
        <button className="merge-type-button" onClick={startBubbleSortAnimation}>Bubble Sort</button>
    </div>
  )
}

export default OptionBar