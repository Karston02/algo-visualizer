import axios from 'axios';
import { SetStateAction } from 'react';

// delay between each animation step (in ms)
const QUICK_ANIMATION_INTERVAL = 100;

export function startQuickSortAnimation(setIsSorting: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setGraph: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {

    setIsSorting(true);
    axios
        .get('/quick-sort')
        .then((response) => {
        const { steps, animations } = response.data;
        animateQuickSort(steps, animations);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      
      const animateQuickSort = (steps: string | any[], animations: [number, number][]) => {
        let stepIndex = 0;
        const animationInterval = setInterval(() => {
          if (stepIndex < steps.length) {
            const currentList = steps[stepIndex];
            setGraph(currentList);
            const [i, j] = animations[stepIndex];
            if (i >= 0 && j >= 0) {
              highlightComparedElements(i, j);
            }
            stepIndex += 1;
          } else {
            clearInterval(animationInterval);
            setIsSorting(false);
          }
        }, QUICK_ANIMATION_INTERVAL);
      }
      const highlightComparedElements = (index1: number, index2: number) => {
        const bars = document.querySelectorAll('.bar');
        bars[index1].classList.add('red-bar');
        bars[index2].classList.add('red-bar');
        setTimeout(() => {
          bars[index1].classList.remove('red-bar');
          bars[index2].classList.remove('red-bar');
        }, QUICK_ANIMATION_INTERVAL);
      }
}
