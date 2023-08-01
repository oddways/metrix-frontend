"use client"
import { useState, useEffect } from "react"
import { BiLogOut } from "react-icons/bi"
import { useSelector } from "react-redux"

const OrdersOverview = () => {
  const [pending, setPending] = useState(0)
  const [Completed, setCompleted] = useState(0)
  const { Orders } = useSelector((store) => store.dashboardStore)
  const allOrders = Orders.length

  // Get Pending Orders
  useEffect(() => {
    const getPending = () => {
      let pend = 0
      Orders.forEach((items) => (items.status === "Pending" ? pend++ : ""))
      setPending(pend)
    }
    getPending()
  }, [Orders])

  // Get Completed Orders
  useEffect(() => {
    const getCompleted = () => {
      let complete = 0
      Orders.forEach((items) =>
        items.status === "Completed" ? complete++ : ""
      )
      setCompleted(complete)
    }
    getCompleted()
  }, [Orders])

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
        <p className="w-[50%] font-semibold">{allOrders}</p>
        <p className="w-[50%] font-semibold">{pending}</p>
        <p className="w-[50%] font-semibold">{Completed}</p>
      </div>
    </div>
  )
}

export default OrdersOverview
