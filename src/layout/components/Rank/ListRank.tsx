import React from "react"
import icons from "src/assets/icons/icon"
import images from "src/assets/images/images"
import { media } from "src/assets/media/media"

const ListRank = () => {
  return (
    <div className="flex-col py-5 px-5 space-y-5">
      <div className="flex text-base font-bold dark:text-white text-dark ">Rank</div>
      <div className="grid grid-cols-2 gap-2 min-h-[200px]">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 row-span-2 bg-black rounded-md shadow-lg dark:shadow-sm border-2 border-transparent hover:border-blue-500 overflow-hidden">
            <img
              src={media.bg3}
              alt="anh bia 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 bg-black rounded-md shadow-lg dark:shadow-sm border-2 border-transparent hover:border-blue-500 overflow-hidden">
            <img
              src={media.bg2}
              alt="anh bia 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 bg-black rounded-md shadow-lg dark:shadow-sm border-2 border-transparent hover:border-blue-500 overflow-hidden">
            <img
              src={media.bg1}
              alt="anh bia 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* header */}
          <div className="col-span-1 row-span-1 bg-blue-300/5 rounded-md shadow-lg dark:shadow-sm border-2 border-transparent hover:border-blue-500  overflow-hidden flex-col">
            <div
              className={`relative h-[30%] flex items-center justify-start px-3  dark:text-white`}
            >
              <p className="z-10">Hourly Diamond Ranking</p>

              <img
                src={media.bg4}
                alt="background"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            {/* user 1 */}
            <div
              className={`h-[calc(70%/3)] flex items-center justify-start px-2 space-x-3 `}
            >
              <img
                src={icons.top1}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <img
                src={images.userTop1}
                alt=""
                className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover"
              />
              <div className="flex-col">
                <h6 className="text-xs font-bold dark:text-white">Thư Ngáo</h6>
                <div className="flex space-x-1 items-center">
                  <img
                    src={icons.diamond}
                    alt="diamond"
                    className="h-[10px] w-[10px] object-cover"
                  />
                  <p className="text-blue-400 text-xs">86000</p>
                </div>
              </div>
            </div>
            {/* user 2 */}
            <div
              className={`h-[calc(70%/3)] flex items-center justify-start px-2 space-x-3 bg-gradient-to-r from-yellow-700/5`}
            >
              <img
                src={icons.top2}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <img
                src={images.userTop2}
                alt=""
                className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover"
              />
              <div className="flex-col">
                <h6 className="text-xs font-bold dark:text-white">Thanh Vi</h6>
                <div className="flex space-x-1 items-center">
                  <img
                    src={icons.diamond}
                    alt="diamond"
                    className="h-[10px] w-[10px] object-cover"
                  />
                  <p className="text-blue-400 text-xs">70000</p>
                </div>
              </div>
            </div>
            {/* user 3 */}
            <div
              className={`h-[calc(70%/3)] flex items-center justify-start px-2 space-x-3 `}
            >
              <img
                src={icons.top3}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <img
                src={images.userTop3}
                alt=""
                className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover"
              />
              <div className="flex-col">
                <h6 className="text-xs font-bold dark:text-white">Thuw Xeko</h6>
                <div className="flex space-x-1 items-center">
                  <img
                    src={icons.diamond}
                    alt="diamond"
                    className="h-[10px] w-[10px] object-cover"
                  />
                  <p className="text-blue-400 text-xs">9626</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-blue-300/5 rounded-md shadow-lg dark:shadow-sm border-2 border-transparent hover:border-blue-500  overflow-hidden">
            <div
              className={`relative h-[30%] flex items-center justify-start px-3  dark:text-white`}
            >
              <p className="z-10">Hourly Diamond Ranking</p>

              <img
                src={media.bg5}
                alt="background"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            {/* user 1 */}
            <div
              className={`h-[calc(70%/3)] flex items-center justify-start px-2 space-x-3 `}
            >
              <img
                src={icons.top1}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <img
                src={images.userTop1}
                alt=""
                className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover"
              />
              <div className="flex-col">
                <h6 className="text-xs font-bold dark:text-white">Thư Ngáo</h6>
                <div className="flex space-x-1 items-center">
                  <img
                    src={icons.diamond}
                    alt="diamond"
                    className="h-[10px] w-[10px] object-cover"
                  />
                  <p className="text-blue-400 text-xs">86000</p>
                </div>
              </div>
            </div>
            {/* user 2 */}
            <div
              className={`h-[calc(70%/3)] flex items-center justify-start px-2 space-x-3 bg-gradient-to-r from-yellow-700/5`}
            >
              <img
                src={icons.top2}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <img
                src={images.userTop2}
                alt=""
                className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover"
              />
              <div className="flex-col">
                <h6 className="text-xs font-bold dark:text-white">Thanh Vi</h6>
                <div className="flex space-x-1 items-center">
                  <img
                    src={icons.diamond}
                    alt="diamond"
                    className="h-[10px] w-[10px] object-cover"
                  />
                  <p className="text-blue-400 text-xs">70000</p>
                </div>
              </div>
            </div>
            {/* user 3 */}
            <div
              className={`h-[calc(70%/3)] flex items-center justify-start px-2 space-x-3 `}
            >
              <img
                src={icons.top3}
                alt=""
                className="h-[20px] w-[20px] object-cover"
              />
              <img
                src={images.userTop3}
                alt=""
                className="h-[30px] w-[30px] rounded-full overflow-hidden object-cover"
              />
              <div className="flex-col">
                <h6 className="text-xs font-bold dark:text-white">Thuw Xeko</h6>
                <div className="flex space-x-1 items-center">
                  <img
                    src={icons.diamond}
                    alt="diamond"
                    className="h-[10px] w-[10px] object-cover"
                  />
                  <p className="text-blue-400 text-xs">9626</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListRank
