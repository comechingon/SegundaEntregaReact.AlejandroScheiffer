import { useState } from "react"
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, price, category, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnadd = (qty) => {
        
        const productToAdd = {
            id, name, price, qty
        }

        setQuantity(qty)

    }


    return(
        <div>
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name} style={{ width: 200}}/>
            <p>$ {price}</p>
            <p>Descripcion: {description}</p>
            {
                quantity > 0 ? (
                    <Link>Terminar compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnadd} />
                )
            }
           
        </div>

    )
}


export default ItemDetail