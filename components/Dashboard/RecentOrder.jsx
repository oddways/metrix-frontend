import Image from "next/image"

const RecentOrder = () => {
  return (
    <div className="h-[645px] flex flex-col gap-2 bg-white rounded-2xl shadow-sm shadow-black py-2 px-4">
      <div className="w-full  border-b border-gray-200 mb-2 mt-2 pb-2">
        <div>
          <h1 className="darkText font-semibold">Recent Order</h1>
        </div>

        <div className="flex items-center justify-between mt-2">
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
            <div className="flex flex-col gap-2">
              <p className="normalText">iPhone 13</p>
              <p className="darkText">N730,000.00 x 1</p>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <p className="text-xs">12 Sept 2022</p>
            <p className="px-3 py-1 text-xs bg-red-400 text-red-600 rounded-2xl">
              Pending
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RecentOrder
