import React, { useState } from 'react';
import './optionBarStyles.css';
import AlgorithmTooltip from '../AlgorithmTooltip/AlgorithmTooltip';

interface OptionBarProps {
  startBubbleSortAnimation: () => void;
  startMergeSortAnimation: () => void;
  startQuickSortAnimation: () => void;
  startInsertionSortAnimation: () => void;
  startSelectionSortAnimation: () => void;
}

const algorithmDescriptions: Record<string, string> = {
  'Merge Sort': 'A divide and conquer algorithm that divides an array into two halves, recursively sorts them, and then merges the sorted halves.',
  'Quick Sort': 'A divide and conquer algorithm that picks an element as a pivot and partitions the array around the pivot.',
  'Insertion Sort': 'Builds the final sorted array one item at a time by repeatedly taking items from the input data and inserting them into the correct position.',
  'Bubble Sort': 'Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
  'Selection Sort': 'Divides the input list into a sorted and an unsorted region, and repeatedly selects the smallest element from the unsorted region to add to the sorted region.',
};

function OptionBar({ 
  startBubbleSortAnimation,
  startMergeSortAnimation,
  startQuickSortAnimation,
  startInsertionSortAnimation,
  startSelectionSortAnimation,
}: OptionBarProps) {
  const [tooltipDescription, setTooltipDescription] = useState<string | null>(null);

  return (
    <div className="container">
      {Object.entries(algorithmDescriptions).map(([algorithm, description]) => (
        <div 
          key={algorithm}
          className="tooltip-container"
          onMouseEnter={() => setTooltipDescription(description)}
          onMouseLeave={() => setTooltipDescription(null)}
        >
          <button 
            className="merge-type-button" 
            onClick={() => {
              switch (algorithm) {
                case 'Merge Sort':
                  startMergeSortAnimation();
                  break;
                case 'Quick Sort':
                  startQuickSortAnimation();
                  break;
                case 'Insertion Sort':
                  startInsertionSortAnimation();
                  break;
                case 'Bubble Sort':
                  startBubbleSortAnimation();
                  break;
                case 'Selection Sort':
                  startSelectionSortAnimation();
                  break;
                default:
                  break;
              }
            }}
          >
            {algorithm}
          </button>
          {tooltipDescription && (
            <AlgorithmTooltip description={tooltipDescription} />
          )}
        </div>
      ))}
    </div>
  );
}

export default OptionBar;
