import { Fragment } from "react"
import "./App.css"
import {BrowserRouter , Routes, Route, Navigate  } from "react-router-dom"
import { publicRoutes } from "./router/router"
import HeaderOnly from "./layout/HeaderOnly"
import Defaultlayout from "./layout/DefaultLayout"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route: any, index: number) => {
            const Page = route.component
            let Layout: any = HeaderOnly
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            } else {
              Layout = Defaultlayout
            }
            return (
              <Route
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                path={route.link}
              />
            )
          })}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
