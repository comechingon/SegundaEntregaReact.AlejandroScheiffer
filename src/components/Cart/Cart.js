import { addDoc, getFirestore } from 'firebase/firestore'
import { useContext } from "react"
import { CartContext } from "../../context/CarContext"
import CartList from "../CartList/CartList"
import React from "react"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CarContext"
import ItemCart from "../ItemCart/ItemCart"





const Cart = () => {
    const { cart, totalPrice } = useCartContext();
   
    const order = {
        buyer: {
            name: 'Romeo',
            email: 'romeo@gmail.com',
            phone: '22222',
            adress: 'lacosta'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id))
    }
   
   if (cart.length === 0) {
    return (
        <>
           <p>No hay productos en el carrito</p>
           <Link to='/'>Ir de compras</Link>
        </>
    );
   }

   return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        total: {totalPrice()}
      </p>
      <button onClick={handleClick}>Emitir compra</button>
    
    </>
   )
   
            
       
    
}




export default Cart