import React, { useState, useEffect } from 'react';
import './sortingVisualizerStyles.css';
import OptionBar from '../OptionBar/OptionBar';
import axios from 'axios';

function SortingVisualizer() {
  const [graph, setGraph] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

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
        setGraph(response.data); // Set sorted data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          THIS STARTS MERGE ANIMATION
        </button>
        <button className="reset-button" onClick={generateNewData}>
          Reset Data
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
