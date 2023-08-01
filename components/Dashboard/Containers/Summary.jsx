import Image from "next/image"

const Summary = () => {
  return (
    <div className="w-full h-[320px] flex flex-col py-4 px-3 gap-2 bg-white rounded-2xl shadow-sm shadow-black">
      {/* Top */}
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-2">
          <h1>Summary</h1>
          <select className="bg-gray-200 text-blue-700 px-2 py-1">
            <option value="">Sales</option>
          </select>
        </section>
        <select className="darkText">
          <option value="">Last 7 Days</option>
        </select>
      </div>

      {/* Bottom */}
      <div className="mt-2 w-full h-full flex items-center justify-center">
        <div className="w-full">
          <Image
            src={"/images/summary.jpg"}
            alt="marketing"
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Summary
