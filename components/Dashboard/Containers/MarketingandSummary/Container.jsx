import React from "react"
import Summary from "../Summary"
import Marketing from "../Marketing"
import Product from "../Product"
import AbandonedCart from "../AbandonedCart"

const Container = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:px-4 ">
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
        <section className="w-full">
          <Marketing />
        </section>
        <section className="w-full flex flex-col gap-2 justify-between">
          <Product />
          <AbandonedCart />
        </section>
      </div>
      <div>
        <Summary />
      </div>
    </div>
  )
}

export default Container
