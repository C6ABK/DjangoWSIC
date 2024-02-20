import { useState, useEffect } from 'react'
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

function KeyMetrics() {
    const [productionDate, setProductionDate] = useState("")
    const currentDate = new Date().toISOString().slice(0,10)

    const subtractDate = (e) => {
        setProductionDate(currentDate)
    }

    const addDate = (e) => {
        alert(e)
    }

    useEffect(() => {
        setProductionDate(currentDate)
    }, [currentDate])

    return (
        <div>
            <div className="flex mb-4">
                <div className="flex flex-col w-5/6 text-gray-900 space-x-2 space-y-2">
                    <div className="text-xs">Production Date</div>
                    <div className="font-bold text-4xl">{productionDate}</div>
                </div>
            
                <div className="flex flex-col xl:w-1/6 space-x-2 space-y-2">
                    <div className="text-xs">Select Date</div>
                    <div class="flex">
                        <button
                            className="flex w-1/6 items-center justify-center rounded-l-md bg-blue-600  font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            onClick={subtractDate}
                        >

                            <ChevronLeftIcon className="h-8 w-8 text-white"/>
                        </button>
                        <input type="date" 
                            className="flex justify-center w-4/6 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
                            defaultValue={productionDate}
                            onChange={(e) => setProductionDate(e.target.value)}
                        />
                        <button
                            className="flex w-1/6 items-center justify-center rounded-r-md bg-blue-600  font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            onClick={addDate}
                        >

                            <ChevronRightIcon className="h-8 w-8 text-white"/>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default KeyMetrics;
