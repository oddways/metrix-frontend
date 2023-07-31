import { BiLogOut } from "react-icons/bi"

const SalesOverview = () => {
  return (
    <div className="w-full flex flex-col gap-2  bg-white shadow-black shadow-sm rounded-2xl py-4 px-3">
      {/* layer1 */}
      <div className="flex items-center justify-between">
        <BiLogOut color="#5570F1" size={25} />
        <select>
          <option value="This week" className="lightText text-xs">
            This week
          </option>
        </select>
      </div>

      {/* Layer2 */}
      <div className="flex items-start justify-between lightText mt-[25px]">
        <p className="w-[50%]">Sales</p>
        <p className="w-[50%]">Volume</p>
      </div>
      {/* Layer3 */}
      <div className="flex items-start justify-between">
        <p className="w-[50%] font-semibold">N4,000,000.00</p>
        <p className="w-[50%] font-semibold">
          450{" "}
          <span className="text-xs font-light text-green-600"> +20.00%</span>
        </p>
      </div>
    </div>
  )
}

export default SalesOverview
