import Input from "./Input";
import Tile from "./Tile";

function SAPPerformance() {
  return (
    <Tile>
      <div className="flex">
        <div className="font-bold text-gray-900 my-2 xl:text-sm">
          SAP Performance
        </div>
      </div>

      <div className="space-y-0 xl:space-y-2">
        <div className="flex flex-col w-full text-center">
          <div className="flex text-xs  w-full px-4">
            <div className="w-1/2">SAP Efficiency</div>
            <div className="w-1/2">RTF Time Loss</div>
          </div>
          <div className="flex text-xs w-full px-4">
            <div className="mx-4 w-1/2">
              <Input default="98.92%" />
            </div>
            <div className="mx-4 w-1/2">
              <Input default="13" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full text-center">
          <div className="flex text-xs  w-full px-4">
            <div className="w-1/2">SAP Yield</div>
            <div className="w-1/2">Damage Units</div>
          </div>
          <div className="flex text-xs w-full px-4">
            <div className="mx-4 w-1/2">
              <Input default="98.52%" />
            </div>
            <div className="mx-4 w-1/2">
              <Input default="1689" />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full text-center">
          <div className="flex text-xs  w-full px-4">
            <div className="w-1/2">SAP Damage</div>
            <div className="w-1/2">Freshness Gaps</div>
          </div>
          <div className="flex text-xs w-full px-4">
            <div className="mx-4 w-1/2">
              <Input default="2.09%" />
            </div>
            <div className="mx-4 w-1/2">
              <Input default="0" />
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default SAPPerformance;
