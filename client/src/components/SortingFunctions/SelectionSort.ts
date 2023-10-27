import axios from 'axios';
import { SetStateAction } from 'react';

// delay between each animation step (in ms)


export function startSelectionSortAnimation(setIsSorting: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setGraph: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {

    setIsSorting(true);
    axios
        .get('/selection-sort')
        .then((response) => {
        const { steps, animations } = response.data;
        animateSelectionSort(steps, animations);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      
      const animateSelectionSort = (steps: string | any[], animations: [number, number][]) => {
      }   
}
