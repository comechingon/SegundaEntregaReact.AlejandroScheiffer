import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }


    return(
        <CartContext.Provider value={{ cart, addItem }}>
            {children}
        </CartContext.Provider>

    )
}