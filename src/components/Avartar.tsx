import React from 'react'
type  props ={
  src: string,
  alt?: string,
}
const Avartar = ({src, alt=''} : props) => {
  return (
    <div className='h-[35px] w-[35px] flex item-center justify-center overflow-hidden bg-gray-100 rounded-full'><img className='w-full h-full object-cover' src={src} alt={alt}/></div>
  )
}

export default Avartar