function Tile({children}) {
    return (
        <div className="flex-col w-full xl:w-1/5 border-2 border-gray-300 rounded-lg mt-4 pb-4 px-2">
            {children}
        </div>
    )
}

export default Tile
