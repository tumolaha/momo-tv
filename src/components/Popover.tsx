import { type } from "os"
import React from "react"
type props = {
  children: React.ReactNode,
}
const Popover = ({ children }: props) => {
  return <div className="rounded-md bg-white shadow-md dark:bg-gray-900 dark:shadow-xl  w-full h-full">{children}</div>
}

export default Popover
