import React from 'react';
import './temporaryWIPStyles.css';

interface temporaryWIPProps {
  sortingName: string;
  note: string;
}

const temporaryWIP: React.FC<temporaryWIPProps> = ({ sortingName, note }) => {
  return (
    <div className="popup-container">
      <p>Unfortunately, {sortingName} is currently under construction.</p>
      <p>{note}</p>
    </div>
  );
};

export default temporaryWIP;
