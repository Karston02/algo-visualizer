import React, { useState, useEffect } from 'react';
import './sortingVisualizerStyles.css';
import OptionBar from '../OptionBar/OptionBar';
import axios from 'axios';
import { startBubbleSortAnimation } from '../SortingFunctions/BubbleSort'

function SortingVisualizer() {
  const [graph, setGraph] = useState([]);
  const [, setIsSorting] = useState(false);

  const generateNewData = () => {
    axios
      .get('/graph')
      .then((response) => {
        setGraph(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    generateNewData();
  }, []);

 const startMergeSortAnimation = () => {
  setIsSorting(true);
  axios
    .get('/merge-sort')
    .then((response) => {
      const { bars, steps } = response.data;
      // animateMergeSort(animations, bars);
      setGraph(bars);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};



const startInsertionSortAnimation = () => {
  setIsSorting(true);
  axios
    .get('/insertion-sort')
    .then((response) => {
      const { steps, animations } = response.data;
      animateInsertionSort(steps, animations);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const animateInsertionSort = (steps: string | any[], animations: [number, number][]) => {
}

const startQuickSortAnimation = () => {
  setIsSorting(true);
  axios
    .get('/insertion-sort')
    .then((response) => {
      const { steps, animations } = response.data;
      animateInsertionSort(steps, animations);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const animateQuickSort = (steps: string | any[], animations: [number, number][]) => {
}



  return (
    <div className="page-container">
      <h1 className="main-header">Algorithm Visualizer</h1>
      <OptionBar 
      startBubbleSortAnimation={() => startBubbleSortAnimation(setIsSorting, setGraph)}
      startMergeSortAnimation={startMergeSortAnimation} 
      startInsertionSortAnimation={startInsertionSortAnimation} 
      startQuickSortAnimation={startQuickSortAnimation}
      />
      <div className="border">
        <div className="bar-container">
          {graph.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value * 0.85}px` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button className="reset-button" onClick={generateNewData}>
          Reset Data
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
