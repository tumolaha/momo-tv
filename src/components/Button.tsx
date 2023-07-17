// import '@assets/images'
type props = {
  children: React.ReactNode
  type?: string
}
function Button({ children, type }: props) {
  let classes: string = ""
  if (type === "primary") {
    classes =
      "bg-blue-400 hover:bg-blue-300 hover:shadow-blue-300 hover:shadow-md text-white text-base font-bold px-3 py-1 min-w-[100px] rounded-full flex items-center justify-center min-h-[30px] transition duration-300 ease-in-out"
  } else if (type === "icon") {
    classes =
      "min-h-[30px] min-w-[30px] rounded-full text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-900 dark:hover:text-white dark:text-gray-300 hover:shadow-md flex items-center justify-center select-none"
  }
  return <div className={classes}>{children}</div>
}

export default Button
