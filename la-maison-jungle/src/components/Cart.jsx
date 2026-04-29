/**
 * Le composant Cart represente le panier de courses.
 */

// Je déclare mon composant Cart
const Cart = () => {
    const monstera = 8
    const lierre = 12
    const bouquet = 9
    return (
        <div>
            <h2> Votre panier</h2>

                <ul> 
                    <li>Montsera: {monstera} €</li>
                    <li>Lierre: {lierre} $</li>
                    <li>Bouquet de fleurs: {bouquet} €</li>
                </ul>
                <p>Total : {monstera + lierre + bouquet} €</p>

        </div>
    )
        
        
}

export default Cart