import React, { useState, useEffect } from 'react';
import './sortingVisualizerStyles.css';
import OptionBar from '../OptionBar/OptionBar';
import axios from 'axios';

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

const startBubbleSortAnimation = () => {
  setIsSorting(true);
  axios
    .get('/bubble-sort')
    .then((response) => {
      const steps = response.data;
      animateBubbleSort(steps);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const animateBubbleSort = (steps: string | any[]) => {
  let stepIndex = 0

  const animationInterval = setInterval(() => {
    if (stepIndex < steps.length) {
      setGraph(steps[stepIndex]);
      stepIndex += 1;
    } else {
      clearInterval(animationInterval);
      setIsSorting(false);
    }
  }, 10);
};

  return (
    <div className="page-container">
      <h1 className="main-header">Algorithm Visualizer</h1>
      <OptionBar graph={graph} />
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
        <button onClick={startMergeSortAnimation}>
          MERGE TESTER
        </button>
        <button onClick={startBubbleSortAnimation}>
          BUBBLE TESTER
        </button>
        <button className="reset-button" onClick={generateNewData}>
          Reset Data
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
