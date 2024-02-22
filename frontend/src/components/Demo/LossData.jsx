import { OngoingLossRow, ResolvedLossRow } from "./LossRow"

function LossData() {
    return (
        <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Asset
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Time of Loss
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Time Loss
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Damage
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                  >
                    Notification
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 border-2 border-gray-900">
                <OngoingLossRow 
                    asset="MX3B"
                    time="22/02/24 08:21"
                    timeLoss="30"
                    damage="150"
                />
                <OngoingLossRow 
                    asset="MX3A"
                    time="22/02/24 08:15"
                    timeLoss="60"
                    damage="300"
                />
                <ResolvedLossRow 
                    asset="Cooler"
                    time="22/02/24 07:10"
                    timeLoss="25"
                    damage="0"
                />
              </tbody>
            </table>
    )
}

export default LossData
