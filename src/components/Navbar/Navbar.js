import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} >
            <h1>Boom Piscinas</h1>
            <div>
                <Link to='/category/piscinas' style={{ margin: 10}}>Piscinas</Link>
                <Link to='/category/accesorios'>Accesorios</Link>
            </div>
            <CartWidget />
        </nav>
    )

}


export default Navbar