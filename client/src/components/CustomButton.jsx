import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

const CustomButton = ({ title, type, handleClick, customStyles }) => {

  const generateStyle = (type) => {

    if(type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#FFF"
      }
    }

  }

  const snap = useSnapshot(state);

  return (

    <button
      className={`${customStyles} px-2 py-1.2 flex-1 rounded-md`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>

  )
}

export default CustomButton
