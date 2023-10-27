import axios from 'axios';
import { SetStateAction } from 'react';

// delay between each animation step (in ms)


export function startInsertionSortAnimation(setIsSorting: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setGraph: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {

    setIsSorting(true);
    axios
        .get('/insertion-sort')
        .then((response) => {
        const { steps, animations } = response.data;
        animateInsertionSort(steps, animations);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      
      const animateInsertionSort = (steps: string | any[], animations: [number, number][]) => {
      }   
}
