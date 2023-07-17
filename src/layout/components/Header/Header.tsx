import React from "react"
import Button from "../../../components/Button"
import Avartar from "../../../components/Avartar"
import Search from "./Search"
import { ClockCounterClockwise, DotsThree, Heart } from "@phosphor-icons/react"
import images from "src/assets/images/images"
import Menu from "src/components/Menu"
import Following from "./Following"
import History from "./History"

const Header = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-950  shadow-lg dark:shadow-xl h-[60px] flex items-center justify-between px-10">
      <div className="left-control flex items-center space-x-6">
        <img src={images.logo} alt="logo" className="h-[40px] w-auto" />
        <div className="flex space-x-4">
          <div className="text-gray-950 dark:text-gray-400 font-semibold text-base hover:text-gray-500 dark:hover:text-white cursor-pointer select-none">
            Home
          </div>
          <div className="text-gray-950 dark:text-gray-400 font-semibold text-base hover:text-gray-500 dark:hover:text-white cursor-pointer select-none">
            Live
          </div>
          <div className="text-gray-950 dark:text-gray-400 font-semibold text-base  hover:text-gray-500 dark:hover:text-white cursor-pointer select-none">
            Anime
          </div>
          <div className="text-gray-950 dark:text-gray-400 font-semibold text-base  hover:text-gray-500 dark:hover:text-white cursor-pointer select-none">
            Type
          </div>
        </div>
      </div>
      <div className="right-control flex items-center space-x-5">
        <Search />
        <Menu>
          <Button type="icon">
            <DotsThree weight="regular" size={23} />
          </Button>
        </Menu>
        <Following>
          <Button type="icon">
            <Heart weight="regular" size={19} />
          </Button>
        </Following>
        <History>
          <Button type="icon">
            <ClockCounterClockwise weight="regular" size={20} />
          </Button>
        </History>

        <Avartar src={images.avartar} />
      </div>
    </div>
  )
}

export default Header
