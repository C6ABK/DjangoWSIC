function Structure() {
    return (
        <>
            <div className="flex flex-col border-2 border-gray-200 shadow-xl bg-gray-100 rounded-xl py-4 w-1/2 mx-auto text-center font-bold">
                <div className="flex flex-row w-full bg-gray-200 py-2 pr-4">
                    <div className="py-4 w-1/6">Tier 1</div>
                    <div className="bg-blue-500 rounded-lg py-4 w-5/6 text-white">Key Metrics</div>
                </div>

                <div className="flex flex-row w-full bg-gray-100 py-2 pr-4">
                    <div className="py-4 w-1/6">Tier 2</div>
                    <div className="flex flex-row w-5/6 text-white space-x-4">
                        <div className="bg-emerald-500 rounded-lg py-4 w-1/3">MG Product</div>
                        <div className="bg-amber-500 rounded-lg py-4 w-1/3">HP 4 Hourly KPIs</div>
                        <div className="bg-red-500 rounded-lg py-4 w-1/3">HP Hourly Count</div>
                    </div>
                </div>

                <div className="flex flex-row w-full py-2 bg-gray-200 pr-4">
                    <div className="py-4 w-1/6">Tier 3</div>
                    <div className="bg-pink-500 rounded-lg py-4 w-5/6 text-white">Loss Data</div>
                </div>
            </div>
        </>
    )
}

export default Structure
