"use client"
import { useContext } from "react"
import GlobalContext from "@/context/GlobalContext"
import { AiFillHome } from "react-icons/ai"
import { BsBellFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const { handleToggleNav, toggleNav, isDesktop } = useContext(GlobalContext)
  return (
    <nav className="w-full z-[2] text-sm md:text-base  h-[90px] flex flex-col gap-3  bg-white p-2 md:p-4 duration-300 ease-in-out">
      <div className="w-full flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {!toggleNav && (
            <GiHamburgerMenu
              size={20}
              color="#5570F1"
              className="cursor-pointer"
              onClick={handleToggleNav}
            />
          )}
          <Link
            href={"/"}
            className="hover:text-blue-500 darkText font-semibold"
          >
            Dashboard
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 text-xs">
          {/* Dropdown */}
          {!isDesktop && (
            <select>
              <option value="Nanny's Shop">Nannys Shop</option>
            </select>
          )}
          {/* Bell Icon */}
          <BsBellFill color="#5570F1" />
          {/* User Image */}
          <Image
            src={"/images/spidey.jpg"}
            alt="userimg"
            width={20}
            height={20}
            className="w-10 rounded-xl"
          />
        </div>
      </div>

      {/* Path  Icon */}
      <div className="w-full py-1 border-t borderStroke">
        <AiFillHome size={15} color={"#5570F1"} />
      </div>
    </nav>
  )
}

export default Navbar
