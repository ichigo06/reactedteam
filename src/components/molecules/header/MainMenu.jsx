import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <Link to="/ofertas">Ofertas</Link>
                </li>
                <li>
                    <Link to="/contactos">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}
export default MainMenu