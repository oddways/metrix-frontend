import { FiFolderPlus } from "react-icons/fi"

const Product = () => {
  return (
    <div className="w-full h-[150px] bg-blue-700 flex flex-col py-4 px-3 gap-2 text-white rounded-2xl shadow-sm shadow-blue-700">
      <div className="p-2 rounded-xl bg-gray-400 w-[50px]">
        <FiFolderPlus
          // className=" bg-gray-400 rounded-2xl"
          size={20}
          color="white"
        />
      </div>

      <div className="flex items-start justify-between lightText mt-[25px]">
        <p className="w-[50%] text-white font-light">All Products</p>
        <p className="w-[50%] text-white font-light">Active</p>
      </div>
      {/* Layer3 */}
      <div className="flex items-start justify-between">
        <p className="w-[50%] font-semibold">45</p>
        <p className="w-[50%] font-semibold">
          32 <span className="text-xs font-light text-green-600"> +24%</span>
        </p>
      </div>
    </div>
  )
}

export default Product
