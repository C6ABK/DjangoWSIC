export function SubmitButton({...props}) {
    return (
        <div className="pt-4">
            <button
                type={props.type}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                {props.text}
            </button>
        </div>
    )
}

// TextBoxR = REQUIRED
export function TextBoxR({...props}) {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
                {props.name}
            </label>
            <div className="mt-2">
                <input
                    type={props.type}
                    name={props.id}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}

// TextBoxR = NOT REQUIRED
export function TextBox({...props}) {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
                {props.name}
            </label>
            <div className="mt-2">
                <input
                    type={props.type}
                    name={props.id}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}

export function Select({...props}) {
    return (
        <div className="w-full">
            <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
                {props.name}
            </label>
            <div className="mt-2">
                <select
                    type={props.type}
                    name={props.id}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    )
}
  