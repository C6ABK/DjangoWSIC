import Input from "./Input";

function Safety() {
  return (
    <div className="flex-col w-full border-2 border-gray-300 px-4 rounded-lg mt-4">
      <div className="text-xs font-bold text-gray-900 my-2 xl:text-sm">
        Health & Safety
      </div>
      <div className="flex flex-col xl:flex-row text-center py-2 xl:space-x-10 space-x-0">
        <Input name="Near Miss Reports" default="0" />
        <Input name="Hazard Reports" default="0" />
        <Input name="Safety Conversations" default="0" />
        <Input name="Accidents" default="0" />
        <div>
          <div className="w-full flex space-x-4 pr-4">
            <label
              htmlFor="site"
              className="block text-xs leading-6 text-gray-900 text-right w-5/6"
            >
              Have all investigations been completed in the H&S Management
              system?
            </label>
            <div className="mt-2 w-2/6">
              <select
                name="yesno"
                id="yesno"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              >
                <option value="1" disabled selected></option>
                <option value="2">Yes</option>
                <option value="3">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
