import React from 'react';
import './temporaryWIPStyles.css';

interface TemporaryWIPProps {
  sortingName: string;
  note: string;
  onClose: () => void;
}

const TemporaryWIP: React.FC<TemporaryWIPProps> = ({ sortingName, note, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>Unfortunately, {sortingName} is currently under construction.</p>
        <p>{note}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TemporaryWIP;
