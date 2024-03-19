import React from 'react';


const Item = ({ name, quantity, category, onSelect }) => {
  return (
    
    <li className="border-2 border-gray-300 m-2 p-2 rounded-lg cursor-pointer" onClick={() => onSelect(name)}>
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-700">{quantity} pcs</div>
      <div className="text-sm text-gray-500">{category}</div>
    </li>
  );
}

export default Item;
