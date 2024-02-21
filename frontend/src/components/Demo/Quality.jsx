function Quality() {
  return (
    <div className="flex-col w-full lg:w-2/5 xl:w-1/5 border-2 border-gray-300 px-4 rounded-lg mt-4">
      <div className="text-xs font-bold text-gray-900 my-2 xl:text-sm">
        Quality
      </div>
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    White Rolls
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-emerald-500">
                    82.25%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    Fruit Teacake
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-emerald-500">
                    81.75%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    Large White Rolls
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-emerald-500">
                    80.75%
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
