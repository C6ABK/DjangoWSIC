import Input from "./Input";
import YesNo from "./YesNo";
import LossData from "./LossData"
function Product({ ...props }) {
  return (
    <div className="w-full rounded-lg pb-4 pt-2 px-4 mb-4 shadow-xl bg-gray-100 border-2 border-gray-300">
      <div className="font-bold text-xl mb-2">{props.product}</div>
      <div
        className="flex flex-col 2xl:flex-row w-full space-x-0 space-y-4 
      2xl:space-y-0 2xl:space-x-2"
      >
        <div className="w-full 2xl:w-1/5 space-y-4 bg-white rounded-lg p-4 border-2 border-gray-300">
          <div className="text-xs font-bold pb-2">Process Control</div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs w-full px-4">
              <div className="w-1/2">No. of Mixes Produced</div>
              <div className="w-1/2">SAP Dough Count</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">Pressure MX3A</div>
              <div className="w-1/2">Pressure MX3B</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">Vacuum MX3A</div>
              <div className="w-1/2">Vacuum MX3B</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="text-sm font-bold pb-2 pt-4">
              Mixer Lid Seal Check & OK
            </div>
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">A</div>
              <div className="w-1/2">B</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <YesNo />
              </div>
              <div className="mx-4 w-1/2">
                <YesNo />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">Yeast Level SOR</div>
              <div className="w-1/2">Yeast Level EOR</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full 2xl:w-1/5 space-y-4 bg-white rounded-lg p-4 border-2 border-gray-300">
          <div className="text-xs font-bold pb-2">KPIs</div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">RTF Start</div>
              <div className="w-1/2">RTF Finish</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">Gap Time</div>
              <div className="w-1/2">RTF Time Loss</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">SAP Efficiency</div>
              <div className="w-1/2">SAP Yield</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">Scaling Weight</div>
              <div className="w-1/2">Standard Div</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-center">
            <div className="text-sm font-bold pb-2 pt-4">Water Levels</div>
            <div className="flex text-xs  w-full px-4">
              <div className="w-1/2">MX3A</div>
              <div className="w-1/2">MX3B</div>
            </div>
            <div className="flex text-xs w-full px-4">
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
              <div className="mx-4 w-1/2">
                <Input default="0" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full 2xl:w-3/5 bg-white rounded-lg p-4 border-2 border-gray-300">
          <div className="text-xs font-bold pb-2">Loss Data</div>
          <LossData />
        </div>
      </div>
    </div>
  );
}

export default Product;
