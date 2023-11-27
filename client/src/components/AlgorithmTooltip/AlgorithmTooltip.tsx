import React from 'react';
import './algorithmTooltipStyles.css';

interface AlgorithmTooltipProps {
  description: string;
}

const AlgorithmTooltip: React.FC<AlgorithmTooltipProps> = ({ description }) => {
  return <div className="algorithm-tooltip">{description}</div>;
};

export default AlgorithmTooltip;
