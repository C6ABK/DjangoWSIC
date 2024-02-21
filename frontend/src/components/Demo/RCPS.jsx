import {
    PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { NavLink}  from 'react-router-dom'

function RCPS() {
  return (
    <div className="flex-col w-full lg:w-2/5 xl:w-1/5 border-2 border-gray-300 pl-4 rounded-lg mt-4">
        <div className="flex justify-between">
            <div className="text-xs font-bold text-gray-900 my-2 xl:text-sm">
                Root Cause Problem Solving
            </div>
            <NavLink
                to="/RCPS"
                className="flex items-center justify-center p-2 m-2 rounded-md bg-blue-600  font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >

                <PencilSquareIcon className="h-3 w-3 text-white"/>
            </NavLink>
        </div>
      
    </div>
  );
}

export default RCPS;
