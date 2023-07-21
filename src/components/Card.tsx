import React, { useRef } from "react"
import { media } from "src/assets/media/media"
import Avartar from "./Avartar"
import { useHover } from "src/hooks/useHover"
import { Play, Users } from "@phosphor-icons/react"

const Card = () => {
  const cardRef =  useRef(null)
  const isHover =  useHover(cardRef)
  return (
    <div className="flex-col p-1 rounded-md bg-gray-950 w-full min-h-[200px] pb-4 overflow-hidden">
      <div className="relative w-full aspect-video flex items-center justify-center bg-black" ref={cardRef}>
        <img src={media.ab1} alt="photobia " />
        <div className="absolute left-3 top-3 bg-gray-600 rounded-full text-[0.6rem] text-white px-2 py-1">League of Legends</div>
        <div className="absolute h-full w-full hover:bg-black/50 z-1 flex items-center justify-center">
          {isHover && <button><Play size={32} weight="fill" className="text-blue-500 shadow-l"/></button>}
        </div>
      </div>
      <div className="p-2 flex items-end justify-between">

        <div className="flex space-x-4 items-center justify-center "
        >
          <div className="h-[55px] w-[55px] rounded-full overflow-hidden">
            <img src={media.ab1} alt=""  className="h-full w-full object-cover"/>
          </div>
          <div className="flex-col ">
            <div className="text-white text-xs font-bold mb-1">em be</div>
            <div className="text-gray-500 text-[0.7rem] font-light mb-2">good bading</div>
            <div className="text-white text-xs font-bold flex space-x-2 h-[20px]">
              <div className=" rounded-sm bg-gray-600 text-[0.7rem] font-thin px-[5px] py-[2px] flex items-center justify-center">sing</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end text-[0.6rem] text-gray-500 font-thin space-x-1"><Users size={12} weight="regular" /> <p>532</p></div>
      </div>
    </div>
  )
}

export default Card
