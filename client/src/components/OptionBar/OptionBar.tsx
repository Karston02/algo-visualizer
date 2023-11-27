import React, { useState } from 'react';
import './optionBarStyles.css';
import AlgorithmTooltip from '../AlgorithmTooltip/AlgorithmTooltip';

interface AlgorithmInfo {
  description: string;
  averageTimeComplexity: string;
  worstCaseTimeComplexity: string;
  spaceComplexity: string;
}

interface OptionBarProps {
  startBubbleSortAnimation: () => void;
  startMergeSortAnimation: () => void;
  startQuickSortAnimation: () => void;
  startInsertionSortAnimation: () => void;
  startSelectionSortAnimation: () => void;
}

const algorithmDescriptions: Record<string, AlgorithmInfo> = {
  'Merge Sort': {
    description: 'A divide and conquer algorithm that divides an array into two halves, recursively sorts them, and then merges the sorted halves.',
    averageTimeComplexity: 'O(n log n)',
    worstCaseTimeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
  },
  'Quick Sort': {
    description: 'A divide and conquer algorithm that picks an element as a pivot and partitions the array around the pivot.',
    averageTimeComplexity: 'O(n log n)',
    worstCaseTimeComplexity: 'O(n^2)',
    spaceComplexity: 'O(log n)',
  },
  'Insertion Sort': {
    description: 'Builds the final sorted array one item at a time by repeatedly taking items from the input data and inserting them into the correct position.',
    averageTimeComplexity: 'O(n^2)',
    worstCaseTimeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)',
  },
  'Bubble Sort': {
    description: 'Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
    averageTimeComplexity: 'O(n^2)',
    worstCaseTimeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)',
  },
  'Selection Sort': {
    description: 'Divides the input list into a sorted and an unsorted region, and repeatedly selects the smallest element from the unsorted region to add to the sorted region.',
    averageTimeComplexity: 'O(n^2)',
    worstCaseTimeComplexity: 'O(n^2)',
    spaceComplexity: 'O(1)',
  },
};

function OptionBar({ 
  startBubbleSortAnimation,
  startMergeSortAnimation,
  startQuickSortAnimation,
  startInsertionSortAnimation,
  startSelectionSortAnimation,
}: OptionBarProps) {
  const [tooltipDescription, setTooltipDescription] = useState<AlgorithmInfo | null>(null);

  return (
    <div className="container">
      {Object.entries(algorithmDescriptions).map(([algorithm, info]) => (
        <div 
          key={algorithm}
          className="tooltip-container"
          onMouseEnter={() => setTooltipDescription(info)}
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
            <AlgorithmTooltip {...tooltipDescription} />
          )}
        </div>
      ))}
    </div>
  );
}

export default OptionBar;
