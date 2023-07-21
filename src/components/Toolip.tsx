import React, { useState } from "react"
import { useHover } from "src/hooks/useHover"

enum positions {
  botom = "top-[calc(100%+5px)]",
  top = "bottom-[calc(100%+5px)]",
  left = "right-[calc(100%+5px)]",
  right = "right-[calc(100%+5px)]",
  topEnd = "top-[calc(100%+5px)] left-[calc(100%+5px)]",
  topStart = "top-[calc(100%+5px)] right-[calc(100%+5px)]",
  botomEnd = "botom-[calc(100%+5px)] left-[calc(100%+5px)]",
  botomStart = "botom-[calc(100%+5px)] right-[calc(100%+5px)]",
}
type props = {
  children: React.ReactNode
  title?: string
  position?:
    | "botom"
    | "top"
    | "left"
    | "right"
    | "topEnd"
    | "topStart"
    | "bottomEnd"
    | "bottomStart"
}
const Toolip = ({ children, title, position = "botom" }: props) => {
  const hoverRef = React.useRef(null)
  const isHover = useHover(hoverRef)
  return (
    <div className="relative flex items-center justify-center" ref={hoverRef}>
      {children}
      {isHover && (
        <div
          className={`absolute dark:text-white dark:bg-black dark:shadow-lg rounded-md top-full ${positions.botom} px-3 p-1 text-xs font-thin`}
        >
          {title}
        </div>
      )}
    </div>
  )
}

export default Toolip
