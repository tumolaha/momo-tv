import HeaderOnly from "../layout/HeaderOnly"
import Home from "../pages/Home"


const publicRoutes:object[] =[
    {link:'home',component: Home, layout: HeaderOnly },
    {link:'/',component: Home, layout: HeaderOnly },
]

const privateRoutes:object[] =[

]

export {publicRoutes, privateRoutes}