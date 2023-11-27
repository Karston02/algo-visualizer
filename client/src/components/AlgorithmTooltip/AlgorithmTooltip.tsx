import React from 'react';
import './algorithmTooltipStyles.css';

interface AlgorithmTooltipProps {
  description: string;
  averageTimeComplexity: string;
  worstCaseTimeComplexity: string;
  spaceComplexity: string;
}

const AlgorithmTooltip: React.FC<AlgorithmTooltipProps> = ({ description, averageTimeComplexity, worstCaseTimeComplexity, spaceComplexity }) => {
  return (
    <div className="algorithm-tooltip">
      <p>{description}</p>
      <p>Average Time: {averageTimeComplexity}</p>
      <p>Worst-case Time: {worstCaseTimeComplexity}</p>
      <p>Space Complexity: {spaceComplexity}</p>
    </div>
  );
};

export default AlgorithmTooltip;
