import { MagnifyingGlass } from "@phosphor-icons/react"

const Search = () => {
  return (
    <div className="w-[200px] rounded-full px-3 py-1 bg-gray-100 flex item-center justify-center space-x-2 shadow-md">
      <MagnifyingGlass weight="regular" size={24} className="text-gray-500"/>
      <input
        className="outline-none border-none bg-transparent text-xs"
        placeholder="Search..."
      />
    </div>
  )
}

export default Search
