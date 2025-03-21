import React from 'react';

interface ViewToggleProps {
  onViewChange: (view: string) => void;
  initialView: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ onViewChange, initialView }) => {
  return (
    <div>
      <button onClick={() => onViewChange('grid')} className={initialView === 'grid' ? 'active' : ''}>
        Grid View
      </button>
      <button onClick={() => onViewChange('list')} className={initialView === 'list' ? 'active' : ''}>
        List View
      </button>
    </div>
  );
};

export default ViewToggle;
