import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import Popover from "src/components/Popover"
import { useOnClickOutside } from "src/hooks/useOnClickOutside"
type Inputs = {
  search: string
}

const Search = () => {
  const [focus, setFocus] = useState(false)
  const [result, serResult] = useState("")
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    setFocus(false)
  }
  useOnClickOutside(ref, handleClickOutside)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("search")) // watch input value by passing the name of it

  return (
    <div className="relative w-[200px] rounded-full px-3 py-2 bg-gray-100 dark:bg-gray-900 flex item-center justify-center space-x-2 shadow-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center"
      >
        <input
          className="outline-none border-none bg-transparent text-xs dark:text-gray-400"
          placeholder="Search..."
          {...register("search")}
          onFocus={() => setFocus(true)}
        />
        <button type="submit">
          <MagnifyingGlass
            weight="regular"
            size={20}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>
      </form>
      {focus && (
        <div
          className="absolute top-[calc(100%+10px)] min-w-[200px] min-h-[400px] z-10"
          ref={ref}
        >
          <Popover>
            <div className="text-base font-semibold text px-3 py-2 dark:text-white">Search</div>
            <ul className="search-content p-1 pb-3">
              <li className="px-2 py-2 text-gray-700 dark:text-gray-300 text-xs font-thin flex items-center justify-start space-x-3">
                <span className="bg-blue-600 text-white flex items-center justify-center w-4 h-4 rounded-full">1</span>
                <p></p>
                mixigaming
              </li>
              <li className="px-2 py-2 text-gray-700 dark:text-gray-300 text-xs font-thin flex items-center justify-start space-x-3">
                <span className="bg-blue-600 text-white flex items-center justify-center w-4 h-4 rounded-full">1</span>
                <p></p>
                mixigaming
              </li>
              <li className="px-2 py-2 text-gray-700 dark:text-gray-300 text-xs font-thin flex items-center justify-start space-x-3">
                <span className="bg-blue-600 text-white flex items-center justify-center w-4 h-4 rounded-full">1</span>
                <p></p>
                mixigaming
              </li>
              <li className="px-2 py-2 text-gray-700 dark:text-gray-300 text-xs font-thin flex items-center justify-start space-x-3">
                <span className="bg-blue-600 text-white flex items-center justify-center w-4 h-4 rounded-full">1</span>
                <p></p>
                mixigaming
              </li>
              
            </ul>
          </Popover>
        </div>
      )}
    </div>
  )
}

export default Search
