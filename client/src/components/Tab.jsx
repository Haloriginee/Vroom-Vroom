import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const Tab = ({ tab, isFilter, isActiveTab, handleClick }) => {

  const snap = useSnapshot(state);

  const activeStyles = isFilter && isActiveTab ? { backgroundColor: snap.color, opacity: 0.5 } : { backgroundColor: "transparent", opacity: 1 };

  return (

    <div
      className={`tab-btn ${isFilter ? "rounded-full glassmorphism" : "rounded-4"}`}
      key={tab.name}
      style={activeStyles}
      onClick={handleClick}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilter ? "w-2/3 h-2/3" : "w-h11/12 h-h11/12 object-contain"}`}
      />
    </div>
  )
}

export default Tab
