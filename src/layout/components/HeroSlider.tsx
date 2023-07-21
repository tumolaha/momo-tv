import {
  ArrowClockwise,
  Pause,
  Play,
  SpeakerSimpleHigh,
} from "@phosphor-icons/react"
import React, { useState } from "react"
import { media } from "src/assets/media/media"
import Toolip from "src/components/Toolip"

const HeroSlider = () => {
  const [numberActive, setNumberActive] = useState<number>(0)
  return (
    <div className="aspect-[22/9] w-full flex items-center justify-center bg-gray-800">
      <div className="h-[90%] flex items-center space-x-2">
        <div className="video h-full aspect-video bg-gray-700">
          <VideoHeroSlider />
        </div>
        <ul className="control-video h-full overscroll-auto ">
          <li className="item p-2 hover:backdrop-blur h-[calc(100%/5)] aspect-video ">
            <div
              onClick={() => setNumberActive(0)}
              className={`h-full w-full flex items-center justify-center overflow-hidden rounded-lg hover:opacity-[0.8]  bg-black ${
                numberActive === 0 && "border-white border-2 opacity-[0.8]"
              }`}
            >
              <img src={media.mg1} alt="" className="w-full overflow-hidden" />
            </div>
          </li>
          <li className="item p-2 hover:backdrop-blur h-[calc(100%/5)] aspect-video ">
            <div
              onClick={() => setNumberActive(1)}
              className={`h-full w-full flex items-center justify-center overflow-hidden rounded-lg hover:opacity-[0.8]  bg-black ${
                numberActive === 1 && "border-white border-2 opacity-[0.8]"
              }`}
            >
              <img src={media.mg2} alt="" className="w-full overflow-hidden" />
            </div>
          </li>
          <li className="item p-2 hover:backdrop-blur h-[calc(100%/5)] aspect-video ">
            <div
              onClick={() => setNumberActive(2)}
              className={`h-full w-full flex items-center justify-center overflow-hidden rounded-lg hover:opacity-[0.8]  bg-black ${
                numberActive === 2 && "border-white border-2 opacity-[0.8]"
              }`}
            >
              <img src={media.mg3} alt="" className="w-full overflow-hidden" />
            </div>
          </li>
          <li className="item p-2 hover:backdrop-blur h-[calc(100%/5)] aspect-video ">
            <div
              onClick={() => setNumberActive(3)}
              className={`h-full w-full flex items-center justify-center overflow-hidden rounded-lg hover:opacity-[0.8]  bg-black ${
                numberActive === 3 && "border-white border-2 opacity-[0.8]"
              }`}
            >
              <img src={media.mg4} alt="" className="w-full overflow-hidden" />
            </div>
          </li>
          <li className="item p-2 hover:backdrop-blur h-[calc(100%/5)] aspect-video ">
            <div
              onClick={() => setNumberActive(4)}
              className={`h-full w-full flex items-center justify-center overflow-hidden rounded-lg hover:opacity-[0.8]  bg-black ${
                numberActive === 4 && "border-white border-2 opacity-[0.8]"
              }`}
            >
              <img src={media.mg5} alt="" className="w-full overflow-hidden" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeroSlider

const VideoHeroSlider = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  return (
    <div className="relative h-full aspect-video flex items-center justify-center">
      <video className="h-full" />
      <div className="absolute  w-full h-full">
        {/* <div className="header h-[15%]"></div> */}
        <div className="content h-[90%] flex items-center justify-center">
          <div className="text-blue-500 border-blue-500 border-2 rounded-md p-3 cursor-pointer select-none">Enter channel</div>
        </div>
        <div className="control h-[10%] dark:bg-gray-950 flex justify-between items-center px-3">
          <div className="flex items-center justify-start  space-x-3">
            {isPlaying ? (
              <Toolip title="play" position="botom">
                <Play size={20} weight="regular" className="dark:text-white" />
              </Toolip>
            ) : (
              <Toolip title="pause" position="botom">
                <Pause size={20} weight="regular" className="dark:text-white" />
              </Toolip>
            )}
            <Toolip title="reply" position="botom">
              <ArrowClockwise
                size={20}
                weight="regular"
                className="dark:text-white"
              />
            </Toolip>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center  space-x-2">
              <SpeakerSimpleHigh size={20} className="dark:text-white" />
              <input
                type="range"
                min="1"
                max="4"
                step="0.01"
                className="bg-gray-800 hover:bg-gray-800"
              />
            </div>

            <ButtonQuality />
            <div className="flex items-center justify-center rounded-full dark:text-white dark:bg-yellow-600 text-[0.7rem] px-2 py-[2px] cursor-pointer select-none">
              Enter channel {`>>`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ButtonQuality = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(0)
  return (
    <div className="relative flex items-center justify-center dark:text-white rounded-full dark:bg-gray-800 text-[0.7rem] px-2 py-[2px] select-none cursor-pointer">
      <div onClick={() => setOpen((prev) => !prev)}> 480p </div>

      {open && (
        <div className="absolute bottom-[calc(100%+5px)] dark:bg-gray-900 rounded-xl p-2">
          <ul>
            <li
              className={`text-xs px-4 py-1 dark:hover:bg-gray-500 rounded-md flex items-center justify-center ${
                select === 0 ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setSelect(0)}
            >
              1080p
            </li>
            <li
              className={`text-xs px-4 py-1 dark:hover:bg-gray-500 rounded-md flex items-center justify-center ${
                select === 1 ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setSelect(1)}
            >
              780p
            </li>
            <li
              className={`text-xs px-4 py-1 dark:hover:bg-gray-500 rounded-md flex items-center justify-center ${
                select === 2 ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setSelect(2)}
            >
              480p
            </li>
            <li
              className={`text-xs px-4 py-1 dark:hover:bg-gray-500 rounded-md flex items-center justify-center ${
                select === 3 ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setSelect(3)}
            >
              360p
            </li>
            <li
              className={`text-xs px-4 py-1 dark:hover:bg-gray-500 rounded-md flex items-center justify-center ${
                select === 4 ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setSelect(4)}
            >
              148p
            </li>
            <li
              className={`text-xs px-4 py-1 dark:hover:bg-gray-500 rounded-md flex items-center justify-center ${
                select === 5 ? "text-blue-500" : "text-white"
              }`}
              onClick={() => setSelect(5)}
            >
              auto
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
