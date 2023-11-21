1. **Project Idea:**
   The project aims to create an Algorithm Visualizer, providing an interactive platform for users to observe and understand sorting algorithms in action. Users can choose from various sorting algorithms, visualize the step-by-step sorting process, and gain insights into algorithmic behaviors.
   Within the source code, each algorithm has a description of what is occurring as well as a link to a video describing the process.

3. **Software Model Design:**
   - **File Structure:**
     - **Client:** User-facing folder that holds various React components (such as OptionBar). It also holds SortingFunctions that process and animate the information received from the server.
     - **Server:** Provides access to the algorithms implemented. This holds the HTTP Requests (GET/POST) as well as the Python implementation of each sorting algorithm.

   - **Methods/Functions:**
     - **SortingVisualizer:**
       - `generateNewData()`: Fetches and updates the data to be sorted.
       - `startSortingAnimation()`: Initiates the chosen sorting algorithm animation.
     - **SortingFunctions:**
       - Methods for each sorting algorithm (e.g., `bubbleSort()`, `mergeSort()`, etc).
     - **OptionBar:**
       - `handleAlgorithmSelection()`: Begins the animation according to the selected sort method.

4. **Libraries Used:**
   - **React:** Framework for building the user interface and resuable components.
   - **Axios:** For making HTTP requests to retrieve sorting data.

5. **Current Expectations:**
   The software is expected to provide a clear and engaging visualization of sorting algorithms, allowing users to comprehend the underlying processes. It is anticipated to be functional, responsive, and user-friendly.

6. **Expected Weaknesses:**
   - **Performance:** Certain algorithms visualization takes longer to process (which is purposeful) - A sliding bar option will later be implemented to allow the user to speed/slow down the animation process.
   - **Browser Compatibility:** Compatibility issues across various legacy web browsers (IE: Edge).
   - **Algorithm Complexity:** Certain algorithms may be harder to visualize due to their inherent complexity.

