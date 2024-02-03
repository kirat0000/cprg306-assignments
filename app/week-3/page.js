import items from "./item-list";
import Item from "./item";
export default function Page() {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex flex-col">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <ul>

        {items.map((iteem,index)=>(
            <Item key={index} name={iteem.name} quantity={iteem.quantity} category={iteem.category}></Item>
        ))}
        </ul>
      </main>
    );
  }