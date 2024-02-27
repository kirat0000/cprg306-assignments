
import React from 'react';
import ItemList from './item-list'; 

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-white mb-5 shadow-lg p-3 rounded-lg bg-opacity-80 bg-black">Shopping List</h1>
      <div className="w-full max-w-4xl">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;

