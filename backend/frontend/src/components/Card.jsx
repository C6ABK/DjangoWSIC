function Card({title, children}) {
    return (
        <div className="border-b rounded-lg border-gray-200 bg-white shadow-lg px-4 py-5 sm:px-6">
            {title && <h3 className="text-xl font-semibold leading-6 text-gray-900 pb-4">{ title }</h3>}
            {children}
        </div>
    )
}

export default Card
