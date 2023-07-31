import { BsCart } from "react-icons/bs"

const AbandonedCart = () => {
  return (
    <div className="w-full h-[150px] bg-white flex flex-col py-4 px-3 gap-2 text-white rounded-2xl shadow-sm shadow-black">
      <div className="p-2 rounded-xl bg-orange-300 w-[50px]">
        <BsCart
          // className=" bg-gray-400 rounded-2xl"
          size={20}
          color="white"
        />
      </div>

      <div className="flex items-start justify-between lightText mt-[25px]">
        <p className="w-[50%] text-red-600 font-light">Abandoned Cart</p>
        <p className="w-[50%] normalText font-light">Customers</p>
      </div>
      {/* Layer3 */}
      <div className="flex items-start justify-between">
        <p className="w-[50%] darkText font-semibold">
          20%{" "}
          <span className="text-xs darkText font-light text-green-600">
            {" "}
            +00.00%
          </span>{" "}
        </p>
        <p className="w-[50%] darkText font-semibold">30</p>
      </div>
    </div>
  )
}

export default AbandonedCart
