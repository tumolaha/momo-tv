import React from "react"
import Header from "./components/Header/Header"
type props = {
  children: string | JSX.Element | JSX.Element[]
}
const HeaderOnly = ({ children }: props) => {
  return <div className="relative flex-col">
    <div className="header sticky top-0 z-50">
        <Header/>
    </div>
    <div className="content"></div>
    {children}</div>
}

export default HeaderOnly
