import items from "./item-list";
import Item from "./item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white-800 flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-white mb-5 shadow-lg p-3 rounded-lg bg-opacity-80 bg-black">Shopping List</h1>
      <ul className="w-full max-w-4xl">
        {items.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category}></Item>
        ))}
      </ul>
    </main>
  );
}
