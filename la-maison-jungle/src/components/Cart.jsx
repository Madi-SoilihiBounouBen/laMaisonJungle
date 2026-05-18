/**
 * Le composant Cart represente le panier de courses.
 */

import { useState } from 'react'

import styles from '../styles/Cart.module.css'

const Cart = ({ cart, updateCart }) => {
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce((acc, plant) => acc + plant.price, 0)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    const handleDelete = (index) => {
        updateCart((currentCart) => currentCart.filter((_, currentIndex) => currentIndex !== index))
    }
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    return isOpen ? (
        <div className={styles.lmjcartOverlay} onClick={handleOverlayClick}>
            <div className={styles.cart}>
                <button className={styles.lmjcloseButton} onClick={handleClose}>
                    Fermer
                </button>
                <h2>Votre panier</h2>

                {cart.length === 0 ? (
                    <p>Votre panier est vide</p>
                ) : (
                    <ul className={styles.cartList}>
                        {cart.map(({ name, price }, index) => (
                            <li key={`${name}-${index}`}>
                                {name} : {price} €
                                <button className={styles.lmjbuttonSupprimerProduit} onClick={() => handleDelete(index)}>
                                    Supprimer
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <p className={styles.lmjcartTotal}>Total : {total} €</p>
                <button className={styles.lmjbuttonViderPanier} onClick={() => updateCart([])}>Vider le panier</button>
            </div>
        </div>
    ) : (
        <button className={styles.cartButton} onClick={handleOpen}>
            Ouvrir panier
        </button>
    )
}

export default Cart
