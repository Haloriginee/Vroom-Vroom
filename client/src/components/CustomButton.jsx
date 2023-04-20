import React from 'react';
import state from '../store';
import { getContrastingColor } from '../config/helpers';
import { useSnapshot } from 'valtio';

const CustomButton = ({ title, type, handleClick, customStyles }) => {

  const generateStyle = (type) => {

    if(type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
        border: `1px solid ${snap.color}`
      }
    } else if(type === "outline") {
      return {
        color: getContrastingColor(snap.color),
        border: `1px solid ${snap.color}`
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
