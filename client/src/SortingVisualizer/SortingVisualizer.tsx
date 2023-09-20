import React, { useState, useEffect } from 'react';
import './sortingVisualizerStyles.css';
import OptionBar from '../OptionBar/OptionBar.tsx';
import axios from 'axios';

export function SortingVisualizer() {
  // Define a state variable 'graph' using the 'useState' hook
  const [graph, setGraph] = useState([]);

  // Function to fetch new data from the backend
  const generateNewData = () => {
    axios
      .get('/graph')
      .then((response) => {
        // Update the 'graph' state with the new data received from the backend
        setGraph(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Use the 'useEffect' hook to fetch initial data when the component mounts
  useEffect(() => {
    generateNewData();
  }, []);

  return (
    <div className="page-container">
      {/* Display a heading */}
      <h1 className="main-header">Algorithm Visualizer</h1>
      < OptionBar />
      {/* Render bars based on graph values */}
      <div className="border">
        <div className="bar-container">
          {graph.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value}px` }}
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
