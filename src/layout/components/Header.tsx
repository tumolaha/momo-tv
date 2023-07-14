import React from "react"
import Button from "../../components/Button"
import Avartar from "../../components/Avartar"
import Search from "./Search"
import { ClockCounterClockwise, DotsThree, Heart } from "@phosphor-icons/react"
import images from "src/assets/images/images"

const Header = () => {
  return (
    <div className="w-full shadow-lg h-[60px] flex items-center justify-between px-10">
      <div className="left-control flex items-center space-x-6">
        <img src="" alt="" />
        <div className="flex space-x-4">
          <div className="text-gray-950 font-semibold text-base hover:text-gray-500 cursor-pointer select-none">
            Home
          </div>
          <div className="text-gray-950 font-semibold text-base hover:text-gray-500 cursor-pointer select-none">
            Live
          </div>
          <div className="text-gray-950 font-semibold text-base  hover:text-gray-500 cursor-pointer select-none">
            Anime
          </div>
          <div className="text-gray-950 font-semibold text-base  hover:text-gray-500 cursor-pointer select-none">
            Type
          </div>
        </div>
      </div>
      <div className="right-control flex items-center space-x-5">
        <Search />
        <Button >
          <DotsThree weight="regular" size={23} />
        </Button>
        <Button>
          <Heart />
        </Button>
        <Button  >
          <ClockCounterClockwise weight="regular" size={23} />
        </Button>
        <Avartar src={images.logo} />
      </div>
    </div>
  )
}

export default Header
