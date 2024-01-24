function FormSubmitButton({...props}) {
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

export default FormSubmitButton
