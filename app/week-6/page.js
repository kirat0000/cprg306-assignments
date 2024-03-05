"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, { ...newItem, id: String(Date.now()) }]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-white mb-5 shadow-lg p-3 rounded-lg bg-opacity-80 bg-black">Shopping List</h1>
      <div className="w-full max-w-4xl">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;


