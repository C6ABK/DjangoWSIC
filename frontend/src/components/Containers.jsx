export function ThinContainer({children}) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl py-4">
                {children}
            </div>
        </div>
    )
}

export function WideContainer({children}) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}
  