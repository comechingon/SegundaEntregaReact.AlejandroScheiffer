import { useContext } from "react"
import { CartContext } from "../../context/CarContext"
import CartList from "../CartList/CartList"

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <h1>Ésta es tú compra hasta el momento</h1>
            <CartList cart={cart} />
        </div>
    )
}

export default Cart