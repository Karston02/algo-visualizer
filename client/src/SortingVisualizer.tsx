import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SortingVisualizer() {
  // Define a state variable 'graph' using the 'useState' hook
  const [graph, setGraph] = useState([]);

  // Function to fetch new data from the backend
  const generateNewData = () => {
    axios.get('/graph')
      .then(response => {
        // Update the 'graph' state with the new data received from the backend
        setGraph(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Use the 'useEffect' hook to fetch initial data when the component mounts
  useEffect(() => {
    generateNewData();
  }, []);

  return (
    <div>
      {/* Display a heading */}
      <h1>Algorithm Visualizer</h1>
      <button onClick={generateNewData}>Reset Data</button>
      {/* Map through graph and show every number*/}
      {graph.map((value, index) => (
        <span key={index}>{value}, </span>
      ))}
      <br />
      {/* Button to generate new data */}
    </div>
  );
}
