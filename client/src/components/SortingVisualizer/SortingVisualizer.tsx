import React, { useState, useEffect } from 'react';
import './sortingVisualizerStyles.css';
import OptionBar from '../OptionBar/OptionBar'
import axios from 'axios';
// test
function SortingVisualizer() {
  // useState for graph data, only used to render bars on page load
  const [graph, setGraph] = useState([]);
 
  // function to fetch data from backend
  const generateNewData = () => {
    axios
      .get('/graph') // get request to '/graph' endpoint
      .then((response) => {
        // update state with response data
        setGraph(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    generateNewData();
  }, []); // [] makes it so that this useEffect only runs on page load

  return (
    <div className="page-container">
      <h1 className="main-header">Algorithm Visualizer</h1>
      <OptionBar graph={graph}/>
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