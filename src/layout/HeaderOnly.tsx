import React from "react"
import Header from "./components/Header/Header"
type props = {
  children: string | JSX.Element | JSX.Element[]
}
const HeaderOnly = ({ children }: props) => {
  return <div className="flex-col">
    <div className="header">
        <Header/>
    </div>
    <div className="content"></div>
    {children}</div>
}

export default HeaderOnly
