function Input({...props}) {
  return (
    <div className="h-full items-bottom">
      <label
        htmlFor="name"
        className="block text-xs leading-6 text-gray-900"
      >
        {props.name}
      </label>
      <div className="relative mt-2 align-bottom">
        <input
          type="text"
          name="name"
          id="name"
          className="peer text-center font-bold block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-lg sm:leading-6"
          defaultValue={props.default}
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-blue-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Input;
