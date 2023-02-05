import { useContext } from "react"
import { CartContext } from "../../context/CarContext"

const ItemCart = ({ id, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)


    return (
        <article style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightblue'}}>
            <h3>{name}</h3>
            <h4>cantidad {quantity}</h4>
            <h4>precio unidad: ${price}</h4>
            <h4>subtotal: ${price * quantity}</h4>
            <button className="Option" style={{ backgroundColor: 'deepskyblue'}} onClick={() => removeItem(id)}>Remove</button>

        </article>
    )
}

export default ItemCart