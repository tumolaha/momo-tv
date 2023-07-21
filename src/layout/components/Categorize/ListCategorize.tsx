import React from "react"
import CardCategorize from "./CardCategorize"

const ListCategorize = () => {
  return (
    <div className="flex-col">
      <div className=" flex items-center p-5 space-x-5">
        <div className="flex items-center justify-start space-x-3">
          <h6 className="dark:text-white font-bold text-xl">Top games</h6>
          <p className="dark:text-gray-500 text-sm font-light">View All {">"}</p>
        </div>
        <div className="flex space-x-3 items-center justify-start">
          <div className="px-3 py-[2px] dark:bg-gray-700/5 hover:border-blue-500 hover:text-blue-500 text-[0.7rem] font-bold dark:text-white border-gray-700 border-2 rounded-md cursor-pointer">
            All
          </div>
          <div className="px-3 py-[2px] dark:bg-gray-700/5 hover:border-blue-500 hover:text-blue-500 text-[0.7rem] font-bold dark:text-white border-gray-700 border-2 rounded-md cursor-pointer">
            Mobile game
          </div>
          <div className="px-3 py-[2px] dark:bg-gray-700/5 hover:border-blue-500 hover:text-blue-500 text-[0.7rem] font-bold dark:text-white border-gray-700 border-2 rounded-md cursor-pointer">
            Pc game
          </div>
          <div className="px-3 py-[2px] dark:bg-gray-700/5 hover:border-blue-500 hover:text-blue-500 text-[0.7rem] font-bold dark:text-white border-gray-700 border-2 rounded-md cursor-pointer">
            Orther
          </div>
        </div>
      </div>
      <div className=" flex space-x-4 items-center p-5">
        <CardCategorize />
        <CardCategorize />
        <CardCategorize />
        <CardCategorize />
        <CardCategorize />
      </div>
    </div>
  )
}

export default ListCategorize
