import React from "react"
import OrdersOverview from "./Containers/OrdersOverview"
import SalesOverview from "./Containers/SalesOverview"
import CustomersOverview from "./Containers/CustomersOverview"
import Container from "./Containers/MarketingandSummary/Container"
import RecentOrder from "./RecentOrder"

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top */}
      <div className="w-full h-fit flex gap-2 md:px-5 flex-col lg:flex-row">
        <div className="w-full flex flex-col gap-2 md:flex-row items-center justify-evenly">
          <SalesOverview />
          <CustomersOverview />
        </div>
        <OrdersOverview />
      </div>
      {/* bottom */}
      <div className="w-full mt-[20px] h-fit flex flex-col lg:flex-row gap-2 justify-between bg-gray-100">
        {/* left */}
        <div className="w-full lg:w-[70%]">
          <Container />
        </div>
        {/* right */}
        <div className="w-full lg:w-[35%] md:px-4">
          <RecentOrder />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
