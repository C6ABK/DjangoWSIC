import Input from './Input'

function HealthAndSafety() {
    return (
        <div className="flex-col">
            <div className="text-xs text-gray-900 my-2">Health & Safety</div>
            <div className="flex justify-between text-center">
                <div>
                    <Input name="Near Miss Reports" default="0" />
                </div>
                <div>
                    <Input name="Hazard Reports" default="0" />
                </div>
                <div>
                    <Input name="Safety Conversations" default="0" />
                </div>
                <div>
                    <Input name="Accidents" default="0" />
                </div>
                <div>Have all investigations been completed in the H&S Management system?
                    Shorten this and add tooltip, Change format into tiles?
                </div>
            </div>
        </div>
    )
}

export default HealthAndSafety
