import React from "react"
import { media } from "src/assets/media/media"

const CardCategorize = () => {
  return (
    <div className="block justify-center bg-gray-500/5 p-6 rounded-sm min-w-[140px]  space-y-2 ">
      <img
        src={media.typel1}
        alt="type"
        className="object-cover rounded-md h-auto aspect-square overflow-hidden place-content-center max-h-[100px]"
      />
      <h6 className="text-white text-sm font-bold text-center">Live Show</h6>
      <p className="text-gray-600 text-xs font-light text-center">49 Lives</p>
    </div>
  )
}

export default CardCategorize
