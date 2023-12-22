import { Outlet } from "react-router-dom"

import NavMneu from "../components/NavMenu/NavMneu"


const Root = () => {
  return (
    <div >
      <NavMneu/>
      <Outlet/>
    </div>
  )
}

export default Root
