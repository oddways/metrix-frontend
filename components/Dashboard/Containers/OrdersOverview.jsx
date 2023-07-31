import { BiLogOut } from "react-icons/bi"

const OrdersOverview = () => {
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
        <p className="w-[50%]">All Orders</p>
        <p className="w-[50%]">Pending</p>
        <p className="w-[50%]">Completed</p>
      </div>
      {/* Layer3 */}
      <div className="flex items-start justify-between">
        <p className="w-[50%] font-semibold">450</p>
        <p className="w-[50%] font-semibold">5</p>
        <p className="w-[50%] font-semibold">455</p>
      </div>
    </div>
  )
}

export default OrdersOverview
