function YesNo() {
  return (
    <select
      name="yesno"
      id="yesno"
      className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
    >
      <option value="1" disabled selected></option>
      <option value="2">Yes</option>
      <option value="3">No</option>
    </select>
  );
}

export default YesNo;
