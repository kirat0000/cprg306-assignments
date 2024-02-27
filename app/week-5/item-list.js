"use client";
import React, { useState } from 'react';
import Item from './item'; 
import itemsData from './items.json'; 

function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = itemsData.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    
    <div>
      <button className={`${sortBy === 'name' ? 'bg-gray-200' : 'bg-white'} text-gray-800 font-medium py-2 px-4 rounded border border-gray-400 hover:bg-gray-300`}
         onClick={() => setSortBy('name')}>Sort by Name
      </button>
      <button className={`${sortBy === 'category' ? 'bg-gray-200' : 'bg-white'} text-gray-800 font-medium py-2 px-4 rounded border border-gray-400 hover:bg-gray-300 `}
         onClick={() => setSortBy('category')}>Sort by Category
      </button>

      <div>
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;   

