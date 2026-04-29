/**
 * Le composant Cart represente le panier de courses.
 */

import styles from '../styles/Cart.module.css'

// Je déclare mon composant Cart
const Cart = () => {
    const monstera = 8
    const lierre = 12
    const bouquet = 9
    return (
        <div className={styles.cart}>
            <h2> Votre panier</h2>

                <ul className={styles.cartList}> 
                    <li>Montsera: {monstera} €</li>
                    <li>Lierre: {lierre} $</li>
                    <li>Bouquet de fleurs: {bouquet} €</li>
                </ul>
                <p>Total : {monstera + lierre + bouquet} €</p>

        </div>
    )
        
        
}

export default Cart