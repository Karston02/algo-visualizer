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
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [selectedAlgorithmNote, setSelectedAlgorithmNote] = useState("");

  const mergeSortNote = 'Currently, merge sort is implemented and successfully sorts the data. However, the animation (i.e. the bars moving) which will be implemented by manipulating the array through JavaScript/TypeScript is under maintenance. ALL of the python code is complete and this can be confirmed by the sorted bars behind this text as well as the test files.'
  const quickSortNote = 'Currently, quick sort is implemented and successfully sorts the data. However, the animation (i.e. the bars moving) which will be implemented by manipulating the array through JavaScript/TypeScript is under maintenance. ALL of the python code is complete and this can be confirmed by the sorted bars behind this text as well as the test files.'

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

  const handleWIPClick = (algoName: string, algoNote: string) => {
    // Instead of sorting, show the pop-up
    setShowPopup(true);
    setSelectedAlgorithm(algoName);
    setSelectedAlgorithmNote(algoNote);
    if (algoName === 'Merge Sort') {
      startMergeSortAnimation(setIsSorting, setGraph)
    }
    if (algoName === 'Quick Sort') {
      startQuickSortAnimation(setIsSorting, setGraph)
    }
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
          handleWIPClick("Merge Sort", mergeSortNote)
        }
        startInsertionSortAnimation={() =>
          startInsertionSortAnimation(setIsSorting, setGraph)
        }
        startQuickSortAnimation={() =>
          handleWIPClick("Quick Sort", quickSortNote)
          // startQuickSortAnimation(setIsSorting, setGraph)
        }
        startSelectionSortAnimation={() =>
          startSelectionSortAnimation(setIsSorting, setGraph)
        }
      />
      <div className="border">
        <div className="bar-container">
          {showPopup && (
            <TemporaryWIP
              sortingName={selectedAlgorithm}
              note={selectedAlgorithmNote}
              onClose={() => setShowPopup(false)}
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
          Generate New Data
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
