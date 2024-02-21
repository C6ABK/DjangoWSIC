import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Tile from "./Tile";

function SAPPerformance() {
  return (
    <Tile>
      <div className="flex justify-between">
        <div className="font-bold text-gray-900 my-2 xl:text-sm">
          SAP Performance
        </div>
        <NavLink
          to="/dashboard"
          className="flex items-center justify-center p-2 m-2 rounded-md bg-blue-600  font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PencilSquareIcon className="h-3 w-3 text-white" />
        </NavLink>
      </div>
      <div></div>
    </Tile>
  );
}

export default SAPPerformance;
