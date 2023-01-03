import { createBrowserRouter } from "react-router-dom"
import App from "../components/App"
import Error404  from "../components/pages/error404"
import Products from "../components/pages/Products"
import Public from "../components/template/Public"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Public />,
        errorElement: <Error404 />, 
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "/productos",
                element: <Products />
            }
        ]
    },
])
export default router