import { Switch } from "@headlessui/react"
import {
  CloudMoon,
  Desktop,
  GlobeHemisphereEast,
  Heart,
} from "@phosphor-icons/react"
import { useRef, useState } from "react"
import { useOnClickOutside } from "src/hooks/useOnClickOutside"

type props = {
  children: React.ReactNode
}
const Menu = ({ children }: props) => {
  const [open, setOpen] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    setOpen(false)
  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log("clicked inside")
  }

  useOnClickOutside(ref, handleClickOutside)
  return (
    <div className="relative" ref={ref}>
      <div onClick={() => setOpen((prev) => !prev)}>{children}</div>

      {open && (
        <div
          className="bg-white dark:bg-black absolute right-0 top-full shadow-xl z-10 rounded-md p-3 min-w-[220px]"
          
        >
          <ul>
            <li className="rounded-md text-gray-400 hover:bg-blue-400 hover:text-white shadow-sm flex items-center justify-between px-2 py-2 space-x-2">
              <div className="flex items-center justify-start space-x-3">
                <GlobeHemisphereEast size={19} />
                <p className="text-xs text-center">Languege</p>
              </div>
              <div className="text-xs text-gray-300 dark:text-gray-500 hover:text-gray-300">
                English
              </div>
            </li>
            <li className="rounded-md text-gray-400 hover:bg-blue-400 hover:text-white shadow-sm flex items-center justify-between px-2 py-2 space-x-2">
              <div className="flex items-center justify-start space-x-3">
                <CloudMoon size={19} />
                <p className="text-xs text-center">Dark mode</p>
              </div>
              <div>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-teal-700" : "bg-teal-500"}
          relative inline-flex h-[23px] w-[43px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
            </li>
            <li className="rounded-md text-gray-400 hover:bg-blue-400 hover:text-white shadow-sm flex items-center justify-between px-2 py-2 space-x-2">
              <div className="flex items-center justify-start space-x-3">
                <Desktop size={19} />
                <p className="text-xs text-center">Add to desktop</p>
              </div>
            </li>
            <li className="rounded-md text-gray-400 hover:bg-blue-400 hover:text-white shadow-sm flex items-center justify-between px-2 py-2 space-x-2">
              <div className="flex items-center justify-start space-x-3 ">
                <Heart size={19} />
                <p className="text-xs text-center">My Following</p>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Menu
