
const Item = ({name,quantity,category}) => {
    return(<li className="p-4 m-2 bg-white bg-opacity-90 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex justify-between items-center">
    <div>
        <h1 className="text-xl font-bold text-teal-600">{name}</h1>
        <div className="text-sm text-gray-700">Buy {quantity} in {category}</div>
        </div>
    </li >)
    
}
export default Item;
