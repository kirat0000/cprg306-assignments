"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); 

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: String(Date.now()) }]);
  };


  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white py-8">
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold mb-5">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
