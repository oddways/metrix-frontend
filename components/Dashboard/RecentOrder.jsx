"use client"
import Image from "next/image"
import { useSelector } from "react-redux"

const RecentOrder = () => {
  const { Orders } = useSelector((store) => store.dashboardStore)
  return (
    <div className="h-[645px] flex flex-col gap-2 bg-white rounded-2xl shadow-sm shadow-black py-2 px-4">
      <div className="w-full  ">
        <div>
          <h1 className="darkText font-semibold">Recent Order</h1>
        </div>

        {Orders?.map((order) => (
          <div
            key={order.productID}
            className="flex items-center justify-between  border-b border-gray-200 mb-2 mt-2 pb-2"
          >
            <section className="flex gap-2 items-center">
              <div className=" w-[40%] h-full relative z-10">
                <Image
                  src={"/images/iphone13.jpg"}
                  alt="iphone"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="normalText">{order.productName}</p>
                <p className="darkText">
                  N{order.amount} x {order.quantity}
                </p>
              </div>
            </section>
            <section className=" w-[100px] flex flex-col items-start gap-2">
              <p className="text-xs">{order.orderDate}</p>
              <p
                className={`${
                  order.status === "Pending"
                    ? "bg-red-400 text-red-600"
                    : "bg-green-400 text-green-600 "
                } px-3 py-1 text-xs rounded-2xl`}
              >
                {order.status}
              </p>
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentOrder
