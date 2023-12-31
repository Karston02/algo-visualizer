**Project Idea:**
   The project aims to create an Algorithm Visualizer, providing an interactive platform for users to observe and understand sorting algorithms in action. Users can choose from various sorting algorithms, visualize the step-by-step sorting process, and gain insights into algorithmic behaviors.
   Within the source code, each algorithm has a detailed description through comments of what is occurring as well as a link to a video describing the process.

**Software Model Design:**
   - **File Structure:**
     - **Client:** User-facing folder that holds various React components (such as OptionBar, AlgorithmTooltip, TemporaryWIP, etc). It also holds SortingFunctions that process and animate the information received from the server. 
     - **Server:** Provides access to the algorithms implemented. This holds the HTTP Requests (GET/POST) as well as the Python implementation of each sorting algorithm. This is where the Python resides and does the heavy work of the program.

   - **Functions/Components:**
     - **SortingVisualizer:**
       - `generateNewData()`: Fetches and updates the data to be sorted.
       - `startSortingAnimation()`: Initiates the chosen sorting algorithm animation.
       - `handleWIPClick()`: If the user clicks Merge or Quick sort, it renders another component notifying the user of WIP. This also calls the respective sorting method to prove the implementation is properly working.
     - **SortingFunctions:**
       - Methods for each sorting algorithm
          - `mergeSort()`
          - `quickSort()`
          - `bubbleSort()`
          - `selectionSort()`
          - `insertionSort()`
        - `index.ts` for clean imports.
     - **OptionBar:**
       - `handleAlgorithmSelection()`: Begins the animation according to the selected sort method.
     - **AlgorithmTooltip:**
       - Receives props through an interface, including `description`, `averageTimeComplexity`, `worstCaseTimeComplexity`, and `spaceComplexity` and briefly explains the process for each algorithm.
     - **TemporaryWIP:**
       - Receives props through an interface, including `sortingName`, `note`, and a callback function `onClose()`.
       - This shows up to notify the user of WIP. The onClose callback function closes this popup when the user clicks the Close button.

**Libraries Used:**
   - **React:** Framework for building the user interface and reusable components.
   - **Axios:** For making HTTP GET requests to retrieve sorting data.
   - **Flask:** To start the Python Server backend as a microservice framework.

**Current Expectations:**
   The software is expected to provide a clear and engaging visualization of sorting algorithms, allowing users to comprehend the underlying processes. It is anticipated to be functional, responsive, and user-friendly.

**Expected Weaknesses:**
   - **Performance:** Certain algorithms visualization takes longer to process (which is purposeful). There is currently hardcoded ms numbers to speed up the process for some algorithms and slow it down for others - A sliding bar option will later be implemented to allow the user to speed/slow down the animation process.
   - **Browser Compatibility:** Currently, the project is only minimally responsive and is best viewed through a screen ~900px+ wide. At a later date, this will be changed to utilize clamp() and media queries to allow for better mobile and tablet experiences.
   - **Algorithm Complexity:** The merge and quick sort algorithms have been implemented and sort properly on the screen, but due to their recursive nature a different approach to visualization is required. This will later be implemented.
   - **Unexpected User Behavior:** If a user attempts to animate a sorting algorithm whilst the graph is already sorted, it will falsely animate bars as if they were being sorted. This is purposeful for now, as the `global bars` variable is being stored in the server. This is not best practice and will be changed at a later date.

**References:**
  - https://github.com/dipesh-m/Sorting-Visualizer
  - https://github.com/clementmihailescu/Sorting-Visualizer

**Set Up Process:**
1. Clone the repository with `git clone git@github.com:Karston02/algo-visualizer.git`
2. Go into the repository with `cd algo-visualizer`
3. Open 2 terminals (one for the client, one for the server)
4. In the first terminal, do `cd server`
5. Once you are in the server directory, establish a virutal environment with `python3 -m venv venv
`
   - On Windows, `.\venv\Scripts\activate`
   - On Mac/Linux, `source venv/bin/activate`
6. In the virtual environment, download the dependencies with `pip install -r requirements.txt`
7. In the second terminal, do `cd client`
8. Then, do `npm install`
9. Now, you have everything installed, so in the first terminal (server), do `python server.py`
10. Then, in the second terminal, do `npm start`

**Examples:**
  - Insertion Sort:
    ![insertion_sort](https://github.com/Karston02/algo-visualizer/assets/108380847/2e130e7d-2c90-47f3-a795-aedb2cd66568)
  - Bubble Sort:
    ![bubble_sort](https://github.com/Karston02/algo-visualizer/assets/108380847/9a7ec49f-06df-40d0-a861-5a4397b775ac)
  - Selection Sort:
    ![selection_sort](https://github.com/Karston02/algo-visualizer/assets/108380847/59c33e33-b361-4b74-be09-2f741d92fa46)


   
