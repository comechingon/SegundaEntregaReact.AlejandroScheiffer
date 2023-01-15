import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    const navigate = useNavigate()


    return (
        <div onClick={() => navigate(`/item/${id}`)} style={{ background: 'lightblue'}} >

            <h4>{name}</h4>
            <img src={img} alt={name} style={{ width: 300}}/>
            <p>$ {price}</p>
            <Link to={`/item/${id}`}>Ver Detalle</Link> 

        </div>
    )
}

export default Item