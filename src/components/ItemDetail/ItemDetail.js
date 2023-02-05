import { useState, useContext} from "react"
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CarContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, price, category, stock, description }) => {
    const [quantity, setQuantity] = useState(0)

    const{ addItem } = useContext(CartContext)

    const handleOnadd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))

        addItem({id, name, quantity, price})
        
        

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