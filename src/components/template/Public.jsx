import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const Public = () => { 
    return ( 
        <div>
            <MainHeader />
            <Outlet />
        </div>
    )
}
export default Public
