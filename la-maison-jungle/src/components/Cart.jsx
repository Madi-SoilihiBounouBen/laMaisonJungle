/**
 * Le composant Cart represente le panier de courses.
 */

import { useState } from 'react'

import styles from '../styles/Cart.module.css'

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
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
                <h2>🧺Votre panier</h2>

                <div>
                    Monstera : {monsteraPrice} €
                    <button className={styles.lmjbuttonAddProduit} onClick={() => updateCart(cart + 1)}>
                        Ajouter au panier
                    </button>
                </div>

            
                <p className={styles.lmjcartTotal}>Total : {monsteraPrice * cart} €</p>
                <button className={styles.lmjbuttonViderPanier} onClick={() => updateCart(0)}>Vider le panier</button>
            </div>
        </div>
    ) : (
        <button className={styles.cartButton} onClick={handleOpen}>
            💼Ouvrir panier
        </button>
    )
}

export default Cart
