**Project Abstract**

1. **Project Idea:**
   The project aims to create an Algorithm Visualizer, providing an interactive platform for users to observe and understand sorting algorithms in action. Users can choose from various sorting algorithms, visualize the step-by-step sorting process, and gain insights into algorithmic behaviors.

2. **Software Model Design:**
   - **Packages:**
     - **SortingVisualizer:** Manages the overall visualization and user interface.
     - **SortingFunctions:** Contains implementations for sorting algorithms (e.g., Bubble Sort, Merge Sort).
     - **OptionBar:** Handles user options and algorithm selection.
   - **Classes:**
     - **SortingVisualizer:** Main class managing the application state.
     - **SortingFunctions:** Classes for each sorting algorithm with methods for visualization.
     - **OptionBar:** Class for user options and algorithm selection.
   - **Methods/Functions:**
     - **SortingVisualizer:**
       - `generateNewData()`: Fetches and updates the data to be sorted.
       - `startSortingAnimation()`: Initiates the chosen sorting algorithm animation.
     - **SortingFunctions:**
       - Methods for each sorting algorithm (e.g., `bubbleSort()`, `mergeSort()`).
     - **OptionBar:**
       - `handleAlgorithmSelection()`: Updates the selected algorithm.

3. **Libraries Used:**
   - **React:** For building the user interface.
   - **Axios:** For making HTTP requests to retrieve sorting data.
   - *(Any other libraries based on specific requirements)*

4. **Current Expectations:**
   The software is expected to provide a clear and engaging visualization of sorting algorithms, allowing users to comprehend the underlying processes. It is anticipated to be functional and user-friendly.

5. **Expected Weaknesses:**
   - **Performance:** Potential challenges with the real-time rendering of complex sorting algorithms.
   - **Browser Compatibility:** Compatibility issues across various web browsers.
   - **Algorithm Complexity:** Certain algorithms may be harder to visualize due to their inherent complexity.

By addressing these expectations and weaknesses, the project aims to deliver an effective and educational tool for understanding sorting algorithms through visualization.
