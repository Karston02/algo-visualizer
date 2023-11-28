import axios from 'axios';
import { SetStateAction } from 'react';

// delay between each animation step (in ms)
const QUICK_ANIMATION_INTERVAL = 100;

export function startQuickSortAnimation(setIsSorting: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setGraph: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {

  setIsSorting(true);
  axios
      .get('/quick-sort')
      .then((response) => {
      const { bars, steps } = response.data;
      // animateMergeSort(animations, bars);
      setGraph(bars);
      })
      .catch((error) => {
      console.error('Error:', error);
      });
      
      
}
