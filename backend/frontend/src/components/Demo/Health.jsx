import Input from "./Input";
import Tile from "./Tile";

function Quality() {
  return (
    <Tile>
      <div className="flex justify-between">
        <div className="font-bold text-gray-900 my-2 xl:text-sm">
          Health & Safety
        </div>
      </div>

      <div className="space-y-0 xl:space-y-2">
        <div className="flex flex-col w-full text-center">
          <div className="flex text-xs  w-full px-4">
            <div className="w-1/2">Near Miss Reports</div>
            <div className="w-1/2">Hazard Reports</div>
          </div>
          <div className="flex text-xs w-full px-4">
            <div className="mx-4 w-1/2">
              <Input default="1" />
            </div>
            <div  className="mx-4 w-1/2">
              <Input default="0" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full text-center">
          <div className="flex text-xs  w-full px-4">
            <div className="w-1/2">Safety Conversations</div>
            <div className=" w-1/2">Accidents</div>
          </div>
          <div className="flex text-xs w-full px-4">
            <div className="mx-4 w-1/2">
              <Input default="3" />
            </div>
            <div  className="mx-4 w-1/2">
              <Input default="0" />
            </div>
          </div>
        </div>
        


        <div className="mt-2">
          <div className="w-full flex space-x-4 pr-4">
            <label
              htmlFor="yesno"
              className="block text-xs leading-6 text-gray-900 text-right w-5/6"
            >
              Have all investigations been completed in the health & safety
              management system?
            </label>
            <div className="mt-4 w-2/6">
              <select
                name="yesno"
                id="yesno"
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              >
                <option value="1" disabled selected></option>
                <option value="2">Yes</option>
                <option value="3">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default Quality;
