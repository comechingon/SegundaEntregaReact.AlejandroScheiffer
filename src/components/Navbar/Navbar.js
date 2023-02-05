import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CarContext";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {

    
    const { totalQuantity } = useContext(CartContext)
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} >
            <h1>Boom Piscinas</h1>
            <div>
                <Link to='/category/piscinas' style={{ margin: 10}}>Piscinas</Link>
                <Link to='/category/accesorios'>Accesorios</Link>
            </div>
            <CartWidget quantity={totalQuantity}/>
        </nav>
    )

}


export default Navbar