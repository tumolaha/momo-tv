import Sidebar from "./components/Sidebar"
type props ={
  children: string | JSX.Element | JSX.Element[] 
}
function Defaultlayout({children}:props) {
  return (
    <div className="flex items-center">
      <div className="siderbar  w-[200px]">
        <Sidebar />
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Defaultlayout
