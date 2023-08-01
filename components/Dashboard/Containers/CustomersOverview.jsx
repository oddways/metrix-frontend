"use client"
import { BsFillPeopleFill } from "react-icons/bs"
import { useSelector } from "react-redux"

const CustomersOverview = () => {
  const { Customers } = useSelector((store) => store.dashboardStore)
  return (
    <div className="w-full flex flex-col gap-2  bg-white shadow-black shadow-sm rounded-2xl py-4 px-3">
      {/* layer1 */}
      <div className="flex items-center justify-between">
        <BsFillPeopleFill color="#5570F1" size={25} />
        <select>
          <option value="This week" className="lightText text-xs">
            This week
          </option>
        </select>
      </div>

      {/* Layer2 */}
      <div className="flex items-start justify-between lightText mt-[25px]">
        <p className="w-[50%]">Customers</p>
        <p className="w-[50%]">Active</p>
      </div>
      {/* Layer3 */}
      <div className="flex items-start justify-between">
        <p className="w-[50%] font-semibold">
          {Customers?.customer.toLocaleString("en-US")}{" "}
          <span className="text-xs font-light text-green-600">
            {" "}
            {Customers?.customersPercentage}
          </span>
        </p>
        <p className="w-[50%] font-semibold">
          {Customers?.active.toLocaleString("en-US")}{" "}
          <span className="text-xs font-light text-green-600">
            {" "}
            {Customers?.activePercentage}
          </span>
        </p>
      </div>
    </div>
  )
}

export default CustomersOverview
