import { GoDotFill } from "react-icons/go"
import Image from "next/image"

const Marketing = () => {
  return (
    <div className="w-full h-[320px] flex flex-col py-4 px-3 gap-2 bg-white rounded-2xl shadow-sm shadow-black">
      {/* Top */}
      <section className="flex items-center justify-between">
        <p className="darkText">Marketing</p>
        <select>
          <option value="This week" className="lightText text-xs">
            This week
          </option>
        </select>
      </section>

      {/* Middle */}
      <section className="flex justify-between text-xs mt-2">
        <div className="flex gap-1 items-center">
          <GoDotFill color="5570F1" size={20} />
          <p>Acquisition</p>
        </div>
        <div className="flex gap-1 items-center">
          <GoDotFill color="5570F1" size={20} />
          <p>Purchase</p>
        </div>
        <div className="flex gap-1 items-center">
          <GoDotFill color="5570F1" size={20} />
          <p>Retention</p>
        </div>
      </section>

      {/* Bottom */}
      <section className="mt-2 w-full flex items-center justify-center">
        <div className="ml-[30px]">
          <Image
            src={"/images/marketing.jpg"}
            alt="marketing"
            width={200}
            height={200}
          />
        </div>
      </section>
    </div>
  )
}

export default Marketing
