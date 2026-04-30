/**
 * ShoppingList est un composant qui la liste des cours
 */

// j'importe mon ShoppingList.module.css
import styles from '../styles/ShoppingList.module.css'

// Je crée une liste de fleurs. Par la suite, j'utiliserai la liste pour renvoyer des fleurs depuis le composant ShoppingList.
const planList = [
    {
        name: 'montsera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true
    },
    {
        name: 'ficus lyarata',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: false
    },
    {
        name: 'yucco',
        category: 'extérieur',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false

    },
    {
        name: 'palmier',
        category: 'extérieur',
        id: '5',
        isBestSale: false,
        isSpecialOffer: false
    }

];

// je crée mon composant ShoppingList qui renvoie une liste d'achats
const ShoppingList = () => {
   
    return (
        <ul className={styles.lmjPlantList}>
            {
                planList.map((plant) => (
                    <li key={plant.id} className={styles.lmjPlantItem}>
                        {plant.isBestSale ? <span>👌</span> : <span>😒</span>}
                        {plant.name}
                        {plant.isSpecialOffer ? <span>Solde</span> : <span></span>}
                    </li>
                )
            )
            }
        </ul>
    )
        
        
}

export default ShoppingList