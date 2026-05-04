/**
 * ShoppingList est un composant qui la liste des cours
 */

// j'importe mon ShoppingList.module.css
import styles from '../styles/ShoppingList.module.css'

import CareScale from './CareScale';

// Je crée une liste de fleurs. Par la suite, j'utiliserai la liste pour renvoyer des fleurs depuis le composant ShoppingList.
const planList = [
    {
        name: 'montsera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true,
        water: 3,
        light:1
    },
    {
        name: 'ficus lyarata',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light:5
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light:5
    },
    {
        name: 'yucco',
        category: 'extérieur',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false,
        water: 6,
        light:5
    },
    {
        name: 'palmier',
        category: 'extérieur',
        id: '5',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light:3
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
                        {plant.isSpecialOffer ? <span className={styles.lmjSales}>Solde</span> : <span></span>}
                       
                       <CareScale careType='light' scaleValue={plant.light}></CareScale>
                       <CareScale careType='water' scaleValue={plant.water}></CareScale>
                    </li>
                )
            )
            }
        </ul>
    )
        
        
}

export default ShoppingList