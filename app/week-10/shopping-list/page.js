"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const itemsFromService = await getItems(user.uid);
        setItems(itemsFromService);
      }
    };
    loadItems();
  }, [user]); 

  const handleAddItem = async (item) => {
    if (user) {
      const id = await addItem(user.uid, item); 
      setItems((currentItems) => [...currentItems, { ...item, id }]); 
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <main className="p-5 justify-center items-center">
        <div>
          <h1> Please try to log-in again</h1>
        </div>
      </main>
    );
  }

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
