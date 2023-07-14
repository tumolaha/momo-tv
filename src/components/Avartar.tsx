import React from 'react'
type  props ={
  src: string,
  alt?: string,
}
const Avartar = ({src, alt=''} : props) => {
  return (
    <div className='h-[40px] w-[40px] flex item-center justify-center overflow-hidden bg-gray-100 rounded-full'><img className='w-full h-full' src={src} alt={alt}/></div>
  )
}

export default Avartar