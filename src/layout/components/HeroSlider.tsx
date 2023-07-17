import React from "react"

const HeroSlider = () => {
  return (
    <div className="aspect-[22/9] w-full flex items-center justify-center bg-gray-800">
      <div className="h-[90%] flex items-center space-x-2">
        <div className="video h-full aspect-video bg-gray-700"></div>
        <ul className="control-video h-full overscroll-auto ">
          <li className="item p-2 hover:backdrop-blur h-[calc(100%/5)] aspect-video ">
            <div className="h-full w-full overflow-hidden rounded-lg  bg-black">
              <img src="" alt="" className="h-full overflow-hidden" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeroSlider
