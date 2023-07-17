
import React, { useState } from "react"
import Popover from "src/components/Popover"

type props = {
  children: React.ReactNode
}
const Following = ({ children }: props) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="">{children}</div>
      {hover && (
        <div className="absolute top-full right-0 min-w-[400px] min-h-[500px] ">
          <Popover>
            <ul className="p-2">
              <li className="flex items-center justify-start p-3 text-base font-semibold text-black dark:text-white">
                My Following
              </li>
              <li className="content flex items-center justify-center text-black dark:text-white py-10 text-sm font-thin">
                Oops! Nothing to see here
              </li>
            </ul>
          </Popover>
        </div>
      )}
    </div>
  )
}

export default Following
