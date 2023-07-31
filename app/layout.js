import SideBar from "@/components/layouts/SideBar"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layouts/Navbar"
import { GlobalProvider } from "@/context/GlobalContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full relative flex bg-gray-100`}>
        <GlobalProvider>
          <>
            <SideBar />
            <div className="flex flex-col w-full ">
              <Navbar />
              {children}
            </div>
          </>
        </GlobalProvider>
      </body>
    </html>
  )
}
