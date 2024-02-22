export function OngoingLossRow({...props}) {
    return (
        <tr className="bg-amber-500 text-gray-900">
                  <td className="whitespace-nowrap px-3 py-4 text-xs ">
                    {props.asset}
                  </td>
                  <td className="whitespace-wrap px-3 py-4 text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    {props.time}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    {props.timeLoss}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    {props.damage}
                  </td>
                  <td className="whitespace-wrap px-3 py-4 text-xs">
                    Incidunt, adipisci doloribus odio, alias dolorum deleniti.
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-bold text-xs">
                    Ongoing
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    12345678
                  </td>
                </tr>
    )
}

export function ResolvedLossRow({...props}) {
    return (
        <tr className="bg-emerald-500 text-gray-900">
                  <td className="whitespace-nowrap px-3 py-4 text-xs ">
                    {props.asset}
                  </td>
                  <td className="whitespace-wrap px-3 py-4 text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    {props.time}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    {props.timeLoss}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    {props.damage}
                  </td>
                  <td className="whitespace-wrap px-3 py-4 text-xs">
                    Incidunt, adipisci doloribus odio, alias dolorum deleniti.
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 font-bold text-xs">
                    Ongoing
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-xs">
                    12345678
                  </td>
                </tr>
    )
}
