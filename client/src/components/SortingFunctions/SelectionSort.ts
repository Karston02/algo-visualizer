import axios from 'axios';
import { SetStateAction } from 'react';

// delay between each animation step (in ms)
const SELECTION_ANIMATION_INTERVAL = 50;

export function startSelectionSortAnimation(setIsSorting: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setGraph: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {

    setIsSorting(true);
  axios
    .get('/selection-sort') // call the selection sort API endpoint
    .then((response) => {
      // after call, retrieve the steps and animations from the response
      const { steps, animations } = response.data;
      animateSelectionSort(steps, animations); // animate the bubble sort
    })
    .catch((error) => {
      // if there is an error, log it to the console and stop sorting
      console.error('Error:', error);
      setIsSorting(false); // stop sorting
    });

  /*
  This function animates the selection sort algorithm.
  */
  const animateSelectionSort = (steps: number[], animations: [number, number][]) => {
    let stepIndex = 0; // will increment thru 2d list
    const animationInterval = setInterval(() => {
      // if we aren't at last index (final sorted list)
      if (stepIndex < steps.length) {
        const currentList = steps[stepIndex];
        // update graph with current list
        setGraph(currentList);

        // retrieve elements being compared at current step
        const [i, j] = animations[stepIndex];
        if (i >= 0 && j >= 0) { // if not first call (-1, -1)
          highlightComparedElements(i, j);
        }
        stepIndex += 1; // onto next step
      } else { // if we are at last index
        clearInterval(animationInterval);
        setIsSorting(false); // done sorting
      }
    }, SELECTION_ANIMATION_INTERVAL); // delay for cascade effect
  };

  // this function highlights the elements being compared at each step
  const highlightComparedElements = (index1: number, index2: number) => {
    // query DOM for bars and highlight the ones relating to our index
    const bars = document.querySelectorAll('.bar');
    bars[index1].classList.add('red-bar');
    bars[index2].classList.add('red-bar');

    // after delay, remove the highlighted class from those
    setTimeout(() => {
      bars[index1].classList.remove('red-bar');
      bars[index2].classList.remove('red-bar');
    }, SELECTION_ANIMATION_INTERVAL);
  };  
}
