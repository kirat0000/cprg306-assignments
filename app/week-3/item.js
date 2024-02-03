const Item = ({name,quantity,category}) => {
    return(<li className="p-2 m-4 bg-slate-900 max-w-sm">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="text-sm">Buy {quantity} in {category}</div>
    </li >)
}
export default Item;