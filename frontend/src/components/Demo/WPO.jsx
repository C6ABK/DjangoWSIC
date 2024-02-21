import Input from "./Input";
import Tile from "./Tile";

function WPO() {
  return (
    <Tile>
      <div className="flex">
        <div className="font-bold text-gray-900 my-2 xl:text-sm">
          Workplace Organisation
        </div>
      </div>

      <div className="space-y-4 text-center">
        <div className="text-xs text-gray-500 pb-4">
          How have the previous shift left the plant?
        </div>

        <div className="space-y-0 xl:space-y-2 justify-between">
          <div className="flex flex-col w-full">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">5S Score Days</div>
              <div className="w-1/2">5S Score Nights</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="95%" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="95%" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
            <div className="text-gray-500 text-sm">Average 5S Score</div>
            <div className="text-emerald-500 font-bold text-2xl">95%</div>
        </div>
      </div>
    </Tile>
  );
}

export default WPO;
