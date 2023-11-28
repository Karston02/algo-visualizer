import React, { useState, useEffect } from "react";
import "./sortingVisualizerStyles.css";
import OptionBar from "../OptionBar/OptionBar";
import axios from "axios";
import {
  startMergeSortAnimation,
  startInsertionSortAnimation,
  startSelectionSortAnimation,
  startBubbleSortAnimation,
  startQuickSortAnimation,
} from "../SortingFunctions";
import TemporaryWIP from "../TemporaryWIP/TemporaryWIP";

function SortingVisualizer() {
  const [graph, setGraph] = useState([]);
  const [, setIsSorting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  // Generate new data for the graph
  const generateNewData = () => {
    axios
      .get("/graph")
      .then((response) => {
        setGraph(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // Generate new data on page load
  useEffect(() => {
    generateNewData();
  }, []); // empty array to only run once on load

  const handleWIPClick = () => {
    // Instead of sorting, show the pop-up
    setShowPopup(true);
  };
  
  return (
    <div className="page-container">
      <h1 className="main-header">Algorithm Visualizer</h1>
      <OptionBar
        startBubbleSortAnimation={() =>
          startBubbleSortAnimation(setIsSorting, setGraph)
        }
        startMergeSortAnimation={() =>
          // instead of sorting, popup a message saying that it's under construction
          handleWIPClick()
          // startMergeSortAnimation(setIsSorting, setGraph)
        }
        startInsertionSortAnimation={() =>
          startInsertionSortAnimation(setIsSorting, setGraph)
        }
        startQuickSortAnimation={() =>
          startQuickSortAnimation(setIsSorting, setGraph)
        }
        startSelectionSortAnimation={() =>
          startSelectionSortAnimation(setIsSorting, setGraph)
        }
      />
      <div className="border">
        <div className="bar-container">
          {showPopup && (
            <TemporaryWIP
             sortingName="Bubble Sort"
              note="This algorithm is currently under construction."
            />
          )}
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
