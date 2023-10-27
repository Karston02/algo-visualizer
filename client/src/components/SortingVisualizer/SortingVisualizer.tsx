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
      const { steps, animations } = response.data;
      animateBubbleSort(steps, animations);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const ANIMATION_INTERVAL = 50;
const animateBubbleSort = (steps: string | any[], animations: [any, any][]) => {
  let stepIndex = 0;

  const animationInterval = setInterval(() => {
    if (stepIndex < steps.length) {
      const currentList = steps[stepIndex];
      setGraph(currentList);

      // Check if the animation values are greater than or equal to 0
      const [i, j] = animations[stepIndex];
      if (i >= 0 && j >= 0) { // skip first (-1, -1)
        highlightComparedElements(i, j);
      }
      stepIndex += 1;
    } else {
      clearInterval(animationInterval);
      setIsSorting(false);
    }
  }, ANIMATION_INTERVAL);
};


const highlightComparedElements = (index1: number, index2: number) => {
  const bars = document.querySelectorAll('.bar'); // Assuming you have a class "bar" for each bar element
  bars[index1].classList.add('red-bar'); // Add a class to highlight the first compared element
  bars[index2].classList.add('red-bar'); // Add a class to highlight the second compared element

  // delay to remove red-bar (KEEP SAME AS ANIMATION INTERVAL)
  setTimeout(() => {
    bars[index1].classList.remove('red-bar');
    bars[index2].classList.remove('red-bar');
  }, ANIMATION_INTERVAL); // Adjust the delay (in milliseconds) as needed
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
